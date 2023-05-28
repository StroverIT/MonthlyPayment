import React from "react";

import SubsAndOffers from "../../SubsAndOffers";
import getSession from "../../../app/getSessionon";
import { headers } from "next/headers";

const Account = async () => {
  const session = await getSession(headers().get("cookie") ?? "");

  return (
    <>
      <div className="container text-3xl font-semibold">
        Здравейте, {session?.fullName}!{" "}
      </div>

      <div className="relative grid grid-cols-2 mt-10 ">
        <div>
          <h3 className="ml-3 text-lg font-medium text-left">
            Вашите Абонаменти
          </h3>

         {session.role == "user" && <SubsAndOffers type="sub" session={session}/>}
         {session.role == "admin" && <SubsAndOffers type="sub" session={session}/>}

        </div>
        <div className="absolute   h-full w-[1px] -translate-x-1/2 bg-gray-300 left-1/2"></div>
        <div className="">
          <h3 className="ml-3 text-lg font-medium text-left">Вашите Оферти</h3>
          {session.role == "user" && <SubsAndOffers type="offer" session={session}/>}
          {session.role == "admin" && <SubsAndOffers type="offer" session={session}/>}

        </div>
      </div>
    </>
  );
};

export default Account;
