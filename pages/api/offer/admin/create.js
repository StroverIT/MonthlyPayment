// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectMongo } from "../../../../db/connectDb";

import Offer from "../../../../db/models/Offer";
import User from "../../../../db/models/User";

import {ObjectId} from "mongodb"

export default async function handler(req, res) {
    try{
        await connectMongo()

        let {title, price,benefits,notes, user,typeOfPayment} = req.body
        
        const email = user.split(" - ")[1]

        const foundUser = await User.findOne({email})

        const offer = await Offer.create({title,typeOfPayment, price, benefits, notes, user: new ObjectId(foundUser._id)})

        
        await User.updateOne({email}, {$push: {offers: offer._id}} )

        res.json({error: "true"})
    }catch(e){
        console.log(e);
        res.json( {error: "Нещо се обърка..."})
    }
  
  }
  