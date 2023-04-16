import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  const isLogged = true;
  return (
    <nav className="fixed top-0 w-full">
      <div className="container flex justify-between pt-10 pb-16">
        <section className="flex items-center gap-x-2">
          <div className="relative w-10 h-10">
            <Image src="/flatIcons/employee_logo.png" fill alt="logo" />
          </div>
          <div className="text-2xl font-semibold">MonthlyPayments</div>
        </section>
        {isLogged && (
          <section className="">
            <ul className="flex mt-2 gap-x-5">
              <li>
                <Link href="/account">Абонаменти</Link>
              </li>
              <li>
                <Link href="/account/offers">Оферти</Link>
              </li>
              <li>
                <Link href="/account/offers">Изход</Link>
              </li>
            </ul>
          </section>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
