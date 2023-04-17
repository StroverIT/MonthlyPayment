"use client"
import React from 'react';

import {ImExit} from "react-icons/im"
import { signOut } from 'next-auth/react';

const LogoutBtn = () => {
    return (
        <button
        type="button"
        className="flex items-center justify-center h-full px-5 py-2 text-sm font-semibold text-white transition-colors bg-red-500 border border-red-500 cursor-pointer hover:bg-transparent hover:text-red-500"
        onClick={() => signOut()}
      >
        <div className="mr-1">
          <ImExit />
        </div>
        Изход
      </button>
    );
}

export default LogoutBtn;
