// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectMongo } from "../../../db/connectDb";

import Offer from "../../../db/models/Offer";
import LogsEdit from "../../../db/models/LogsEdit";

import { ObjectId } from "mongodb";

const createLog = async (history, offerId)=>{
    await LogsEdit.create({...history, offerId: new ObjectId(offerId)})
}
export default async function handler(req, res) {
  try {
    console.log("vlezna brat");

    const {offerId, historyData} = req.body;
    console.log(req.body);
    await connectMongo();

    historyData.forEach(history=>{
        createLog(history,offerId)
    })
    
    
    
    await Offer.updateOne({_id: new ObjectId(offerId)}, {$inc: {"products.editing": -(historyData.length) }})
  

    res.json({ message: "Всичко е наред" });
  } catch (e) {
    console.log(e);
    res.status(500)
  }
}
