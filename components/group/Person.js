import React, { useEffect } from "react";
import moment from "moment";
import "moment/locale/th";
import { builder } from "../../config/sanity";
import Link from "next/link";
import { BsPerson } from "react-icons/bs";

export default function Person({
  name,
  avatar,
  position,
  position_more,
  start_time,
  _id,
}) {
  useEffect(() => {
    moment.locale("th");
  }, []);

  return (
    <>
      {/* <Link href={"/person/" + _id}> */}

      <div className="flex flex-col gap-2 p-3 rounded-xl relative select-none bg-repeat drop-shadow-xl">
        <style jsx>
          {`
            // .flex.bg-repeat {
            //     background-image: url(/pattern.svg);
            //     background-color: beige;
            // }
          `}
        </style>
        <div className="flex justify-center ">
          {avatar !== null ? (
            <img
              className="rounded-full w-[12rem] drop-shadow-xl"
              src={builder.image(avatar).width(300)}
              alt={name}
            />
          ) : (
            <div className="w-[12rem] h-[12rem] flex flex-col text-white bg-gray-500 justify-center items-center border-2 rounded-full">
              NO PHOTO
            </div>
          )}
        </div>
        <div className="flex flex-col mt-3 h-full w-full rounded-lg max-w-sm mx-auto ">
          <div className="text-center text-sm font-bold drop-shadow-md">{name}</div>
          <div className="text-center text-sm drop-shadow-md">- {position}</div>
          {position_more !== null ? (
            <div className="text-center text-sm drop-shadow-md">- {position_more}</div>
          ) : (
            ""
          )}
          {start_time ? (
            <div className="text-center text-sm drop-shadow-md">
              - อายุราชการ: {moment(start_time, "YYYY-MM-DD").fromNow(true)}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* </Link> */}
    </>
  );
}
