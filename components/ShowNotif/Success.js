"use client"
import React, { useEffect } from 'react';

import {toastSuccess} from "../../libs/Notifications"

const Sucess = ({text}) => {
    console.log(text);
        toastSuccess(text)
    
    return null
}

export default Sucess;
