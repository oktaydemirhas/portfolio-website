import React from "react";

const projects = [
  {
    title: "Random Jokes",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
    techs: ["react", "vercel", "axios", "router"],
    bgColor: "bg-[DDEEFE]",
  },
  {
    title: "Are you bored?",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
    techs: ["react", "redux", "axios", "router", "vercel"],
    bgColor: "bg-[D9F6F1]",
  },
];

function Projects() {
  return (
    <section className="left-0 top-0 flex flex-col justify-center items-center py-16">
      <div className="p1 w-[69rem]">
        <p className="font-[Inter] font-medium text-4xl leading-[3.625rem] tracking-[0.01em] text-[#0A0A14] flex justify-center pb-5">
          Projects
        </p>
      </div>
      {/*taşıyıcı*/}
      <div className="p2 w-[69rem] flex mt-5 flex flex-wrap items-start border-2 border-black">
        <div className="b1 border-2 border-black basis-1/2">
          <div className="border-2 border-black">{projects[0].title}</div>
          <p>{projects[0].info}</p>
        </div>
        <div className="b2 border-2 border-black basis-1/2">b2</div>
      </div>
      {/*taşıyıcı*/}
    </section>
  );
}

export default Projects;
