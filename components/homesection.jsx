/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { BiImage } from "react-icons/bi";
import { AiOutlineGif } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsStars } from "react-icons/bs";
import { DataBase } from "../Firebase";
import { addDoc, collection, onSnapshot } from "@firebase/firestore";
import Post from "./Post";
import { useSession } from "next-auth/react";

function homesection() {
  const { data: session } = useSession();

  console.log(session);
  const [post, setPost] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(DataBase, "post"), (snapshot) => {
        setPost(snapshot.docs.map((doc) => doc.data()));
      }),
    []
  );

  const [tweetmessage, setTweetmessage] = useState("");
  const handleNew = async (e) => {
    e.preventDefault();
    await addDoc(collection(DataBase, "post"), {
      displayName: session.user.name,
      text: tweetmessage,
      username: session.user.image,
    });
    setTweetmessage("");
  };
  return (
    <>
      <div className=" ml-23   border-l-2  overflow-y-scroll scrollbar-hide scroll-smooth max-h-screen">
        <div className="flex  flex-row  sticky top-0 bg-slate-50 opacity-75">
          <h2 className="flex mt-3 px-8 text-xl font-semibold">Home</h2>
          <BsStars size={27} className="icon " />
        </div>
        <div className=" flex ">
          <img
            src={session.user.image}
            className="rounded-full w-12 h-12  mt-5 ml-7"
            alt=""
          />

          <input
            type="text"
            onChange={(e) => setTweetmessage(e.target.value)}
            value={tweetmessage}
            placeholder="What`s happening?"
            autoComplete="name"
            required
            className="mt-6 ml-3 outline-0 text-zinc-500 text-xl font-semibold"
          />
        </div>
        <div className="border-b-2">
          <div className="flex flex-row ml-11 mt-9 justify-around  ">
            <BiImage size={25} className="text-sky-600 " />

            <AiOutlineGif
              size={25}
              className="text-sky-600 border-2 border-sky-600 "
            />

            <BiPoll size={25} className="text-sky-600  " />
            <BsEmojiSmile size={25} className="text-sky-600" />
            <MdDateRange size={25} className="text-sky-600" />
            <HiOutlineLocationMarker size={25} className="text-sky-600" />
            <button
              className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-10 rounded-full  mb-3"
              onClick={handleNew}
              type="submit"
            >
              Tweet
            </button>
          </div>
        </div>
        {post.map((post) => (
          <Post
            key={post.id}
            displayName={post.displayName}
            username={post.username}
            text={post.text}
          />
        ))}
      </div>
    </>
  );
}
export default homesection;
