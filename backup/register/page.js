
import Register from "../../components/Pages/Home/Register";
import getSession from "../getSessionon";
import { headers } from "next/headers";

export default async function Home(props) {
  const session = await getSession(headers().get('cookie') ?? '');

  
  return (
    <>
      <main className="container flex-col flex-center">
        <Register session={session} />
      </main>
    </>
  );
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
