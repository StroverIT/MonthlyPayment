import React from "react";
import Subscription from "./subscription";
import getSession from "../getSessionon";
import { headers } from "next/headers";

export default async function Page() {
  const session = await getSession(headers().get('cookie') ?? '');
  return (
    <>
      <div className="text-3xl font-semibold">Здравейте, {session?.user?.name}! </div>
      {/* <div className="grid grid-cols-3 mt-10">
        <Subscription />

      </div> */}
      <div className="mt-20 text-xl text-center">Нямате абонаменти</div>

    </>
  );
}
