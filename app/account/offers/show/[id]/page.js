import React from "react";

const Page = () => {
  return (
    <>
      <div className="grid grid-cols-[70%30%] gap-x-5">
        <div>
          <h1 className="text-xl font-semibold">Оферта:</h1>
          <h2 className="text-lg">Месечен абонамент за цялостна поддръжка на сайта</h2>

          <h1 className="text-xl font-semibold">Какво включва:</h1>
          <ul className="list-disc ml-5">
            <li>Създаване на 20 продукта на месец</li>
            <li>Редактиране на 20 продукта на месец</li>
            <li>10 функционалности на месец</li>
            <li>Корекции по функционалността на сайт</li>
            <li>Обновяване на остарели и уязвими модули</li>
          </ul>
        </div>
        <section className="p-6 bg-slate-200 rounded-xl">
          <section className="flex justify-between">
            <div>Цена</div>
            <div>XXX лв.</div>
          </section>
          <section className="flex justify-between">
            <div>Плащане:</div>
            <div>Месечно.</div>
          </section>
          {/* Notes */}
          <section className="mt-1 text-center">
            * Абонамента започва при първо заплащане
          </section>
        </section>
      </div>
    </>
  );
};

export default Page;
