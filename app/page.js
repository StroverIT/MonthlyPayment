import "../styles/globals.css";


import Account from "../components/Pages/Account";
import Login from "../components/Pages/Home/Login";
import getSession from "./getSessionon";
import { headers } from "next/headers";



export default async function Home() {
    let session = await getSession(headers().get("cookie") ?? "");


  if(!session) return <Login />
  return <Account/>;
}

// export async function getServerSideProps(context) {
//   const { query } = context;
//   const session = await getSession({ req: context.req });
//   const isError = session?.user?.email;
//   if (session && !isError?.includes("error")) {
//     return {
//       redirect: {
//         destination: "/account",
//         permanent: false,
//       },
//     };
//   }
//   if (isError) {
//     query.error = isError;
//   }
//   return {
//     props: { session, query },
//   };
// }
