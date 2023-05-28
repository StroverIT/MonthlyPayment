import React from 'react';
import getSession from '../../../getSessionon';
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import CreateForm from "./CreatForm"

import {getAll} from "../../../../API/user"

const Page = async () => {
  const session = await getSession(headers().get('cookie') ?? '');

  if(!session) redirect("/")
  else if(session?.role != "admin")redirect("/account")
  let users = await getAll()
  if(users.data){
    users= users.data
  }
    return (
        <div>
           <CreateForm users={users}/>
        </div>
    );
}

export default Page;
