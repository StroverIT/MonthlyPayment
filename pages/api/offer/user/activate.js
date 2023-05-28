// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectMongo } from "../../../../db/connectDb";

import Offer from "../../../../db/models/Offer";
import User from "../../../../db/models/User";

import { ObjectId } from "mongodb";
import sendEmail from "../../../../utils/sendEmail";

export default async function handler(req, res) {
  try {
    const _id = JSON.parse(req.headers.token);
    const {offerId} = req.body;

    await connectMongo();

    const user = await User.findOne({ _id: new ObjectId(_id) }).select(
      "-fullName -isSocialMedia -password -role -isVerified -subscriptions -createdAt -addresses -offers"
    );
    
    
    await Offer.updateOne({_id: new ObjectId(offerId)}, {$set: {"isActivated.user": true}})

    const message = `
    <h1>Нова оферта от ${user.email}</h1>
    <a href="${process.env.HOST_URL}">Натиснете тук</a>
    `;
    // await sendEmail(
    //     process.env.EMAIL_SEND,
    //     process.env.EMAIL_SEND,
    //     "Нова активирана оферта!",
    //     message
    //   );

    res.json({ message: "Всичко е наред" });
  } catch (e) {
    console.log(e);
    res.status(500)
  }
}
