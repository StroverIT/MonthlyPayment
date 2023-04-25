import React from 'react';
import getSession from '../../../getSessionon';
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await getSession(headers().get('cookie') ?? '');

  if(!session){

  }
  console.log(session);

    return (
        <div>
            Creating a admin page
        </div>
    );
}

export default Page;
