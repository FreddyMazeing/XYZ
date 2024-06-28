import React from "react";
import blm from "../assets/blm.jpg";
import p from "../assets/p.png";
import LOVE from "../assets/LOVE.png";
import D1 from "../assets/D1.jpg";
import D2 from "../assets/D2.jpg";
import D3 from "../assets/D3.jpg";
import D4 from "../assets/D4.jpg";
import BLM from "../assets/BLM.png";
import CBLH from "../assets/CBLH.png";

const Buy = () => {
  return (
    <>
      <div className="hidden text-white max-w-full min-h-screen">
        {/* Black Lives Matter */}
        <div className="mt-1 grid md:grid-cols-2 gap-4 max-w-7xl mx-auto">
          <div className=" mt-10 md:hidden">
            <img src={p} alt="" className=" w-64" />
          </div>
          <div className=" flex mt-10 flex-col   text-start sm:items-start  justify-center">
            <h1
              className="sm:text-7xl bg-gradient-to-t from-black from-5% to-slate-600
          bg-clip-text text-transparent text-4xl pt-5 mx-6 font-black"
            >
              Black
            </h1>
            <p
              className="pb-5 mx-6 text-2xl   hover:text-xl hover:font-bold hover:text-slate-300 
          duration-1000 ease-in-out  tracking-widest text-slate-400"
            >
              Black is more than just a color, it signifies a specific racial
              identity, a heritage, and a community. Black people have a rich
              history and culture that deserves respect and celebration.
            </p>
            <h1
              className="sm:text-5xl pt-5 text-2xl font-bold
           mx-6 bg-gradient-to-t from-black bg-clip-text from-5% to-slate-600 text-transparent"
            >
              Lives
            </h1>
            <p
              className="pb-5  mx-6 text-2xl hover:text-xl hover:font-bold hover:text-slate-300 
          duration-1000 ease-in-out  tracking-widest text-slate-400"
            >
              Humanity and inherent value of Black people. Every Black person
              deserves the right to live a life free from violence, fear, and
              discrimination.A world where black lives are valued equally and
              protected.
            </p>

            <h1 className="sm:text-5xl pt-5 text-2xl  mx-6 font-bold  bg-gradient-to-t from-black bg-clip-text from-5% to-slate-600 text-transparent">
              Matters
            </h1>
            <p
              className="pb-5  mx-6 text-2xl hover:text-xl hover:font-bold hover:text-slate-300 
          duration-1000 ease-in-out  tracking-widest text-slate-400"
            >
              Black people deserve dignity, justice, and equal opportunities.
              Together, let's dismantle systemic racism and create a world where
              Black lives truly matter and can thrive.
            </p>
          </div>
          <div className="mt-10 hidden md:block">
            <img src={p} alt="" className="" />
            <div className="mx-6 mt-24 bg-gradient-to-r from-black via-white to-black h-[2px]"></div>
          </div>
          <div className="mx-6 mt-24 bg-gradient-to-r from-black via-slate-400 to-black h-[2px]"></div>
        </div>

        {/* Love Africa */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-start sm:mt-36 mt-24 mb-40">
          <div className=" mx-6">
            <img
              src={LOVE}
              alt="love"
              className="hover:scale-110 duration-300 ease-in-out"
            />
            <p
              className="text-sm  text-slate-400 py-2 md:text-xl lg:text-sm
          hover:bg-gradient-to-tr hover:from-slate-400 duration-300 ease-in-out
           
           hover:to-white font-bold hover:bg-clip-text hover:text-transparent "
            >
              Africa's vast, a sun-kissed land, From deserts old to jungles
              grand. Rich with stories, hope, and might, A vibrant soul bathed
              in sunlight.
            </p>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2">
            <img
              src={D1}
              alt=""
              className="hover:scale-110 duration-200 ease-in-out"
            />
            <img
              src={D2}
              alt=""
              className="hover:scale-110 duration-200 ease-in-out"
            />
            <img
              src={D3}
              alt=""
              className="hover:scale-110 duration-200 ease-in-out"
            />
            <img
              src={D4}
              alt=""
              className="hover:scale-110 duration-200 ease-in-out"
            />
          </div>
        </div>

        {/* History */}
        <div className="max-w-7xl sm:mx-auto mx-6 my-24">
          <h1 className="text-4xl text-center">
            Black Lives Matter: A Historical Spark
          </h1>
          <p className="text-2xl text-center text-slate-400 tracking-widest mt-2 mb-4">
            The Black Lives Matter movement, though propelled into the global
            spotlight in recent years, has roots that go deeper. Here's a look
            at its key moments:
          </p>

          <div className="grid md:grid-cols-2 max-w-7xl sm:mx-auto text-xl  md:text-2xl   duration-1000 ease-in-out bg-gradient-to-t  from-black  via-gray-950 from-1% to-black md:p-10 p-2  rounded-lg">
            {/* Birth of The Hashtag */}
            <ul className="my-6">
              <li className="flex ite items-center text-start mx-4 md:mx-0 ">
                <div className="h-2 w-2 pt-44 bg-slate-500 rounded-full"></div>
                <p className="text-slate-500 max-w-96  translate-x-4">
                  <span className="font-bold">
                    2013: The Birth of a Hashtag:
                  </span>
                  Following the acquittal of George Zimmerman in the shooting of
                  Trayvon Martin, Alicia Garza, Patrisse Cullors, and Opal
                  Tometi create the #BlackLivesMatter hashtag on social media.
                  This ignites a space for Black voices to be heard.
                </p>
              </li>
            </ul>
            <div></div>
            <div></div>
            {/* A Global Phenomenon */}
            <ul className="my-6">
              <li className="flex items-center text-start justify-center mx-4 md:mx-0 ">
                <p className="text-slate-500 max-w-96  ">
                  <span className="font-bold">
                    {" "}
                    2014: Nationwide Protests Erupt:
                  </span>
                  The deaths of Michael Brown and Eric Garner at the hands of
                  police spark national outrage. Protests erupt in Ferguson,
                  Missouri, and New York City, bringing the Black Lives Matter
                  movement to the forefront of American consciousness.
                </p>
                <div className="h-2 w-2 pt-44 translate-x-4 bg-slate-500 rounded-full"></div>
              </li>
            </ul>
            {/* Birth of The Hashtag */}
            <ul className="my-6">
              <li className="flex items-center text-start mx-4 md:mx-0 ">
                <div className=" w-2 pt-44 bg-slate-500 rounded-full"></div>
                <p className="text-slate-500 max-w-96   translate-x-4">
                  <span className="font-bold">
                    {" "}
                    2020: A Global Phenomenon:{" "}
                  </span>
                  The brutal killing of George Floyd by police in Minneapolis
                  ignites a firestorm. Millions around the world participate in
                  Black Lives Matter protests, demanding racial justice and
                  police reform.
                </p>
              </li>
            </ul>
          </div>
          <div className="max-w-7xl sm:mx-auto"></div>
        </div>
        <div className="hidden max-w-7xl mt-6  mx-auto flex items-center justify-center bg-gradient-to-t pt-10 pb-36 sm:py-20  from-gray-950 to-black  rounded-r-3xl  ">
          {/* <img src={CBLH} alt="" className=" w-96 h-1/2" /> */}
        </div>
      </div>

      {/* Rounded-Test */}
      <div className="hidden max-w-full min-h-screen ">
        <div className="flex flex-col md:flex-row min-h-screen max-w-7x my-2 items-center md:items-start justify-center">
          <div className="flex text-end md:py-20 bg-gradient-to-l  from-slate-950 to-black  ">
            <h1 className="text-slate-950 text-9xl tracking-widest  "> A</h1>
            <h1 className="text-slate-800 text-9xl tracking-widest  "> F</h1>
            <h1 className="text-slate-200 text-9xl tracking-widest  "> R</h1>
          </div>
          <div className="flex md:py-20   bg-gradient-to-r from-slate-950  to-black bg-transparent">
            <h1 className="text-slate-200 text-9xl  tracking-widest "> I</h1>
            <h1 className="text-slate-800 text-9xl  tracking-widest "> C</h1>
            <h1 className="text-slate-950 text-9xl  tracking-widest "> A</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buy;
