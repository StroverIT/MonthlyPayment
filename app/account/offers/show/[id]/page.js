import React from "react";

import Sidebar from "./Sidebar";

import { getOffer, activeOffer } from "../../../../../API/offers";
import {getHistory} from "../../../../../API/history"

import OfferInfo from "./OfferInfo";
import HistoryInfo from "./HistoryInfo";

const Page = async ({ params }) => {
  const { id } = params;

  const data = await getOffer(id);
  const {edits} = await getHistory(id)
    console.log(edits);
  if (!data) return <div className="flex-center">Зарежда се...</div>;

  const condForActivate = !data.isActivated.admin && !data.isActivated.user;
  const condForAdminReq = !data.isActivated.admin && data.isActivated.user;
  const condActivated = data.isActivated.admin && data.isActivated.user;

  return (
    <>
      <div className="grid grid-cols-[70%30%]  gap-x-5 container mt-10  ">
        <div>
          {(condForAdminReq || condActivated) && (
            <div>
              <h1 className="text-xl font-semibold">
                Оставащи продукти от абонамента:
              </h1>
              <ul className="">
                <li>Добавяне: {data.products.adding}</li>
                <li>Редактиране: {data.products.editing}</li>
              </ul>
              {data.functionality && (
                <>
                  <h1 className="text-xl font-semibold">
                    Оставащи функционалности:
                  </h1>
                  <ul className="">
                    <li>
                      Лесни:{" "}
                      {data.functionality.low ? data.functionality.low : 0}
                    </li>
                    <li>
                      Средни:{" "}
                      {data.functionality.medium
                        ? data.functionality.medium
                        : 0}
                    </li>
                    <li>
                      Сложни:{" "}
                      {data.functionality.high ? data.functionality.high : 0}
                    </li>
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
        <Sidebar
          data={data}
          activeOffer={activeOffer.bind({}, { offerId: id })}
          condForActivate={condForActivate}
          condForAdminReq={condForAdminReq}
          condActivated={condActivated}
        />
      </div>
      <div className="container grid grid-cols-[60%40%]">
        {condActivated && <HistoryInfo edits={edits} />}
        {(condForAdminReq || condActivated) && <OfferInfo data={data} />}
      </div>
    </>
  );
};

export default Page;
