// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectMongo } from "../../../db/connectDb";

import LogsEdit from "../../../db/models/LogsEdit";

import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  try {
    // const _id = JSON.parse(req.headers.token);

    const {offerId} = req.body

    await connectMongo();

    const logsEdit = await LogsEdit.find({offerId: new ObjectId(offerId)})
        console.log(logsEdit);
    
    res.json({ edits: logsEdit });
  } catch (e) {
    console.log(e);
    res.status(500)
  }
}
