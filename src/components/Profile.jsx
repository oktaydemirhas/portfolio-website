import React from "react";

const profileInfos = [
  { title: "Doğum Tarihi", info: "24.03.1996" },
  { title: "İkamet Şehri", info: "Ankara" },
  { title: "Eğitim Durumu", info: "Hacettepe Ünv. Biyoloji Lisans, 2016" },
  { title: "Tercih Ettiğin Rol", info: "Frontend, UI" },
];

function Profile() {
  return (
    <section className="left-0 top-0 bg-[#F4F4F4] flex flex-col justify-center items-center py-16">
      <div className="w-[69rem]">
        <p className="font-[Inter] font-medium text-5xl leading-[3.625rem] tracking-[0.01em] text-[#0A0A14] flex justify-center pb-5">
          Profile
        </p>
      </div>
      {/*taşıyıcı*/}
      <div className="w-[69rem] flex mt-5">
        <div className="sol-blok relative basis-1/2">
          <div className="sol-blok-gribg absolute w-[31.25rem] h-[19.563rem] bg-[rgba(82,82,82,0.5)] rounded-[0.75rem] mt-2 ml-2"></div>
          <div className="sol-blok-beyazbg relative w-[31.25rem] h-[19.563rem] bg-white rounded-[0.75rem]">
            <div className="sol-blok-texts ml-12 w-[28rem] pt-10">
              <div className="mb-8 h-8 font-[Playfair] font-normal text-2xl leading-8 tracking-[0.01em] text-[#EA2678]">
                Basic Information
              </div>
              {profileInfos.map((infos, index) => (
                <div key={index} className="flex flex-col mt-4">
                  <div className="flex flex-row">
                    <p className="font-[Inter] font-semibold text-[16px] leading-[22px] tracking-[0.01em] text-black basis-2/5">
                      {infos.title}
                    </p>
                    <p className="pr-14 h-[2rem] font-[Inter] font-normal text-[16px] leading-[18px] tracking-[0.01em] text-black basis-3/5">
                      {infos.info}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="sag-blok pl-12 flex justify-start items-center basis-1/2">
          <div className="w-[30rem]">
            <p className="font-[Playfair] font-normal text-[24px] leading-[32px] tracking-[0.01em] text-black">
              About me
            </p>
            <p className="font-[Inter] font-normal text-[18px] leading-[150%] tracking-[0.01em] text-black pt-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia. <br />
              <br />
              Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam temporibus cumque magnam!
            </p>
          </div>
        </div>
      </div>
      {/*taşıyıcı*/}
    </section>
  );
}

export default Profile;
