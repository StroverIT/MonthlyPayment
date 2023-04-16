"use client";

import React from "react";
import Background from "../../../components/Forms/Create/Create";
import Button from "../../../components/Forms/Buttons/Default"
import Link from "next/link";

const Offer = () => {
  return (
    <Background className="w-full text-center">
      <div className="text-lg">
        Месечен абонамент за цялостна поддръжка на сайта.
      </div>
      <div className="mt-4 mb-6">130 лв / месец</div>

      <Link href="/account/offers/show/123"><Button text="Виж повече" className="w-full mt-2" /></Link>
    </Background>
  );
};

export default Offer;
