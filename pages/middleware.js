// middleware.ts
import {  NextResponse } from 'next/server'
import getSession from '../app/getSessionon';

// Limit the middleware to paths starting with `/api/`
export const config = {
  matcher: '/api/:function*',
}

export async function middleware(req) {
  
  const {cookies } = req
  console.log(cookies);
  // Call our authentication function to check the request

  // const session = await getSession(headers().get('cookie') ?? '');

  // let cookie = req.cookies.getAll()
  
  // if(cookie){
  //     cookie = Object.entries(cookie).map(cookie=>{
  //       return cookie[1].name + "=" + cookie[1].value
  //     }).join("; ")
         
  // }

  
  //   console.log(req);
    
  // const session = await getSession(cookie)

  // console.log(session);
  

  // return NextResponse.redirect(new URL('/about-2', request.url))
}