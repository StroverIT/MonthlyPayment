import React from "react";
import Button from "../../../../../components/Forms/Buttons/Default";

const Page = () => {
  return (
    <>
      <div className="grid grid-cols-[70%30%] gap-x-5 container mt-10">
        <div>
          <h1 className="text-xl font-semibold">Оферта:</h1>
          <h2 className="text-lg">Месечен абонамент за цялостна поддръжка на сайта</h2>

          <h1 className="text-xl font-semibold">Какво включва:</h1>
          <ul className="ml-5 list-disc">
            <li>Създаване на 10 продукта</li>
            <li>Редактиране на 40 продукта</li>
            <li>Корекции по функционалността на сайт</li>
            <li>Обновяване на остарели и уязвими модули</li>
            <li>Създаване на една функционалност</li>
      

          </ul>
          <div className="max-w-2xl mt-4 text-sm"><span className="text-red-500">*</span> Всяка една услуга която включва бройки, всеки месец се добяват, а не започват наново
          <br/>
            
            <span className="text-red-500">*</span> Примерно: Първият месец в абонамента сте имали &quot;Създаване на два продукта&quot;, обаче не е създанен нито един. Вторият месец ще имате четири продукта продукта
            , демек се надчисляват, над тези които имате. 
            <br/>
            <span className="text-red-500">*</span> Същото се отнася и за функционалностите
          </div>
   

        </div>
        <section className="self-start p-8 bg-white shadow-2xl rounded-xl">
          <section className="flex justify-between">
            <div>Цена</div>
            <div className="font-semibold">XXX лв.</div>
          </section>
          <section className="flex justify-between">
            <div>Плащане:</div>
            <div className="font-semibold">Месечно.</div>
          </section>
          {/* Notes */}
          <section className="my-4 text-sm text-center">
            * Абонамента започва при първо заплащане
          </section>
          <Button text="Активирай" className="w-full "/>
        </section>
      </div>
    </>
  );
};

export default Page;
