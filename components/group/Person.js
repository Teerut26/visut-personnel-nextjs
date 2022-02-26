import React, { useEffect } from "react";
import moment from "moment";
import 'moment/locale/th'

export default function Person({ name, avatar, position, start_time }) {
  useEffect(() => {
    moment.locale("th");
  }, []);

  return (
    <div className="flex flex-col gap-2 p-3 rounded-xl relative border-2 border-indigo-500/20">
      {/* <div className="absolute">
            asdf
        </div> */}
      <div className="flex justify-center">
        <img
          className="rounded-full w-[12rem]"
          src={avatar.asset.url}
          alt={name}
        />
      </div>
      <div className="text-center text-sm">{name}</div>
      <div className="text-center text-sm">{position}</div>
      {start_time ? (
        <div className="text-center text-sm">
          อายุราชการ: {moment(start_time, "YYYY-MM-DD").fromNow(true)}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
