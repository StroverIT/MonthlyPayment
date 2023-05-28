import { getAllByUser,getAllForAdmin } from "../../API/offers";

import Subscription from "../../components/Subscription";


const ShowAll = async ({type, session}) => {
    
  let data
  if(session.role == "user")data = await getAllByUser({type});
  else if(session.role == "admin") data = await getAllForAdmin({type})

  const typeVar = type == "sub" ? "Абонаменти" : "Оферти"

  if (data?.length <= 0 || !data)
    return <div className="mt-20 text-center">Нямате {typeVar}</div>;
    
  return (
    <div className="grid m-5 gap-y-10">
      {data.map((offer) => {
        return (
          <Subscription
            key={offer._id}
            type={type}
            offer={offer}
            session={session}
          />
        );
      })}
    </div>
  );
};

export default ShowAll;
