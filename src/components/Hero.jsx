import React from "react";

function Hero() {
  return (
    <section className="relative w-full h-[42rem] overflow-hidden">
      <div className="p1">
        <div className="p1-b1">DARK MODE</div>
        <div className="p1-b2">|</div>
        <div className="p1-b3">TÜRKÇE</div>
      </div>
      <div className="p2">
        <div className="p2-b1">
          <div className="p2-b1-o1">
            <p>Hi! 👋</p>
            <p>
              I’m Almila. I’m a full-stack developer. I can craft solid and
              scalable frontend products. Let’s meet!
            </p>
          </div>
          <div className="p2-b1-o2">
            <div className="p2-b1-o2-pu1">
              <img src="" alt="linkedin" />
              <img src="" alt="github" />
            </div>
            <div className="p2-b1-o2-pu2">
              <p>
                Currently Freelancing for UX, UI, & Web Design Project . Invite
                me to join your team - pratamaiosi@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="p2-b2">
          <img src="" alt="hero-rigth" />
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
