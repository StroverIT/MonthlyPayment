// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectMongo } from "../../../../db/connectDb";

import Offer from "../../../../db/models/Offer";
import User from "../../../../db/models/User";
import {ObjectId} from "mongodb"

export default async function handler(req, res) {
  try {
    const { offerId } = req.body;

    const _id = JSON.parse(req.headers.token);

    await connectMongo();

    const user = await User.findOne({ _id: new ObjectId(_id) });
    
    const offer = await Offer.findOne({ _id: offerId });

    if (offer.user.toString() != user._id.toString() && user.role != "admin") throw { error: "Грешка при индефикацията!" };

    res.json({ data: offer });
    
  } catch (e) {
    console.log(e);
    res.json({ error: "Нещо се обърка..." });
  }
}
