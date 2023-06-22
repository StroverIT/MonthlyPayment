

import { headers } from "next/headers";
import getSession from "../app/getSessionon";
import { cookies } from 'next/headers';
import { revalidatePath } from "next/cache";

async function sessionId() {
    let session = await getSession(headers().get("cookie") ?? "");
    session = JSON.stringify(session._id);
    return session;
  }

export const getHistory = async (offerId)=>{
    const session = await sessionId()
  
    try{
      const res = await fetch(`${process.env.HOST_URL}/api/history/getHistory`, {
        method: "POST",
        headers: {token: session, "Content-Type": "application/json"},
        body: JSON.stringify({offerId})
      })
  
      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
      }
  
      const resData = await res.json();
      return resData
  
    }catch(e){
      console.log(e);
      return { error: "Нещо се обърка..."}
    }
  
  }