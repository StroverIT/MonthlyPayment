// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectMongo } from "../../../db/connectDb";
import User from "../../../db/models/User";

export default async function handler(req, res) {
    try{
        await connectMongo()
        const users = await User.find({}).select("-role -isSocialMedia -password -workers -isVerified -addresses")

        res.json({data: users})
    }catch(e){
        console.log("test getAll");
        res.json( {error: "Something went wrong!"})
    }
  
  }
  