import React from "react";

function Hero() {
  return (
    <section className="absolute w-full h-[46rem] left-0 top-0 bg-[#F4F4F4] flex items-center justify-center">
      <div className="flex flex-col w-[69rem] h-[31rem]">
        <div className="p1 border-2 border-black basis-1/6 flex flex-row flex-wrap-reverse justify-end items-stretch content-end gap-x-4">
          <div className="p1-b1 w-[11rem] flex flex-row">
            <div className="w-14 h-6 bg-pink-500 rounded-full flex items-center p-1">
              <div className="w-4 h-4 bg-yellow-300 rounded-full ml-auto"></div>
            </div>
            <div>
              <p className="pl-3">DARK MODE</p>
            </div>
          </div>
          <div className="p1-b2 pr-4">|</div>
          <div className="p1-b3">TÜRKÇE'YE GEÇ</div>
        </div>

        <div className="p2 border-2 border-black basis-5/6 flex flex-row flex-nowrap justify-start items-stretch content-between">
          <div className="p2-b1 border-2 border-black flex flex-col flex-nowrap justify-between items-stretch content-stretch basis-3/5 ">
            <div className="p2-b1-o1 border-2 border-black">
              <p className="font-[Inter] font-normal text-[1.875rem] leading-[2.25rem]">
                Hi! 👋
              </p>
              <p className="font-[Inter] font-medium text-[42px] leading-[64px]">
                I’m Almila. I’m a full-stack developer. I can craft solid and
                scalable frontend products. Let’s meet!
              </p>
            </div>
            <div className="p2-b1-o2 border-2 border-black">
              <div className="p2-b1-o2-pu1 border-2 border-black">
                <img src="" alt="linkedin" />
                <img src="" alt="github" />
              </div>
              <div className="p2-b1-o2-pu2 border-2 border-black">
                <p className="font-[Inter] font-normal text-[1rem] leading-[2rem]">
                  Currently <span className="text-[#AF0C48]">Freelancing</span>{" "}
                  for{" "}
                  <span className="text-[#AF0C48]">UX, UI, & Web Design</span>{" "}
                  Project. <br />
                  Invite me to join your team -{" "}
                  <span className="text-[#AF0C48]">pratamaiosi@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
          <div className="p2-b2 border-2 border-black basis-2/5">
            <img src="" alt="hero-right" />
          </div>
        </div>
      </div>
    </section>
  );
}
/* BG Hero 

position: absolute;
width: 1440px;
height: 738px;
left: 0px;
top: 0px;

background: #F4F4F4;
*/

export default Hero;
