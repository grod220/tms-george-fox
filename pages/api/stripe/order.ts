import { formatCart, formatPaymentIntentObj } from './order-utils';
import Stripe from 'stripe';
import * as Sentry from '@sentry/node';
import { NextApiRequest, NextApiResponse } from 'next';

// For testing
const stripe = new Stripe(process.env.STRIPE_DEV_SECRET!, { apiVersion: '2020-08-27' });
// const stripe = new Stripe(process.env.STRIPE_PROD_SECRET, { apiVersion: '2020-08-27' });

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const sessionObj = {
      payment_method_types: ['card' as Stripe.Checkout.SessionCreateParams.PaymentMethodType],
      line_items: formatCart(req.body.shoppingCart, req.body.tip, req.body.tax, req.body.deliveryFee),
      success_url: 'https://www.themeatballstoppe.com/order/success',
      cancel_url: 'https://www.themeatballstoppe.com/order/cancelled',
      payment_intent_data: formatPaymentIntentObj(req.body),
    };
    const stripeSession = await stripe.checkout.sessions.create(sessionObj);
    res.status(200).send(stripeSession);
  } catch (e) {
    Sentry.captureException(e);
    res.status(500).send(`Exception: ${e}`);
  }
};
