import React from "react";
import { RiHome7Fill } from "react-icons/ri";
import { RiHashtag } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { FiBookmark } from "react-icons/fi";
import { RiFileList2Line } from "react-icons/ri";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { CgMoreO } from "react-icons/cg";
import { BsThreeDots } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";
import { TiTick } from "react-icons/ti";

function Leftside() {
  const { data: session } = useSession();
  return (
    <>
      <div className="flex max-h-screen ">
        <div className="text-lg ">
          <div className=" flex  m-1 ml-48 ">
            <FaTwitter size={30} className="text-sky-400" />
          </div>

          <div className=" flex  m-3  ml-48 hover:bg-slate-200 px-2 py-1 rounded-full  ">
            <RiHome7Fill size={27} />
            <h3 className="ml-3 "> Home</h3>
          </div>

          <div className=" flex  m-4 ml-48 hover:bg-slate-200  px-2 py-1 rounded-full  ">
            <RiHashtag size={27} />
            <h3 className=" ml-3">Explore</h3>
          </div>

          <div className=" flex   m-6 ml-48 hover:bg-slate-200  px-2 py-1 rounded-full ">
            <IoNotificationsOutline size={27} />
            <h3 className="ml-3"> Notifications</h3>
          </div>

          <div className=" flex   m-6 ml-48 hover:bg-slate-200  px-2 py-1 rounded-full ">
            <AiOutlineMail size={27} />
            <h3 className="ml-3">Messages</h3>
          </div>

          <div className=" flex   m-6 ml-48 hover:bg-slate-200  px-2 py-1 rounded-full ">
            <FiBookmark size={27} />
            <h3 className="ml-3">Bookmarks</h3>
          </div>

          <div className=" flex  m-6 ml-48 hover:bg-slate-200  px-2 py-1 rounded-full ">
            <RiFileList2Line size={27} />
            <h3 className="ml-3">List</h3>
          </div>

          <div className=" flex  m-6 ml-48 hover:bg-slate-200  px-2 py-1 rounded-full ">
            <MdOutlinePeopleAlt size={27} />
            <h3 className="ml-3">Profile</h3>
          </div>

          <div className=" flex  m-6 ml-48 hover:bg-slate-200  px-2 py-1 rounded-full ">
            <CgMoreO size={27} />
            <h3 className="ml-3">More</h3>
          </div>

          <div className=" m-1 ml-48  p-1">
            <button className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-20 rounded-full">
              Tweet
            </button>
          </div>

          <div className="   ml-48   rounded-full px-2 py-1 dropdown inline-block relative ">
            <div className=" flex flex-row ">
              <img
                src={session?.user?.image}
                className="rounded-full w-10 h-10"
                alt=""
              />

              <h1 className="ml-3 mt-1">{session?.user?.name}</h1>

              <div className="ml-5 mt-2 ">
                <BsThreeDots size={22} />
              </div>
            </div>

            <div className=" border-2 border-slate-100 shadow-gray-400 absolute hidden dropdown-menu bg-white rounded-2xl ">
              <div className=" flex flex-row border-b-2 ">
                <img
                  src={session?.user?.image}
                  className="rounded-full w-10 h-10"
                  alt=""
                />
                <h1 className="ml-3 mt-1">{session?.user?.name}</h1>
                <div className="ml-5 mt-2">
                  <TiTick size={22} className="text-sky-400" />
                </div>
              </div>
              <div className="hover:bg-slate-200 rounded-br-2xl rounded-bl-2xl mt-1 cursor-pointer">
                <button onClick={signOut}>Log Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Leftside;
