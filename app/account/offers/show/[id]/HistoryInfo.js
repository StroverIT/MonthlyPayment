"use client";
import React, { useState } from "react";
import Button from "../../../../../components/Forms/Buttons/Default";

const HistoryInfo = ({ data, condForAdminReq, condActivated }) => {
  const [isVisible, setVisible] = useState(
    condForAdminReq || condActivated ? false : true
  );



  return (
    <div>
      
        <Button
          className="p-5 my-4"
          text={isVisible ? "Скрий Историята" : "Покажи Историята"}
          onClick={() => setVisible(!isVisible)}
        />
      
      {isVisible && (
        <div>
         Testvam brat
        </div>
      )}
    </div>
  );
};

export default HistoryInfo;
