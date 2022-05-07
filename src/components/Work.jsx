import React from "react";
import jobify from "../assets/jobify.png";
import map from "../assets/map.png";
import memories from "../assets/memories.png";
import videochat from "../assets/videochat.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6"> Check out some of my recent work</p>
        </div>

        {/* Container */}
        {/* Grid Item */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${jobify})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
           >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <div className="pt-8 text-center">
                <a
                  href="https://jobifyprojectmanagement.herokuapp.com/welcome"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-zinc-50 bg-amber-600 font-bold text-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/cibimanoj/capstonetask.git"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-zinc-50 bg-amber-600 font-bold text-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
                    Code
                  </button>
                  <p className="text-center text-black	color: rgb(0 0 0)">
                    This is a MERN project management tool app ,In which we can
                    add the task,delete the task and update the task.
                  </p>
                </a>
                <h6 className="font-medium text-xl text-black">STACK</h6>
                <div>
                  <div class="flex gap-4 p-4 items-center text-lg text-zinc-50 ">
                    <div className="flex-1 bg-amber-600 rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                      MongoDB{" "}
                    </div>
                    <div className="contents">
                      <div className="flex-1 bg-amber-600 rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        Express
                      </div>
                      <div className="flex-1 bg-amber-600 rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        React
                      </div>
                    </div>
                    <div className="flex-1 bg-amber-600 rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                      Node
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${map})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="pt-9 text-center">
                <a href="https://mappin.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-zinc-50  bg-amber-600  font-bold text-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/cibimanoj/mappin_frontend.git"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-zinc-50 bg-amber-600 font-bold text-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
                    Code
                  </button>
                </a>
                <p className="text-center text-black	color: rgb(0 0 0)">
                  This is a MERN web application.In this app where we can pin
                  our locations of our house,office and favourite places.
                </p>
                <h6 className="font-medium text-xl text-black  ">STACK</h6>
                <div>
                  <div class="flex gap-4 p-4 items-center text-lg text-zinc-50 ">
                    <div className="flex-1 bg-amber-600 rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                      MongoDB{" "}
                    </div>
                    <div className="contents">
                      <div className="flex-1 bg-amber-600 rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        Express
                      </div>
                      <div className="flex-1 bg-amber-600 rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        React
                      </div>
                    </div>
                    <div className="flex-1 bg-amber-600 rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                      Node
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${memories})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="pt-8 text-center">
                <a
                  href="https://cibimanojmemories.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-zinc-50 bg-amber-600 font-bold text-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/cibimanoj/memoryfe.git"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-zinc-50 bg-amber-600 font-bold text-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
                    Code
                  </button>
                  <p className="text-center text-black	color: rgb(0 0 0)">
                    This is a MERN web application.In this applicaton we can
                    save our beautiful memories of life and the data will be
                    save in the database.
                  </p>
                </a>
                <h6 className="font-medium text-xl text-black">STACK</h6>
                <div>
                  <div class="flex gap-4 p-4 items-center text-lg text-zinc-50 ">
                    <div className="flex-1 bg-amber-600 rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                      MongoDB{" "}
                    </div>
                    <div className="contents">
                      <div className="flex-1 bg-amber-600 rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        Express
                      </div>
                      <div className="flex-1 bg-amber-600 rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        React
                      </div>
                    </div>
                    <div className="flex-1 bg-amber-600 rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                      Node
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${videochat})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="pt-8 text-center">
                <a
                  href="https://socketiovideochat.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-zinc-50 bg-amber-600 font-bold text-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/cibimanoj/videochat_frontend.git"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-zinc-50 bg-amber-600 font-bold text-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    Code
                  </button>
                  <p className="text-center text-black	color: rgb(0 0 0)">
                    This is a Videochat web application.In this app we can chat
                    with our friends through video, And i have used socket.IO
                    for generating the key.
                  </p>
                </a>
                <h6 className="font-medium text-xl text-black">STACK</h6>
                <div>
                  <div class="flex gap-4 p-4 items-center text-lg text-zinc-50 ">
                    <div className="flex-1 bg-amber-600 rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                      MongoDB{" "}
                    </div>
                    <div className="contents">
                      <div className="flex-1 bg-amber-600 rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        Express
                      </div>
                      <div className="flex-1 bg-amber-600 rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        React
                      </div>
                    </div>
                    <div className="flex-1 bg-amber-600 rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                      Node
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
