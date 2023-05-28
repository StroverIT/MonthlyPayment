// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectMongo } from "../../../../db/connectDb";

import User from "../../../../db/models/User";
import Offer from "../../../../db/models/Offer"
import {ObjectId} from "mongodb"

export default async function handler(req, res) {
  try {
    console.log(JSON.parse(req.headers.token));
    const _id = JSON.parse(req.headers.token);
    const { type } = req.body;

    await connectMongo();

    
    const offers = await Offer.find({user: new ObjectId(_id)})
      
    const data = []

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
