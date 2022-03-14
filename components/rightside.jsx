import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
function rightside() {
  return (
    <div className=" max-h-screen overflow-y-scroll scrollbar-hide scroll-smooth border-l-2 cursor-pointer">
      <div className="container flex  bg-slate-50  px-4 sm:px-6 lg:px-8 mt-1 sticky top-0 opacity-75 ">
        <div className="relative">
          {" "}
          <input
            type="text"
            className="h-11 w-96 pl-20 mb-1 rounded-full bg-slate-200 z-0 focus:shadow focus:outline-none"
            placeholder="Search Twitter..."
          />
          <div className="absolute top-3 left-3">
            {" "}
            <AiOutlineSearch
              size={25}
              className=" text-gray-600 z-20 hover:text-gray-500"
            />{" "}
          </div>
        </div>
      </div>

      <div className="bg-slate-100 w-65 m-10  rounded-xl ">
        <h2 className="ml-2 font-semibold text-lg">Whats happening</h2>
        <br />
        <div className=" flex flex-row hover:bg-slate-200">
          <div>
            <h5>Ukraine conflict .LIVE</h5>
            <p className="font-semibold">
              Ukrainian troops fight Russioan advance on country second-largest
              city Kharkiv
            </p>
            <h6 className="flex flex-row">
              Trending with{" "}
              <p className="text-sky-600 hover:underline">#UkraianRussiaWar</p>{" "}
            </h6>
          </div>
          <img
            src="./download.jpg"
            className="w-16 h-16 rounded-lg mr-2 mt-3 "
            alt=""
          />
        </div>

        <div className="mt-4">
          <div className=" flex flex-row hover:bg-slate-200">
            <div>
              <h5>Ukraine conflict .LIVE</h5>
              <p className="font-semibold">
                US ramps up financial support for Ukraine as Russia continues
                attacks on key cities
              </p>
            </div>
            <img
              src="./new1.jfif"
              className="w-16 h-16 rounded-lg mr-2 mt-3 "
              alt=""
            />
          </div>

          <div className="mt-4">
            <div className=" flex flex-row hover:bg-slate-200">
              <div>
                <h5>War in Ukraine·LIVE</h5>
                <p className="font-semibold">
                  How to verify information involving the war in Ukraine,
                  according to fact-checkers and experts
                </p>
              </div>
              <img
                src="/new2.png"
                className="w-16 h-16 rounded-lg mr-2 mt-3 "
                alt=""
              />
            </div>
          </div>

          <div className="mt-4">
            <div className=" flex flex-row hover:bg-slate-200">
              <div>
                <h5>Ukraine conflict .LIVE</h5>
                <p className="font-semibold">
                  MEA advises Indian nationals in Ukraine to make use of the
                  humanitarian corridor for evacuation
                </p>
              </div>
              <img
                src="/news.jfif"
                className="w-16 h-16 rounded-lg mr-2 mt-3 "
                alt=""
              />
            </div>
          </div>

          <div className="mt-4">
            <div className=" flex flex-row hover:bg-slate-200">
              <div>
                <h5>#MaaranonHotstar</h5>
                <p className="font-semibold">
                  Dhanush`s latest action thriller premieres today!
                </p>
                <h6 className="flex flex-row">
                  Promoted by Disney+ Hotstar Tamil
                </h6>
              </div>
            </div>
          </div>
        </div>

        <p className="text-sky-600 p-4 hover:bg-slate-200 mt-4 rounded-b-xl cursor-pointer">
          Show More
        </p>
      </div>

      <div className="bg-slate-100 w-65 m-10  rounded-xl ">
        <h2 className="ml-3 font-semibold text-lg">Who to follow</h2>
        <br />
        <div className="flex flex-row items-center justify-around hover:bg-slate-200">
          <img src="./tesla.jpg" className="w-10 h-10 rounded-full" />
          <div className="flex flex-col">
            {" "}
            <p className="font-bold flex flex-row ">
              Tesla{" "}
              <img
                src="./tick.png"
                className="w-4 h-4 rounded-full mt-1"
                alt=""
              />{" "}
            </p>{" "}
            <p>@Tesla</p>{" "}
          </div>
          <button className="bg-black rounded-xl px-3 py-1 text-white">
            Follow
          </button>
        </div>

        <div className=" mt-3 flex flex-row items-center justify-around hover:bg-slate-200">
          <img src="./google.jpg" className="w-10 h-10 rounded-full" />
          <div className="flex flex-col">
            {" "}
            <p className="font-bold flex flex-row">
              Google{" "}
              <img
                src="./tick.png"
                className="w-4 h-4 rounded-full mt-1"
                alt=""
              />
            </p>{" "}
            <p>@Google</p>{" "}
          </div>
          <button className="bg-black rounded-xl px-3 py-1 text-white">
            Follow
          </button>
        </div>

        <div className="mt-3 flex flex-row items-center justify-around hover:bg-slate-200">
          <img src="./Apple.jpg" className="w-11 h-11 rounded-full" />
          <div className="flex flex-col">
            {" "}
            <p className="font-bold flex flex-row">
              Apple{" "}
              <img
                src="./tick.png"
                className="w-4 h-4 rounded-full mt-1"
                alt=""
              />
            </p>{" "}
            <p>@Apple</p>{" "}
          </div>
          <button className="bg-black rounded-xl px-3 py-1 text-white">
            Follow
          </button>
        </div>
        <p className="text-sky-600 p-4 hover:bg-slate-200 mt-4 rounded-b-xl cursor-pointer">
          Show More
        </p>
      </div>

      <div className="m-11 text-sm text-zinc-400">
        <div className="flex flex-row ">
          <p className="ml-3 hover:underline">Terms of Service</p>
          <p className="ml-3 hover:underline"> Privacy Policy</p>
          <p className="ml-3 hover:underline"> Cookie Policy</p>
        </div>
        <div className="flex flex-row ">
          <p className="ml-3 hover:underline"> Accessibility</p>
          <p className="ml-3 hover:underline">Ads info</p>
          <p className="ml-3 hover:underline"> More</p>
        </div>
      </div>
    </div>
  );
}

export default rightside;
