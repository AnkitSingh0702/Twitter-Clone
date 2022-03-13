import React from "react";

import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { FcLikePlaceholder } from "react-icons/fc";
import { FiShare } from "react-icons/fi";

function Post({ displayName, username, text }) {
  return (
    <>
  
      <div className="hover:bg-slate-100 border-b-2 cursor-pointer">
        <div className="flex flex-row px-5 mt-1 ">
          <img src={username} className="w-12 h-12 rounded-full" alt="" />

          <div>
            <p className="font-semibold ml-3 flex flex-row">{displayName} </p>
            <div className="ml-3 flex flex-col"> {text}</div>
          </div>
        </div>

        <div className="flex flex-row justify-around ml-4  mt-8 m-2">
          <FaRegComment size={20} />
          <FaRetweet size={20} />
          <FcLikePlaceholder size={20} />
          <FiShare size={20} />
        </div>
      </div>
    </>
  );
}
export default Post;
