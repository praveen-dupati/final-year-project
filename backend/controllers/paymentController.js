const stripe = require("stripe")('sk_test_51MBUnwAXzRjP9SEVq9qLg45ZpsyOsfGDxKENXVJWA3BHFMthuzljicJp9rZqH9LxPBZCxSgaXwG86TVuYEK0oeZ200v70JbgSi');

exports.processPayment = async (req, res, next) => {
  try {
    const myPayment = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "inr",
      metadata: {
        company: "Ecommerce",
      },
    });

    res
      .status(200)
      .json({ success: true, client_secret: myPayment.client_secret });
  } catch (error) {
    res.json({
      sucess: false,
      error,
      error_message: "payment error",
    });
  }
};


//send strip api key
exports.sendStripeApiKey = async (req, res, next) => {
    res.status(200).json({ stripeApiKey: 'pk_test_51MBUnwAXzRjP9SEVmM8IcbvjykBry75m8FK7Jc6BkIRto0433wSWANaxa8Ct3fG4yYAxUv271tp70ycsvHxwnfhd00SfnTzO8h' });
  };
  