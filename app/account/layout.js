import React from "react";
import getSession from "../getSessionon";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Layout = async ({ children }) => {
  const session = await getSession(headers().get('cookie') ?? '');
  if(!session){
    redirect("/")
  }

  return <main className="container">{children}</main>;
};

export default Layout;
