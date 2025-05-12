import React from "react";
import linkedinIcon from "../assets/LinkedIn.png";
import githubIcon from "../assets/github.png";
import heroImg from "../assets/foto.png";

function Hero() {
  return (
    <section className="left-0 top-0 bg-[#F4F4F4] flex items-center justify-center py-16">
      <div className="flex flex-col w-[69rem] h-[35rem] ">
        <div className="p1 flex flex-row flex-wrap-reverse justify-end items-stretch content-end gap-x-4 mb-10 basis-1/6">
          <div className="p1-b1 w-[11rem] flex flex-row">
            <div className="w-14 h-6 bg-pink-500 rounded-full flex items-center p-1">
              <div className="w-4 h-4 bg-yellow-300 rounded-full ml-auto"></div>
            </div>
            <div>
              <p className="pl-3 text-[#777777] font-[Inter] font-bold text-base">
                DARK MODE
              </p>
            </div>
          </div>
          <div className="p1-b2 pr-2 text-[#777777] font-[Inter] font-bold text-base">
            |
          </div>
          <div className="p1-b3">
            <span className="text-[#E92577] font-[Inter] font-bold text-base">
              TÜRKÇE
            </span>
            <span className="text-[#777777] font-[Inter] font-bold text-base">
              'YE GEÇ
            </span>
          </div>
        </div>

        <div className="p2 flex flex-row flex-nowrap justify-start items-stretch content-between basis-5/6">
          <div className="p2-b1 flex flex-col flex-nowrap justify-between items-stretch content-stretch gap-4 basis-3/5 ">
            <div className="p2-b1-o1">
              <p className="font-[Inter] font-normal text-[1.875rem] leading-[2.25rem] m-[-0.25rem]">
                Hi! 👋
              </p>
              <p className="font-[Inter] font-medium text-[42px] leading-[64px] m-[-0.25rem]">
                I'm Almila. I'm a full-stack developer. I can craft solid and
                scalable frontend products. Let's meet!
              </p>
            </div>
            <div className="p2-b1-o2">
              <div className="p2-b1-o2-pu1 flex gap-4 pl-0 py-4 pr-4">
                <a href="#" className="block ml-0">
                  <img src={linkedinIcon} alt="linkedin" className="w-8 h-8" />
                </a>
                <a href="#" className="block">
                  <img src={githubIcon} alt="github" className="w-8 h-8" />
                </a>
              </div>
              <div className="p2-b1-o2-pu2">
                <p className="font-[Inter] font-normal text-[1rem] leading-[2rem] m-[-0.15rem]">
                  Currently <span className="text-[#AF0C48]">Freelancing</span>{" "}
                  for{" "}
                  <span className="text-[#AF0C48]">UX, UI, & Web Design</span>{" "}
                  Project. <br />
                  Invite me to join your team -{" "}
                  <span className="text-[#AF0C48] underline underline-offset-4">
                    pratamaiosi@gmail.com
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="p2-b2 flex flex-row-reverse items-center basis-2/5 ">
            <img src={heroImg} alt="hero-right" className="mb-8" />
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
