import React from "react";
import Subscription from "./subscription";

export default function Page() {
  return (
    <>
      <div className="text-3xl font-semibold">Здравейте, Томи Костадинов! </div>
      <div className="grid grid-cols-3 mt-10">
        <Subscription />
      </div>
    </>
  );
}
