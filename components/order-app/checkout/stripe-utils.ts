import { toJS } from 'mobx';
import OrderStore from '../stores/order-store';
import { formatGooglePlacesObj } from '../stores/order-utils';
import { convert24HourTo12Format, extendedDateFormat } from '../stores/date-utils';
import { loadStripe } from '@stripe/stripe-js';
import * as Sentry from '@sentry/browser';

const serializeOrderStore = (orderStore) => {
  const baseObj = toJS(orderStore);
  baseObj.shoppingCart = baseObj.shoppingCart.map((item, index) => {
    item.total = orderStore.shoppingCart[index].total;
    return item;
  });
  baseObj.tax = orderStore.tax;

  baseObj.fulfillmentTime = convert24HourTo12Format(orderStore.dateStore.fulfillmentTime);
  baseObj.fulfillmentDate = extendedDateFormat(orderStore.dateStore.fulfillmentDate);

  if (OrderStore.fulfillment.option === 'delivery') {
    baseObj.deliveryLocation = formatGooglePlacesObj(baseObj.deliveryLocation);
    baseObj.deliveryFee = orderStore.deliveryFee;
    baseObj.numberOfGuests = orderStore.numberOfGuests;
  }
  return baseObj;
};

export default async function handleCheckoutRequest(showSpinner, showError) {
  showSpinner(true);
  try {
    const res = await fetch(
      // 'http://localhost:5001/tms-f-f-bruce/us-central1/function/stripe/order',
      'https://us-central1-tms-f-f-bruce.cloudfunctions.net/function/stripe/order',
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'post',
        body: JSON.stringify(serializeOrderStore(OrderStore)),
      },
    );
    const jsonResponse = await res.json();
    if (!res.ok) {
      throw Error(`Error from Firebase Func: ${jsonResponse.error}`);
    }
    const stripe = await loadStripe('pk_live_ivfkFrzhLuZbUiZRVkvsBwI3');
    // const stripe = await loadStripe('pk_test_OaDvLsgEGQbshVWpSFMQMm1k');
    const result = await stripe.redirectToCheckout({
      sessionId: jsonResponse.id,
    });

    if (result.error.message) {
      throw new Error(result.error.message);
    }
  } catch (e) {
    showSpinner(false);
    showError(true);
    console.error(e);
    Sentry.captureException({
      event_id: 'handleCheckoutRequest error',
      message: `${e} :: OrderStore: ${JSON.stringify(serializeOrderStore(OrderStore))}`,
    });
  }
}
