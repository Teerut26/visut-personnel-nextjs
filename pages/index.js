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
        allPage(where:{}){
          title
          slug
        }
      }`,
  });
  return {
    props: {
      nav_lists: data.data.allPage,
      personCount: data.data.allPerson.length,
    }, // will be passed to the page component as props
  };
}

function Home({ nav_lists, personCount }) {

  return (
    <>
      <WithNavbar navlists={nav_lists}>
        <div className="flex justify-center py-5">
          <div className="w-[10rem] h-[10rem] border-2 rounded-full flex flex-col justify-center items-center bg-blue-400 text-white">
            <div className="text-3xl font-bold">{personCount}</div>
            <div>บุคลากรทั้งหมด</div>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 m-2 justify-center max-w-6xl mx-auto p-3">
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
        </div> */}
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
