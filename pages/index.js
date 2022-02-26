// import Head from "next/head";
import axios from "axios";
import { useEffect } from "react";
import { connect } from "react-redux";
// import Person from "../components/Index/Person";
import WithNavbar from "../layouts/WithNavbar";
import {
  incrementCounter,
  decrementCounter,
} from "../redux/actions/conterActions";

export async function getServerSideProps(context) {
  let { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_BASE_URL, {
    query: `{
        allPerson{
          _id
        }
        allPage{
            title
            slug
            position {
              title
              person{
                _id
              }
            }
          }
      }`,
  });

  let nav_lists = data.data.allPage.map((item) => {
    let counter = 0;
    item.position.map((item2) => {
      counter += item2.person.length;
    });

    return {
      ...item,
      person_count: counter,
    };
  });

  return {
    props: {
      nav_lists,
      personCount: data.data.allPerson.length,
    }, // will be passed to the page component as props
  };
}

function Home({ nav_lists, personCount }) {
  return (
    <>
      <WithNavbar navlists={nav_lists}>
        <div className="flex justify-center gap-3 py-5">
          <div className="w-[10rem] h-[10rem] border-2 rounded-full flex flex-col justify-center items-center bg-blue-400 text-white">
            <div className="text-3xl font-bold">{personCount}</div>
            <div>บุคลากรทั้งหมด</div>
          </div>
          <div className="w-[10rem] h-[10rem] border-2 rounded-full flex flex-col justify-center items-center bg-blue-400 text-white">
            <div className="text-3xl font-bold">{nav_lists.length}</div>
            <div>กลุ่มสาระ</div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3lg mx-auto px-3 mb-3">
          {nav_lists.map((item) => (
            <div className=" p-3 flex flex-col justify-between items-center bg-blue-400 rounded-xl text-white">
              <div className="text-lg">{item.title}</div>
              <div className="text-3xl">{item.person_count} คน</div>
            </div>
          ))}
        </div>
      </WithNavbar>
    </>
  );
}

// mapStateToProps
// รับฟังก์ชันจาก store มาใช้งาน
const mapStateToProps = (state) => ({
  counter: state.counter.value,
});

// mapDispatchToProps
// ส่งค่าไปยัง store เป็น object
const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
