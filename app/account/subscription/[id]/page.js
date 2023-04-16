import React from "react";

const Page = ({ params }) => {
  const id = params.id;

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">
          Месечен абонамент за цялостна поддръжка на сайта
        </h1>
        <div> XXX лв / месец</div>
      </div>
      <section className="grid grid-cols-2 mt-10">
        <div>
          <section className="mt-2">
            <h3>Добавени продукти: 0/20</h3>
            <h3>Променени продукти: 0/20</h3>
            <h3>Добавени функционалности: 0/5</h3>
          </section>
        </div>
        <div className="p-10 bg-zinc-200 rounded-xl">
          <h2 className="text-xl font-medium">Описание на абонамента</h2>
          <h2 className="mt-2 font-medium">Продукти</h2>
          <p className="mt-1 ml-2">
            Създаване на 20 продукта на месец
            <br />
            Редактиране на 20 продукта на месец
          </p>
          <h2 className="mt-2 font-medium">Фунционалности:</h2>
          <p className="mt-1 ml-2">
            10 функционалности на месец
            <br />
            Всяка функционалност по сайта, се проверява всяка седмица. Ако не
            работи трябва да бъде оправена
          </p>
        </div>
      </section>
    </>
  );
};

export default Page;
