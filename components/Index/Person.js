import React from "react";

export default function Person() {
  return (
    <div className="flex flex-col gap-2 border-2 p-3 rounded-xl">
      <div className="flex justify-center">
        <img
          className="rounded-full w-[14rem]"
          src="https://cdn.sanity.io/images/na3d5env/production/7b0b132430d69e7c96955f72674efc7e9ead08b8-1280x1280.jpg?w=2000&fit=max&auto=format"
          alt="นางสาวอริญชยา ตะพังพินิจการ"
        />
      </div>
      <div className="text-center text-sm" >นางสาวอริญชยา ตะพังพินิจการ</div>
    </div>
  );
}
