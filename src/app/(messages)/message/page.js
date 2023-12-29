'use client'
import React, {useEffect, useRef, useState} from 'react';
import Image from "next/image";
import user from "../../../../public/user.jpg";
import {BiSolidPhoneCall} from "react-icons/bi";
import {PiVideoCameraFill} from "react-icons/pi";
import {HiDotsHorizontal} from "react-icons/hi";
import {RiSendPlane2Fill} from "react-icons/ri";
import {LuVideo} from "react-icons/lu";
import {TiMicrophoneOutline} from "react-icons/ti";
import {TiAttachment} from "react-icons/ti";
import {HiOutlineClipboard} from "react-icons/hi2";
import {BsEmojiLaughing} from "react-icons/bs";
import {IoCheckmarkDone} from "react-icons/io5";
import Sidebar from "@/components/Sidebar/Sidebar";

const Page = () => {
    const [showSidebar, setShowSidebar] = useState(true);
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState("");
    const scrollRef = useRef();

    const handleOnSubmit = (e) => {
        e.preventDefault();

        setMessages((prevState) => [...prevState, messageInput]);
        scrollRef?.current?.scrollIntoView({
            top: 0,
            behavior: "smooth"

        })
        e.target.reset();
    }

    useEffect(() => {
        scrollRef?.current?.scrollIntoView({
            top: 0,
            behavior: "smooth"

        })
    }, [scrollRef, messages]);
    return (
        <div  className="w-full h-full flex overflow-hidden">
            <div className="flex-1 mx-[1px] ">
                <div className="px-[32px] py-[20px] bg-white w-full flex items-center justify-between">
                    <div className="flex items-start gap-[10px] ">
                        <div className="w-[38px] h-[38px]">
                            <Image className="w-full h-full rounded-full" src={user} alt=""/>
                        </div>
                        <div>
                            <h4 className="font-semibold text-[13px] text-black">Cameron Williamson</h4>
                            <div className="leading-4 flex items-center gap-1 text-[10px] text-lightDark"><span
                                className="inline-block w-2 h-2 bg-[#00B207] rounded-full"></span> Active now
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-[21px]">
                        <button type="button"
                                className="w-[38px] h-[38px] border border-light2  rounded-full text-dark flex items-center justify-center group">
                            <BiSolidPhoneCall className="text-primary text-lg font-medium"/>
                        </button>
                        <button type="button"
                                className="w-[38px] h-[38px] border  border-light2 rounded-full text-dark flex items-center justify-center group">
                            <PiVideoCameraFill className="text-primary text-lg font-medium"/>
                        </button>
                        <button onClick={() => setShowSidebar((prevState) => !prevState)} type="button"
                                className="w-[38px] h-[38px] border border-light2 rounded-full text-dark flex items-center justify-center group">
                            <HiDotsHorizontal className="text-primary text-lg font-medium"/>
                        </button>
                    </div>
                </div>
                <div ref={scrollRef} className="w-full h-[calc(100%-200px)] flex flex-col px-5 gap-5">
                    <div className="w-full h-full overflow-y-scroll message-box mb-5">
                        {messages.map((message) => (
                            <div ref={scrollRef} key={message}>
                                <div className="max-w-[50%] mb-3">
                                    <div className="flex gap-3 items-end">
                                        <Image className="w-[26px] h-[26px] object-cover rounded-full" src={user}
                                               alt="user"/>
                                        <p className="inline-block bg-white p-4 relative rounded-t-[20px] rounded-br-[20px] text-xs font-medium leading-4">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium
                                            ad
                                            adipisci aliquid, architecto aut cumque dignissimos distinctio dolorem
                                            dolores
                                            excepturi impedit in inventore nisi nobis nostrum odit quam qui quia rem
                                            repellendus
                                            sit soluta sunt tempora temporibus ullam voluptates. Aperiam explicabo ipsum

                                        </p>
                                    </div>
                                    <div className="mt-1">
                                <span
                                    className="uppercase text-lightDark font-medium text-xs ml-10">10:45 AM</span>
                                    </div>
                                </div>
                                <div className="max-w-[50%] items-end ml-auto flex-row-reverse">
                                    <div className="flex-row-reverse flex gap-3 items-end">
                                        <Image className="w-[26px] h-[26px] object-cover rounded-full" src={user}
                                               alt="user"/>
                                        <p className="text-xs font-medium leading-4 inline-block bg-primary text-white p-4 relative rounded-t-[20px] rounded-bl-[20px]">
                                            {message}
                                        </p>

                                    </div>
                                    <div className="mt-1">
                                <span
                                    className="uppercase text-lightDark font-medium text-xs ml-auto mr-10 flex gap-1 items-center justify-end"><IoCheckmarkDone/> 10:45 AM</span>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
               <div className="px-5 pb-5">
                   <div className="w-full bg-white rounded-[20px] overflow-hidden">
                       <form action="#" onSubmit={(e) => handleOnSubmit(e)}>
                           <div className="">
                               <input onChange={(e) => setMessageInput(e.target.value)} type="text" name="sendMessage"
                                      id="sendMessage"
                                      className="w-full h-full p-5 focus:outline-0 text-sm font-medium" placeholder="send message"/>
                           </div>
                           <div className="border-t border-light2 flex items-center justify-between py-[14px] px-5">
                               <div className="flex items-center gap-[14px]">
                                   <div className="flex items-center gap-[12px] border-r border-r-light2 pr-2">
                                       <button
                                           type="button"
                                           className="font-medium text-[19px] text-lightDark cursor-pointer w-[20px]">
                                           <LuVideo
                                           />
                                       </button>
                                       <button
                                           type="button"
                                           className="font-medium text-[19px] text-lightDark cursor-pointer w-[20px]">
                                           <TiMicrophoneOutline
                                           />
                                       </button>
                                   </div>
                                   <div className="flex items-center gap-[12px] border-r border-r-light2 pr-[12px]">
                                       <button
                                           type="button"
                                           className="font-medium text-[19px] text-lightDark cursor-pointer w-[20px]">
                                           <TiAttachment
                                           />
                                       </button>
                                       <button
                                           type="button"
                                           className="font-medium text-[19px] text-lightDark cursor-pointer w-[20px]">
                                           <HiOutlineClipboard
                                           />
                                       </button>
                                       <button
                                           type="button"
                                           className="font-medium text-[19px] text-lightDark cursor-pointer w-[20px]">
                                           <BsEmojiLaughing
                                           />
                                       </button>
                                   </div>
                                   <div className="flex items-center gap-[12px]">
                                       <button
                                           type="button"
                                           className="font-medium text-[19px] text-lightDark cursor-pointer w-[20px]">
                                           <HiDotsHorizontal
                                           />
                                       </button>
                                   </div>
                               </div>
                               <div className="flex items-center">
                                   <button type="submit"
                                           className="font-medium text-[19px] text-primary cursor-pointer w-[20px]">
                                       <RiSendPlane2Fill/></button>
                               </div>
                           </div>
                       </form>
                   </div>
               </div>
            </div>
           <Sidebar showSidebar={showSidebar} />
        </div>
    );
};

export default Page;