import React, { useEffect } from "react";
import Cover from "./Navbar/Cover";
import Link from "next/link";
import { useState } from "react";
import { BsRecordFill } from "react-icons/bs";
import { MdHome, MdLogin, MdMenu } from "react-icons/md";
import { connect } from "react-redux";

function Navbar({ navlists }) {
  const [ShowNav, setShowNav] = useState(false);
  const [MenuLists, setMenuLists] = useState(navlists);

  return (
    <>
      <Cover />
      <div onClick={() => setShowNav(!ShowNav)} className={`z-10 fixed ${ShowNav ? "block" : "hidden"} inset-0 transition-opacity`}>
        <div tabIndex={0} className="absolute inset-0 bg-black opacity-50" />
      </div>

      <div
        className={`transform top-0  left-0 w-64 backdrop-blur-sm bg-blue-500/80 fixed h-full overflow-auto ease-in-out transition-all duration-100 z-[99] flex flex-col p-2 gap-2 shadow ${
          ShowNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-2 text-white ">
          <div className="flex flex-col">
            <div className="text-2xl">บุคลากร</div>
          </div>
          <div
            className="hover:bg-black/30 px-2 rounded-lg cursor-pointer select-none text-2xl"
            onClick={() => setShowNav(!ShowNav)}
          >
            X
          </div>
        </div>
        <div className="flex flex-col px-2 gap-2 overflow-y-auto">
          <GroupNav title={"หน้าแรก"} link="/" icon={<MdHome />} />
          <GroupNav
            title={"เข้าสู่ระบบ"}
            link={process.env.NEXT_PUBLIC_SANITY_MANAGE_URL}
            icon={<MdLogin />}
          />
          {MenuLists.map((item, index) => (
            <GroupNav
              title={item.title}
              link={"/group/" + item.slug}
              icon={<BsRecordFill />}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="p-3 text-xl border-b">
        <div className="max-w-2xl flex gap-2 mx-auto justify-between">
          <Link href="/">
            <div className="hover:bg-black/30 px-3 py-2 rounded-lg select-none">
              หน้าแรก
            </div>
          </Link>
          <div
            onClick={() => setShowNav(!ShowNav)}
            className="flex items-center hover:bg-black/30  px-2 rounded-lg cursor-pointer"
          >
            <MdMenu />
          </div>
        </div>
      </div>
    </>
  );
}

const GroupNav = ({ title, link, icon }) => {
  return (
    <Link href={link}>
      <div className="hover:bg-black/30 bg-black/10 px-3 py-2 cursor-pointer rounded-lg select-none text-white flex justify-start items-center gap-2">
        {icon ? <div>{icon}</div> : ""}
        <div>{title}</div>
      </div>
    </Link>
  );
};

export default connect((state) => {
  return state;
})(Navbar);
