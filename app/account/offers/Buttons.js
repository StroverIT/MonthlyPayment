"use client";

import React from "react";
import Button from "../../../components/Forms/Buttons/Default";
import Link from "next/link";

const Buttons = () => {
  return (
    <div className="flex gap-x-5 mb-5">
      <Link href="/account/offers"><Button className="p-4 text-sm" text="Офертите ми" /></Link>
      <Link href="/account/offers/create"><Button className="p-4 text-sm" text="Създай оферта" /></Link>

    </div>
  );
};

export default Buttons;
