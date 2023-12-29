import React from 'react';
import {HiDotsHorizontal} from "react-icons/hi";
import {BiSearch} from "react-icons/bi";
import {LuPlus} from "react-icons/lu";
import Image from "next/image";
import user from "../../../public/user.jpg"
import { IoCheckmarkDone } from "react-icons/io5";


const Conversation = () => {
    return (
        <div className="w-[320px] h-screen fixed top-0 left-0 bg-white overflow-y-scroll conversation">
            <div className="px-5 mt-5">
                <div className="flex items-center justify-between">
                    <h4 className="text-lg text-[#171C1B] font-bold">Messages</h4>
                    <HiDotsHorizontal className="text-light2 text-xl"/>

                </div>
                <div
                    className={`relative border border-light2 border-opacity-70 pl-[38px] pr-[26px] py-[8px] rounded-3xl w-full form-field mt-3`}>
                    <BiSearch className={`absolute left-4 top-[50%] text-light2 -translate-y-[50%]`}/>
                    <input type="email" className="text-[13px] border-0 group focus:outline-0 w-full h-full"
                           name="email" id="email" placeholder="Email" autoComplete={false}/>
                </div>
                <button
                    className="py-[12px] mt-[15px] flex items-center justify-center gap-2 bg-primary capitalize font-medium text-xs w-full rounded-3xl text-white hover:bg-secondary transition-all">
                    <LuPlus/> Start New Chat
                </button>
            </div>
            <ul className="mt-[5px]">
                <li className="px-[16px] flex items-start gap-[10px] py-[14px] relative border-b border-light2 border-opacity-50 hover:bg-gray cursor-pointer">
                    <div className="w-[40px] h-[40px]">
                        <Image className="w-full h-full rounded-full" src={user} alt=""/>
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center justify-between ">
                            <h3 className="text-xs font-semibold">Cameron Williamson</h3>
                            <span className="text-xs text-lightDark font-medium text-ellipsis">1h</span>
                        </div>
                        <p className="leading-[16px] text-lightDark text-[10px] max-w-[80%]">
                            Not too bad, just trying to . How about you?
                        </p>
                    </div>
                    <div className="absolute bottom-2 right-4">
                        <div className="w-[16px] h-[16px] rounded-full text-[10px] text-white font-bold bg-red-500 flex justify-center items-center">
                            3
                        </div>
                        {/*<IoCheckmarkDone className="font-semibold text-lg text-blue-400" />*/}
                    </div>
                </li>
                <li className="px-[16px] flex items-start gap-[10px] py-[14px] relative border-b border-light2 border-opacity-50 hover:bg-gray cursor-pointer">
                    <div className="w-[40px] h-[40px]">
                        <Image className="w-full h-full rounded-full" src={user} alt=""/>
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center justify-between ">
                            <h3 className="text-xs font-semibold">Cameron Williamson</h3>
                            <span className="text-xs text-lightDark font-medium text-ellipsis">1h</span>
                        </div>
                        <p className="leading-[16px] text-lightDark text-[10px] max-w-[80%]">
                            Not too bad, just trying to . How about you?
                        </p>
                    </div>
                    <div className="absolute bottom-2 right-4">
                        {/*<div className="w-[16px] h-[16px] rounded-full text-[10px] text-white font-bold bg-red-500 flex justify-center items-center">*/}
                        {/*    3*/}
                        {/*</div>*/}
                        <IoCheckmarkDone className="font-semibold text-lg text-blue-400" />
                    </div>
                </li>
                <li className="px-[16px] flex items-start gap-[10px] py-[14px] relative border-b border-light2 border-opacity-50 hover:bg-gray cursor-pointer">
                    <div className="w-[40px] h-[40px]">
                        <Image className="w-full h-full rounded-full" src={user} alt=""/>
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center justify-between ">
                            <h3 className="text-xs font-semibold">Cameron Williamson</h3>
                            <span className="text-xs text-lightDark font-medium text-ellipsis">1h</span>
                        </div>
                        <p className="leading-[16px] text-lightDark text-[10px] max-w-[80%]">
                            Not too bad, just trying to . How about you?
                        </p>
                    </div>
                    <div className="absolute bottom-2 right-4">
                        {/*<div className="w-[16px] h-[16px] rounded-full text-[10px] text-white font-bold bg-red-500 flex justify-center items-center">*/}
                        {/*    3*/}
                        {/*</div>*/}
                        <IoCheckmarkDone className="font-semibold text-lg text-blue-400" />
                    </div>
                </li>
                <li className="px-[16px] flex items-start gap-[10px] py-[14px] relative border-b border-light2 border-opacity-50 hover:bg-gray cursor-pointer">
                    <div className="w-[40px] h-[40px]">
                        <Image className="w-full h-full rounded-full" src={user} alt=""/>
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center justify-between ">
                            <h3 className="text-xs font-semibold">Cameron Williamson</h3>
                            <span className="text-xs text-lightDark font-medium text-ellipsis">1h</span>
                        </div>
                        <p className="leading-[16px] text-lightDark text-[10px] max-w-[80%]">
                            Not too bad, just trying to . How about you?
                        </p>
                    </div>
                    <div className="absolute bottom-2 right-4">
                        {/*<div className="w-[16px] h-[16px] rounded-full text-[10px] text-white font-bold bg-red-500 flex justify-center items-center">*/}
                        {/*    3*/}
                        {/*</div>*/}
                        <IoCheckmarkDone className="font-semibold text-lg text-blue-400" />
                    </div>
                </li>
                <li className="px-[16px] flex items-start gap-[10px] py-[14px] relative border-b border-light2 border-opacity-50 hover:bg-gray cursor-pointer">
                    <div className="w-[40px] h-[40px]">
                        <Image className="w-full h-full rounded-full" src={user} alt=""/>
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center justify-between ">
                            <h3 className="text-xs font-semibold">Cameron Williamson</h3>
                            <span className="text-xs text-lightDark font-medium text-ellipsis">1h</span>
                        </div>
                        <p className="leading-[16px] text-lightDark text-[10px] max-w-[80%]">
                            Not too bad, just trying to . How about you?
                        </p>
                    </div>
                    <div className="absolute bottom-2 right-4">
                        {/*<div className="w-[16px] h-[16px] rounded-full text-[10px] text-white font-bold bg-red-500 flex justify-center items-center">*/}
                        {/*    3*/}
                        {/*</div>*/}
                        <IoCheckmarkDone className="font-semibold text-lg text-blue-400" />
                    </div>
                </li>
                <li className="px-[16px] flex items-start gap-[10px] py-[14px] relative border-b border-light2 border-opacity-50 hover:bg-gray cursor-pointer">
                    <div className="w-[40px] h-[40px]">
                        <Image className="w-full h-full rounded-full" src={user} alt=""/>
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center justify-between ">
                            <h3 className="text-xs font-semibold">Cameron Williamson</h3>
                            <span className="text-xs text-lightDark font-medium text-ellipsis">1h</span>
                        </div>
                        <p className="leading-[16px] text-lightDark text-[10px] max-w-[80%]">
                            Not too bad, just trying to . How about you?
                        </p>
                    </div>
                    <div className="absolute bottom-2 right-4">
                        {/*<div className="w-[16px] h-[16px] rounded-full text-[10px] text-white font-bold bg-red-500 flex justify-center items-center">*/}
                        {/*    3*/}
                        {/*</div>*/}
                        <IoCheckmarkDone className="font-semibold text-lg text-blue-400" />
                    </div>
                </li>
                <li className="px-[16px] flex items-start gap-[10px] py-[14px] relative border-b border-light2 border-opacity-50 hover:bg-gray cursor-pointer">
                    <div className="w-[40px] h-[40px]">
                        <Image className="w-full h-full rounded-full" src={user} alt=""/>
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center justify-between ">
                            <h3 className="text-xs font-semibold">Cameron Williamson</h3>
                            <span className="text-xs text-lightDark font-medium text-ellipsis">1h</span>
                        </div>
                        <p className="leading-[16px] text-lightDark text-[10px] max-w-[80%]">
                            Not too bad, just trying to . How about you?
                        </p>
                    </div>
                    <div className="absolute bottom-2 right-4">
                        <div className="w-[16px] h-[16px] rounded-full text-[10px] text-white font-bold bg-red-500 flex justify-center items-center">
                            3
                        </div>
                        {/*<IoCheckmarkDone className="font-semibold text-lg text-blue-400" />*/}
                    </div>
                </li>
                <li className="px-[16px] flex items-start gap-[10px] py-[14px] relative border-b border-light2 border-opacity-50 hover:bg-gray cursor-pointer">
                    <div className="w-[40px] h-[40px]">
                        <Image className="w-full h-full rounded-full" src={user} alt=""/>
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center justify-between ">
                            <h3 className="text-xs font-semibold">Cameron Williamson</h3>
                            <span className="text-xs text-lightDark font-medium text-ellipsis">1h</span>
                        </div>
                        <p className="leading-[16px] text-lightDark text-[10px] max-w-[80%]">
                            Not too bad, just trying to . How about you?
                        </p>
                    </div>
                    <div className="absolute bottom-2 right-4">
                        <div className="w-[16px] h-[16px] rounded-full text-[10px] text-white font-bold bg-red-500 flex justify-center items-center">
                            3
                        </div>
                        {/*<IoCheckmarkDone className="font-semibold text-lg text-blue-400" />*/}
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Conversation;