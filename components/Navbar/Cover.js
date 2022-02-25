import React from "react";

export default function Cover() {
  return (
    <div>
      <div className="hidden sm:block h-[13rem] relative">
        <div className="absolute bottom-0 left-0 right-0 top-0 z-40 flex justify-center items-center bg-black/50 text-white">
          <div className="flex flex-col items-center gap-2">
            <div className="text-5xl">บุคลากร</div>
            <div className="text-xl">โรงเรียนวิสุทธรังษี จังหวัดกาญจนบุรี</div>
          </div>
        </div>
        <img
          className="w-full h-full object-cover object-top"
          src="http://www.visut.ac.th/vs/wp-content/themes/NewComp/jdgallery/slides/2.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

