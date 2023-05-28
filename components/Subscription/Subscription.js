"use client";

import React from "react";

import Link from "next/link";

// Components
import Status from "../Offers/Status";
import Button from "../Forms/Buttons/Default";
import Background from "../Forms/Create/Create";

const Subscription = ({offer,session, type}) => {
  return (
    <Background className="w-full text-center">
      {session.role == "admin" && <div>
        <ul>
    <li>{offer.user.fullName}</li>
    <li> {offer.user.email} </li>

        </ul>
        
       
        </div>}
      <div className="text-lg">
        {offer.title}
      </div>
      <div className="mt-4 mb-6">{offer.price} лв / {offer.typeOfPayment}</div>
      {type == "sub" && session.role == "admin" && <Status isActivated={offer.isActivated}/>}
     <Link href={`/account/offers/show/${offer._id}`}> <Button text="Виж повече" className="w-full mt-2"  /></Link>
    </Background>
  );
};

export default Subscription;
