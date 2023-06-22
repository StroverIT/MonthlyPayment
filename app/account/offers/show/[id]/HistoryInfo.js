"use client";
import React, { useState } from "react";
import Button from "../../../../../components/Forms/Buttons/Default";
import Edits from "./Edits"

const HistoryInfo = ({ edits, condForAdminReq, condActivated }) => {
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
        <Edits data={edits}/>
      )}
    </div>
  );
};

export default HistoryInfo;

