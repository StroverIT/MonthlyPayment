"use client";
import React, { useState } from "react";
import Button from "../../../../../components/Forms/Buttons/Default";

const OfferInfo = ({ data, condForAdminReq, condActivated }) => {
  const [isVisible, setVisible] = useState(
    condForAdminReq || condActivated ? false : true
  );

  const benefits = data.benefits.split("\n");
  const notes = data.notes.split("\n");

  return (
    <div>
     
        <Button
          className="p-5 my-4"
          text={isVisible ? "Скрий офертата" : "Покажи офертата"}
          onClick={() => setVisible(!isVisible)}
        />
    
      {isVisible && (
        <div>
          <h1 className="text-xl font-semibold">Оферта:</h1>
          <h2 className="text-lg">{data.title}</h2>

          <h1 className="text-xl font-semibold">Какво включва:</h1>
          <ul className="ml-5 list-disc">
            {benefits.map((benefit, index) => {
              return <li key={index}>{benefit}</li>;
            })}
          </ul>
          <div className="max-w-2xl mt-4 text-sm">
            {notes.map((note, index) => {
              return (
                <div key={index}>
                  <span className="text-red-500" key={index}>
                    *
                  </span>{" "}
                  {note}
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default OfferInfo;
