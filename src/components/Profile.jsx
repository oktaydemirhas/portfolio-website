import React from "react";

const profileInfos = [
  { title: "Doğum Tarihi", info: "24.03.1996" },
  { title: "İkamet Şehri", info: "Ankara" },
  { title: "Eğitim Durumu", info: "Hacettepe Ünv. Biyoloji Lisans, 2016" },
  { title: "Tercih Ettiğin Rol", info: "Frontend, UI" },
];

function Profile() {
  return (
    <section className="left-0 top-0 bg-[#F4F4F4] flex flex-col justify-center items-center py-16 border-2 border-black">
      <div className="w-[69rem]">
        <p className="font-[Inter] font-medium text-5xl leading-[3.625rem] tracking-[0.01em] text-[#0A0A14] flex justify-center">
          Profile
        </p>
      </div>
      <div className="w-[69rem] flex">
        <div className="border-2 border-black basis-1/2 ">a</div>
        <div className="border-2 border-black basis-1/2">b</div>
      </div>
    </section>
  );
}

export default Profile;
