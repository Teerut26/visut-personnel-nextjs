import React, { useEffect } from "react";
import WithNavbar from "../../layouts/WithNavbar";
import axios from "axios";
import Person from "../../components/group/Person";
import Helmet from "../../components/Helmet";

export async function getServerSideProps(context) {
  const { page } = context.query;
  let { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_BASE_URL, {
    query: `{
        currentPage :allPage(where: { slug: { eq: "${page}" } }) {
          title
          slug
          position {
            title
            person {
              _id
              name
              avatar {
                asset {
                  url
                }
              }
              position_more
              start_time
            }
          }
        }
        allPage(where:{}){
           title
          slug
        }
      }
      `,
  });

  let count = 0;
  if (data.data.currentPage.length !== 0) {
    data.data.currentPage[0].position.map((item) => {
      count += item.person.length;
    });
  }

  return {
    props: {
      nav_lists: data.data.allPage,
      Data: data.data.currentPage,
      id: page,
      person_count: count,
    }, // will be passed to the page component as props
  };
}

export default function group({ nav_lists, Data, id, person_count }) {
  return (
    <>
      {Data.length !== 0 ? (
        <Helmet
          title={`บุคลากร โรงเรียนวิสุทธรังษี จังหวัดกาญจนบุรี - ${Data[0].title} - ${person_count} คน`}
          discription={`${Data[0].title} ${person_count} คน`}
          image="/icon.svg"
          url={`${process.env.NEXT_PUBLIC_BASE_URL}/group/${id}`}
        />
      ) : (
        ""
      )}
      <WithNavbar navlists={nav_lists} >
      {Data.length === 0 ? (
        <div className="flex justify-center items-center py-10">
          <div className="text-4xl">Not Found</div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-start w-full p-2 gap-5 max-w-6xl mx-auto">
          {Data[0].position.map((item, index) => (
            <List {...item} key={index} />
          ))}
        </div>
      )}
      </WithNavbar>
    </>
  );
}

const List = ({ title, person }) => {
  if (person === null) {
    return <></>;
  }
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 text-white w-full rounded-xl text-center text-md md:text-xl select-none">
          {title} {person.length !== 1 ? person.length + " คน" : ""}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-center py-3">
          {person.length === 1 ? (
            <div className="col-start-1 col-span-4">
              {person.map((item, index) => (
                <Person {...item} key={index} position={title} />
              ))}
            </div>
          ) : (
            person.map((item, index) => (
              <Person {...item} key={index} position={title} />
            ))
          )}
          {/* {person.map((item) => (
            <Person {...item} key={item._id} position={title} />
          ))} */}
        </div>
      </div>
    </>
  );
};
