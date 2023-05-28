import { Session } from 'next-auth'


async function getSession(cookie: string): Promise<Session> {
    const response = await fetch(`${process.env.LOCAL_AUTH_URL}/api/auth/session`, {
      headers: {
        cookie,
        cache: "no-store"
      },
    });
  
    const session = await response.json();
  
    return Object.keys(session).length > 0 ? session : null;
  }


  export default getSession