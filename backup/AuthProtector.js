

import { redirect } from 'next/navigation';


async function AuthProtector({session, route, children}) {
    if(route == "/" || route == "/register" || route == "/#_=_" && session){
        redirect("/account")
      }
    
   
  if(route?.includes("/account") && !session){
    redirect("/")
  }

  return children
}

  export default AuthProtector