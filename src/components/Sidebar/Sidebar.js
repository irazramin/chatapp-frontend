import React, {useState} from 'react';
import {LiaTimesSolid} from "react-icons/lia";
import {MdBlock} from "react-icons/md";
import {PiCameraDuotone} from "react-icons/pi";
import Image from "next/image";
import user from "../../../public/user.jpg"
const Sidebar = ({showSidebar}) => {
    const [image, setImage] = useState(null);

    const handleChangeImage = (e) => {
        if (e.target.files && e.target.files[0]) {
            console.log(URL.createObjectURL(e.target.files[0]))
            setImage(URL.createObjectURL(e.target.files[0]))
        }

    }
    return (
        <div
            className={`${showSidebar ? 'mr-0' : '-mr-[320px]'} bg-white w-[320px] h-full transition-all duration-300 ease-in-out p-6 relative`}>

            <div
                className="w-[38px] h-[38px] flex justify-center items-center border border-light2 ml-auto rounded-full">
                <LiaTimesSolid/>
            </div>

            <div className="mt-6 relative flex items-center justify-center flex-col">
                <div
                    className="w-[136px] h-[136px] rounded-full border-4 border-primary mx-auto flex justify-center items-center relative overflow-hidden">
                    <Image width={100} height={100} className="w-full h-full object-cover" src={image ? image : user} alt="user"/>

                </div>
                <div>
                    <input onChange={(e) => handleChangeImage(e)} className="w-[0.1px] h-[0.1px] opacity-0" type="file" name="userImage" id="userImage"/>
                    <label htmlFor="userImage"
                           className="flex items-center justify-center bg-white shadow absolute w-[40px] h-[40px] right-[70px] top-[100px] rounded-full !z-50">
                        <PiCameraDuotone className="text-lg"/>
                    </label>
                </div>

                <div className="text-center ">
                    <h4 className="font-semibold text-2xl ">Robert Fox</h4>
                    <span className="text-lightDark text-sm inline-block">robert.fox23</span>
                </div>
            </div>

            <div className=" absolute left-0 bottom-0 w-full p-6">
                <button
                    className="w-full border border-red-500 text-red-500 rounded-[56px] p-3 font-medium hover:bg-gray transition-all text-xs  flex items-center justify-center gap-2 active:scale-[.98]">
                    <MdBlock/> Block name
                </button>
            </div>
        </div>
    );
};

export default Sidebar;