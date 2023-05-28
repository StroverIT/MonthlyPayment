"use server"


import { headers } from "next/headers";
import getSession from "../app/getSessionon";
import { cookies } from 'next/headers';
import { revalidatePath } from "next/cache";




async function sessionId() {
  let session = await getSession(headers().get("cookie") ?? "");
  session = JSON.stringify(session._id);
  return session;
}
// --------------- USER ---------------

export const getAllByUser = async ({type}) => {
  const session = await sessionId();
  try {
    const res = await fetch(`${process.env.HOST_URL}/api/offer/user/getAll`, {
      method: "POST",
      body: JSON.stringify({type}),
      headers: { token: session, "Content-Type": "application/json" },
    });
   
    if (!res.ok) {

      throw new Error("Failed to fetch data");
    }

    const resData = await res.json();

    return resData.data;
  } catch (e) {
    console.log(e);
    console.log("Fetch Error");
    return { error: "Something went wrong!" };
  }
};
export const getOffer = async (offerId) => {
  const session = await sessionId();

  try {
    const res = await fetch(`${process.env.HOST_URL}/api/offer/user/getOffer`, {
      method: "POST",
      headers: { token: session, "Content-type": "application/json" },
      body: JSON.stringify({ offerId }),
    });


    if (!res.ok) {
     
      throw new Error("Failed to fetch data");
    }

    const resData = await res.json();
    return resData.data;
  } catch (e) {
    // console.log(e);
    return { error: "Something went wrong!" };
  }
};

export  const activeOffer = async ({offerId, pathname})=>{

  const session = await sessionId()

  try{
    const res = await fetch(`${process.env.HOST_URL}/api/offer/user/activate`, {
      method: "POST",
      headers: {token: session, "Content-Type": "application/json"},
      body: JSON.stringify({offerId})
    })

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    const resData = await res.json();

    if(resData.message){
      revalidatePath(`/account/offers/show/${offerId}`)
    }

  }catch(e){
    console.log(e);
    return { error: "Нещо се обърка..."}
  }

}




// -------------- ADMIN -----------

export const getAllForAdmin = async ({type})=>{
  const session = await sessionId()

  try{
    const res = await fetch(`${process.env.HOST_URL}/api/offer/admin/getAll`, {
      method: "POST",
      headers: {token: session, "Content-Type": "application/json"},
      body: JSON.stringify({type})
    })

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    const resData = await res.json();

    return resData.data

  }catch(e){
    console.log(e);
    return { error: "Нещо се обърка..."}
  }

}