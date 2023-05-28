"use client";

import React from "react";

import { useState } from "react";

import {toastError, toastSuccess} from "../../../../libs/Notifications"
import { signIn, getSession } from "next-auth/react";

import Input from "../../../../components/Forms/Inputs/Default"
import Button from "../../../../components/Forms/Buttons/Default";

import { redirect,  useRouter } from "next/navigation";
import Link from "next/link";

import {subTimeVar} from "./variables"

import {create} from "../../../../controllers/offer"

const CreateForm =  ({users}) => {
  

  const router = useRouter();

  const [inputs, setInputs] = useState({
    // name: "",
    title: "",
    price: "",
    benefits: "",
    notes: ""
  });
  const userList = users.map(user=>{
    return {_id: user._id, name: `${user.fullName} - ${user.email}`}
  })

  const [userDropVal, setUserDropVal] = useState(userList[0]);
  const [subTime, setSubTime] = useState(subTimeVar[0]);


  const dropHandler = (value) => {
    setUserDropVal({ name: value.name, _id: value._id });
  };
  const subDropHandler = (value) => {
    setSubTime({ name: value.name, _id: value._id });
  };
  const [isFound, setIsFound] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (errorMessages.length > 0) return;
    //POST form values
    const data = await create({ ...inputs, user: userDropVal.name,  typeOfPayment: subTime.name})
    
    setLoading(false);

    if (data.message) {
      

      router.push("/account")

      toastSuccess(data.message)

    }
    //Await for data for any desirable next steps
    if (data.error) {
      toastError(data[0]);
    }
  
  };

  const inputHandler = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="p-10 bg-white rounded-md shadow-2xl">
      <div className="mb-4 text-5xl font-bold text-blue">Оферта</div>
      {/* <ColorInput
      labelName="Име"
      name="name"
      type="text"
      isBtn={false}
      state={isFound ? "" : "wrong"}
      input={loginInputs.name}
      setInput={inputsHandler}
    /> */}
      <div className="flex flex-col mt-10 gap-y-5">
        <div className="grid items-center gap-5 md:grid-cols-2">
          <Input
            name="subTime"
            type="dropdown"
            label="Времетраене"
            onChange={subDropHandler}
            listHandler={subDropHandler}
            listValue={subTime || null}
            list={subTimeVar || []}
          />
          <Input
            name="user"
            type="dropdown"
            label="Потребител"
            onChange={dropHandler}
            listHandler={dropHandler}
            listValue={userDropVal || null}
            list={userList || []}
          />
        </div>
       
        <div className="">
          <Input
            name="title"
            type="text"
            placeholder="Поддръжка на уебсайт"
            label="Заглавие"
            onChange={inputHandler}
            value={inputs.email}
          />
         <Input
            name="price"
            type="text"
            placeholder="Цена"
            className="mt-2"
            label="Цена"
            onChange={inputHandler}
            value={inputs.price}
          />
        </div>
        <Input
            name="benefits"
            type="text"
            placeholder="Еди какво си '/n"
            label="Бенефити"
            className="mt-1 "
            classNameInput="h-44"
            onChange={inputHandler}
            value={inputs.benefits}
            isLargeText={true}
          />
       <Input
            name="notes"
            type="text"
            placeholder="Еди какво си '/n"
            label="Notes"
            className="mt-1 "
            classNameInput="h-44"
            onChange={inputHandler}
            value={inputs.notes}
            isLargeText={true}
          />
        <Button
          text="Изпрати"
          className="w-full col-span-1 row-start-4 max-lg:mt-5"
          isLoading={isLoading}
          onClick={submitHandler}
        />
      </div>
      <div className="mt-10">
        Вече имате акаунт?
        <Link href="/">
          <span className="pl-1 underline cursor-pointer">Вход</span>
        </Link>
      </div>
    </div>
  );
};

export default CreateForm;


