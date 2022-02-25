// import Head from "next/head";
import { connect } from "react-redux";
import { client } from "../config/sanity";
// import Person from "../components/Index/Person";
import WithNavbar from "../layouts/WithNavbar";
import {
  incrementCounter,
  decrementCounter,
} from "../redux/actions/conterActions";

export async function getStaticProps(context) {
  const result = await client.fetch(`*[_type == "group"]{title,slug}`, {});
  return {
    props: { nav_lists: result }, // will be passed to the page component as props
  };
}

function Home({ nav_lists }) {
  return (
    <>
      <WithNavbar navlists={nav_lists}>
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
