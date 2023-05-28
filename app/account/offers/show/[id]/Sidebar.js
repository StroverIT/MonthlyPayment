"use client";
import React, { useEffect } from "react";
import Button from "../../../../../components/Forms/Buttons/Default";
import Status from "../../../../../components/Offers/Status";
const Sidebar = ({
  data,
  activeOffer,
  condForActivate,
  condForAdminReq,
}) => {


  return (
    <section className="sticky top-0 self-start p-8 bg-white shadow-2xl rounded-xl">
      <section className="flex justify-between">
        <div>Цена</div>
        <div className="font-semibold">{data.price} лв.</div>
      </section>
      <section className="flex justify-between">
        <div>Плащане:</div>
        <div className="font-semibold">{data.typeOfPayment}.</div>
      </section>
      {(data.isActivated.admin || data.isActivated.user )&& 
      
      <section className="flex justify-between">
      <div>Статус:</div>
      <Status isActivated={data.isActivated}/>
    </section>
       }
      {/* Notes */}
      {data.typeOfPayment == "Месечно" && condForActivate && (
        <section className="my-4 text-sm text-center">
          * Абонамента започва при първо заплащане
        </section>
      )}
      {condForActivate && (
        <form action={activeOffer}>
          <Button type="submit" text="Активирай" className="w-full " theme="green" />
        </form>
      )}
      {/* {condForAdminReq &&  <form action={activeOffer}><Button type="submit" text="Изпрати запитване"  className="w-full mt-5" /></form>} */}
    </section>
  );
};

export default Sidebar;
