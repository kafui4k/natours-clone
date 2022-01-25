// import axios from 'axios';
// import { showAlert } from './alerts';
// const stripe = Stripe(
//   'pk_test_51GqqppHNVkRDXRYk4vcEiOR4Ek5tZZnKDpbRhUWy1Nr1E6VbapJH9MDus4IWUaUQsfe9Afwzm69ofJFDhCbN3nmT00z4YQc5Qh'
// );

// export const bookTour = async tourId => {
//   try {
//     // 1) Get checkout session from API
//     const session = await axios(
//       `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
//     );

//     // 2) Create chechkout form + charge credit card
//     await stripe.redirectToCheckout({
//       sessionId: session.data.session.id
//     });
//   } catch (error) {
//     showAlert('error', err);
//   }
// };
