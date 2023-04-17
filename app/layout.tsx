import "../styles/globals.css";

import { Session } from 'next-auth'
import { headers } from 'next/headers'
import AuthContext from "./AuthContext";

import { redirect } from 'next/navigation';
// Components
import Footer from "../components/Layouts/Home/Footer";
import Navigation from "../components/Layouts/Home/Navigation";
import getSession from "./getSessionon";

import AuthProtector from "./AuthProtector"

// Header medata
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};
// Session


// Layout 
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode,
}){

  const session = await getSession(headers().get('cookie') ?? '');

  



  
  return (
    <html lang="en">
      <body className=" min-h-screen flex  flex-col bg-[#f7fcfd] relative">

      <AuthContext session={session}>

        <Navigation />
        <div className="mb-48 mt-36">
        {children}
        </div>
        <Footer />

      </AuthContext>
      </body>
    </html>
  );
}
[];
