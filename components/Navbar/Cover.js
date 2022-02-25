import React from "react";
import Image from 'next/image'

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
        {/* <div style={{width: '100%', height: '100%', position: 'relative'}}> */}
            <Image src="/2.jpg" alt="me" layout='fill' objectFit='cover'  />
        {/* </div> */}
      </div>
    </div>
  );
}

