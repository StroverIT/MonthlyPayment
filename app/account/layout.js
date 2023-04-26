import React from "react";
import getSession from "../getSessionon";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import Button from "../../components/Forms/Buttons/Default";

const Layout = async ({ children }) => {
  const session = await getSession(headers().get('cookie') ?? '');
  if(!session){
    redirect("/")
  }
  
  return <main className="container">

    {session?.role == "admin" && <div className="flex p-5 mb-4 bg-gray-100 shadow-xl gap-x-2 rounded-xl">
      <div>
        <h2 className="mb-3 text-lg">Admin panel</h2>
        <Link href="/account/admin/create"><Button text="Създай оферта" theme="green" className="p-4 mb-2 text-sm"/></Link>
      </div>
    </div> }
    {children}</main>;
};

export default Layout;
