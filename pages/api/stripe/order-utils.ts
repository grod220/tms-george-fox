import Stripe from 'stripe';
import ItemStore, { OptionChoice } from '../../../components/order-app/stores/item-store';

export type ShoppingCart = ItemStore[];

export interface OrderRequest {
  orderType: string;
  contactName: string;
  fulfillmentTime: string;
  fulfillmentDate: string;
  contactNumber: string;
  specialInstructions: string;
  fulfillmentOption: string;
  shoppingCart: ShoppingCart;
  tip: string | number;
  tax: string;
  deliveryLocation?: string;
  numberOfGuests?: number;
  deliveryFee?: number;

  // Business orders
  buildingName?: string;
  businessSuite?: string;
  companyName?: string;
}

const formatDescription = (choices: OptionChoice[]): string =>
  choices.map((obj) => (obj.price ? `${obj.title} (+$${obj.price})` : obj.title)).join(' - ');

export const formatCart = (
  shoppingCart: ShoppingCart,
  tip: string,
  tax: string,
  deliveryFee?: number,
): Stripe.Checkout.SessionCreateParams.LineItem[] => {
  const line_items = shoppingCart.map((item) => {
    const lineItem: Stripe.Checkout.SessionCreateParams.LineItem = {
      name: item.dishName,
      amount: Math.round(item.total * 100),
      currency: 'usd',
      quantity: 1,
    };

    const allChoices = item.options.flatMap((option) => option.choices);

    if (allChoices.length) {
      lineItem.description = formatDescription(allChoices);
    }
    return lineItem;
  });

  line_items.push({
    name: 'Tax',
    amount: Math.round(Number(tax) * 100),
    currency: 'usd',
    quantity: 1,
  });

  if (deliveryFee) {
    line_items.push({
      name: 'Delivery Fee',
      amount: Math.round(Number(deliveryFee) * 100),
      currency: 'usd',
      quantity: 1,
    });
  }

  if (tip) {
    line_items.push({
      name: 'Tip',
      description: 'Thank you! 💙',
      amount: Math.round(Number(tip) * 100),
      currency: 'usd',
      quantity: 1,
    });
  }

  return line_items;
};

export const formatPaymentIntentObj = (
  reqBody: OrderRequest,
): Stripe.Checkout.SessionCreateParams.PaymentIntentData => {
  const metaDataObj: Stripe.MetadataParam = {
    order_type: reqBody.orderType,
    contact_name: reqBody.contactName,
    fulfillment_time: reqBody.fulfillmentTime,
    fulfillment_date: reqBody.fulfillmentDate,
    contact_number: reqBody.contactNumber,
    special_instructions: reqBody.specialInstructions,
    fulfillment_option: reqBody.fulfillmentOption,
    building_name: reqBody.buildingName === undefined ? null : reqBody.buildingName,
    business_suite: reqBody.businessSuite === undefined ? null : reqBody.businessSuite,
    company_name: reqBody.companyName === undefined ? null : reqBody.companyName,
  };

  reqBody.shoppingCart
    .map((item) => {
      const allChoices = item.options.flatMap((option) => option.choices);

      if (allChoices.length) {
        return `${item.dishName} (${formatDescription(allChoices)})`;
      } else {
        return item.dishName;
      }
    })
    .forEach((item, index) => {
      metaDataObj[`Item ${index + 1}`] = item;
    });

  const paymentIntentObj: Stripe.Checkout.SessionCreateParams.PaymentIntentData = {
    metadata: metaDataObj,
  };

  if (reqBody.deliveryLocation) {
    paymentIntentObj.shipping = {
      address: { line1: reqBody.deliveryLocation },
      name: reqBody.contactName,
      phone: reqBody.contactNumber,
    };
  }

  if (reqBody.numberOfGuests) {
    metaDataObj.number_of_guests = reqBody.numberOfGuests;
  }

  return paymentIntentObj;
};
