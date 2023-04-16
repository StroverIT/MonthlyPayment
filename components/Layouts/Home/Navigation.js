import Image from "next/image";
import React from "react";

const Navigation = () => {
  const isLogged = true
  return (
    <nav className="container pt-10 pb-16 flex justify-between">
      <section className="flex items-center gap-x-2">
        <div className="relative w-10 h-10">
          <Image src="/flatIcons/employee_logo.png" fill alt="logo" />
        </div>
        <div className="text-2xl font-semibold">MonthlyPayments</div>
      </section>
      {isLogged && <section className="">
        <ul className="flex gap-x-5  mt-2">
          <li>Начало</li>
          <li>Абонаменти</li>
          <li>Оферти</li>

        </ul>
      </section>}
    </nav>
  );
};

export default Navigation;
