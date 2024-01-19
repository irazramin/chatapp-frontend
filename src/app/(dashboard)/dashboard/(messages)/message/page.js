'use client'
import Image from 'next/image';
import React, {useEffect, useRef, useState} from 'react';
import noMessage from "../../../../../../public/no-message.gif"
const Page = () => {
    return (
     <div className="w-full h-screen flex items-center justify-center ">
        <Image width={200} src={noMessage} alt=""/>
     </div>
    );
};

export default Page;