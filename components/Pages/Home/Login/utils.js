"use client"

import { signIn } from "next-auth/react";
import { toastError, toastSuccess } from "../../../../libs/Notifications";

export async function submitHandler({setLoader, router, loginInputs} ) {
    setLoader(true);

    const status = await signIn("credentials", {
      redirect: false,
      ...loginInputs,
    });

   console.log(status);
    if (status.error) {
      toastError(status.error);
     
    }
    if(!status.error){
    router.refresh()
      toastSuccess(`Добре дошли!`)

    }
    setLoader(false);

      
    
    
  }

export  const facebookHandler = async ({setFacebookLoading}) => {
  setFacebookLoading(true);

    await signIn("facebook");

    setFacebookLoading(false);
  };
  