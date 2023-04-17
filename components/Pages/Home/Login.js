"use client";

import React, { useState } from "react";

// Next auth
import { signIn } from "next-auth/react";

// Components
import Input from "../../Forms/Inputs/Default";
import Button from "../../Forms/Buttons/Default";

// Next navigation
import { usePathname } from "next/navigation";

// Icons
import { AiFillFacebook } from "react-icons/ai";
import Link from "next/link";

const Login = () => {
  const router = usePathname();

  const [loginInputs, setLoginInputs] = useState({
    email: "",
    password: "",
  });

  const [isFound, setIsFound] = useState(true);
  const [isLoading, setLoader] = useState(false);
  const [facebookLoading, setFacebookLoadin] = useState(false);

  const facebookHandler = async (e) => {
    setFacebookLoadin(true);

    await signIn("facebook");

    setFacebookLoadin(false);
  };
  async function submitHandler(e) {
    e.preventDefault();
    setLoader(true);

    const status = await signIn("credentials", {
      redirect: false,
      ...loginInputs,
    });
    if (status.error) {
      toastError(status.error);
      setLoader(false);
    }
    router.replace(router.asPath);
  }

  const inputHandler = (e) => {
    setLoginInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="p-10 bg-white rounded-md shadow-2xl">
      <div className="mb-10 text-5xl font-bold text-blue">Вход</div>
      <div className="flex flex-col gap-y-5">
        <Input
          name="email"
          type="email"
          placeholder="example@gmail.com"
          label="Email Address"
          onChange={inputHandler}
          value={loginInputs.email}
        />
        <Input
          name="password"
          type="password"
          placeholder="123456"
          label="Password"
          onChange={inputHandler}
          value={loginInputs.password}
        />

        <Button
          text="Вход"
          className="w-full col-span-1 row-start-4 max-lg:mt-5"
          isLoading={isLoading}
          onClick={submitHandler}
        />
      </div>
      <div className="grid mt-10 sm:grid-cols-2 gap-y-2">
        <Link href="/register">
          <span className="underline cursor-pointer ">Регистрация</span>
        </Link>
        <Link href="/forgotenPassword">
          <span className="underline cursor-pointer ">Забравена парола</span>
        </Link>
      </div>
      <section className="mt-12 cursor-pointer md:mx-12">
        <div
          className="bg-[#4267b2]  text-white  px-8 py-2 rounded-md flex-center"
          onClick={facebookHandler}
        >
          {facebookLoading ? (
            <div className="loader"> </div>
          ) : (
            <>
              <div className="text-3xl ">
                <AiFillFacebook />
              </div>
              <div className="flex items-center justify-center pl-2">
                Вход с Facebook
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Login;
