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
      <Link href={"/person/" + _id}>
        <div className="flex flex-col gap-2 p-3 rounded-xl relative border-2 border-indigo-500/20 select-none cursor-pointer">
          {/* <div className="absolute">
            asdf
        </div> */}
          <div className="flex justify-center">
            {avatar !== null ? (
              <img
                className="rounded-full w-[12rem]"
                src={builder.image(avatar).width(300)}
                alt={name}
              />
            ) : (
              <div className="w-[12rem] h-[12rem] flex flex-col text-gray-700 justify-center items-center border-2 rounded-full">
                  NO PHOTO
              </div>
            )}
          </div>
          <div className="text-center text-sm font-bold">{name}</div>
          <div className="text-center text-sm">- {position}</div>
          {position_more !== null ? (
            <div className="text-center text-sm">- {position_more}</div>
          ) : (
            ""
          )}
          {start_time ? (
            <div className="text-center text-sm">
              - อายุราชการ: {moment(start_time, "YYYY-MM-DD").fromNow(true)}
            </div>
          ) : (
            ""
          )}
        </div>
      </Link>
    </>
  );
}
