// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectMongo } from "../../../../db/connectDb";

import User from "../../../../db/models/User";
import Offer from "../../../../db/models/Offer";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  try {
    const _id = JSON.parse(req.headers.token);
    const { type } = req.body;

    await connectMongo();

    const user = await User.findOne({ _id: new ObjectId(_id) });

    if (user.role != "admin") return res.json({ error: "Не е адмнинистратор" });

    let offers;
    if (user.role == "user") offers = await Offer.find();
    if (user.role == "admin") offers = await Offer.find().populate("user");

    const data = [];

    offers?.forEach((offer) => {
      if (type == "sub") {
        if (offer.isActivated.admin || offer.isActivated.user) data.push(offer);
      } else if (type == "offer") {
        if (!offer.isActivated.admin && !offer.isActivated.user)
          data.push(offer);
      }
    });

    res.json({ data });
  } catch (e) {
    console.log("Нещо се обърка...", e);
    res.json({ error: "Нещо се обърка..." });
  }
}
