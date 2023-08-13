require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const storeItems = new Map([
  ["price_1NeMmlBstebxmpnsiAQn8lt5", { priceInNok: 15000, name: "Assassin" }],
  ["price_1NeN78BstebxmpnssBULQiKx", { priceInNok: 35000, name: "Space War" }],
  ["price_1NeN8QBstebxmpns8TPgfgm9", { priceInNok: 25000, name: "Ping Pong" }],
  ["price_1NeNALBstebxmpnsJsE7IAh0", { priceInNok: 16000, name: "Boxer" }],
  ["price_1NeNBEBstebxmpnsfWUuBJow", { priceInNok: 8500, name: "Furious" }],
  ["price_1NeNCBBstebxmpns2KTA9JfK", { priceInNok: 46000, name: "Cyberpunk" }],
  ["price_1NeNChBstebxmpnswlVR9VMZ", { priceInNok: 37500, name: "Black" }],
  ["price_1NeNDABstebxmpnsJTxRCNDL", { priceInNok: 17000, name: "Forge Legend" }],
  ["price_1NeNDcBstebxmpnsWT4Ku2xQ", { priceInNok: 10000, name: "Super Duper" }],
  ["price_1NeNE5BstebxmpnsbzEIahQe", { priceInNok: 30000, name: "Racing" }],
]);

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        const storeItem = storeItems.get(item.id);
        return {
          price_data: {
            currency: "nok",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInNok,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/canceled`,
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(3000);
