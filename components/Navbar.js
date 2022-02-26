import React, { useEffect } from "react";
import Cover from "./Navbar/Cover";
import Link from "next/link";
import { useState } from "react";
import { BsFillGridFill, BsHouse, BsRecordFill } from "react-icons/bs";
import { connect } from "react-redux";

function Navbar({navlists}) {
  const [ShowNav, setShowNav] = useState(false);
  const [MenuLists, setMenuLists] = useState(navlists);

  return (
    <>
      <Cover />
      <div
        className={`transform top-0 left-0 w-64 backdrop-blur-sm bg-blue-500/80 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-[99] flex flex-col p-2 gap-2 shadow ${
          ShowNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between px-2 text-white">
            <div className="flex flex-col">
                <div>บุคลากร</div>
            </div>
          <div
            className="hover:bg-black/30 px-2 rounded-lg cursor-pointer select-none"
            onClick={() => setShowNav(!ShowNav)}
          >
            X
          </div>
        </div>
        <div className="flex flex-col px-2 gap-2 ">
          <GroupNav title={"หน้าแรก"} link="/" icon={<BsHouse />} />
          {MenuLists.map((item, index) => (
            <GroupNav
              title={item.title}
              link={"/group/"+item.slug}
              icon={<BsRecordFill />}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="p-3 text-xl bg-blue-400 text-white ">
        <div className="max-w-2xl flex gap-2 mx-auto justify-between">
          <GroupNav title={"หน้าแรก"} link="/" />
          <div
            onClick={() => setShowNav(!ShowNav)}
            className="flex items-center hover:bg-black/30 px-2 rounded-lg"
          >
            <BsFillGridFill />
          </div>
        </div>
      </div>
    </>
  );
}

const GroupNav = ({ title, link, icon }) => {
  return (
    <Link href={link}>
      <div className="hover:bg-black/30 px-3 cursor-pointer rounded-lg select-none text-white flex justify-start items-center gap-2">
        {icon ? <div>{icon}</div> : ""}
        <div>{title}</div>
      </div>
    </Link>
  );
};

export default connect((state) => {
  return state;
})(Navbar);
