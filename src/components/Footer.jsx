import React from "react";

function Footer() {
  return (
    <footer className="bg-white py-14">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-5 py-14">
        <div className="mb-8 mb-0 text-center md:text-left">
          <h2 className="text-4xl font-medium text-[#0A0A14] leading-tight text-right pr-10">
            Let&apos;s work together on
            <br />
            your next product.
          </h2>
        </div>
        <div className="flex flex-col space-y-2 items-start">
          <a
            href="#"
            className="text-lg text-[#1769FF] hover:underline font-[Inter] font-medium text-[24px] leading-[150%]"
          >
            Github
          </a>
          <a
            href="#"
            className="text-lg text-[#0A0A14] hover:underline font-[Inter] font-medium text-[24px] leading-[150%]"
          >
            Personal Blog
          </a>
          <a
            href="#"
            className="text-lg text-[#0077B5] hover:underline font-[Inter] font-medium text-[24px] leading-[150%]"
          >
            Linkedin
          </a>
          <a
            href="#"
            className="text-lg text-[#AF0C48] hover:underline font-[Inter] font-medium text-[24px] leading-[150%]"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
