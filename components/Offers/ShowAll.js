import { getAllByUser } from "../../API/offers";

import Subscription from "../../components/Subscription";
const ShowAll = async () => {
  const data = await getAllByUser();

  console.log("data", data);
  if (data?.length <= 0)
    return <div className="mt-20 text-xl text-center">Нямате Оферти</div>;
  return (
    <div className="grid m-5 gap-y-10">
      {data.map((offer) => {
        return (
          <Subscription
            key={offer._id}
            title={offer.title}
            price={offer.price}
            typeOfPayment={offer.typeOfPayment}
            _id={offer._id}
          />
        );
      })}
    </div>
  );
};

export default ShowAll;
