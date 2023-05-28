"use client";

import React from "react";
import Button from "../../components/Forms/Buttons/Default";
import Background from "../../components/Forms/Create/Create";

const Subscription = () => {
  return (
    <Background className="w-full text-center">
      <div className="text-lg">
        Месечен абонамент за цялостна поддръжка на сайта.
      </div>
      <div className="mt-4 mb-6">130 лв / месец</div>

      <Button text="Виж повече" className="w-full mt-2" />
    </Background>
  );
};

export default Subscription;
