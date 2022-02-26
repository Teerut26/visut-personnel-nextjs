import React, { useEffect } from "react";
import WithNavbar from "../../layouts/WithNavbar";
import { useState } from "react";
import axios from "axios";
import Person from "../../components/group/Person";

export async function getServerSideProps(context) {
  const { page } = context.query;
  let { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_BASE_URL, {
    query: `{
        currentPage :allPage(where: { title: { eq: "${page}" } }) {
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

  return {
    props: { nav_lists: data.data.allPage, Data: data.data.currentPage }, // will be passed to the page component as props
  };
}

export default function group({ nav_lists, page, Data }) {
  const [Title, setTitle] = useState(null);

  return (
    <>
      <WithNavbar navlists={nav_lists} />
      {Data.length === 0 ? (
        <div className="flex justify-center items-center py-10">
          <div className="text-4xl">Not Found</div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-start w-full p-2 gap-3 max-w-5xl mx-auto">
          {Data[0].position.map((item, index) => (
            <List {...item} key={index} />
          ))}
        </div>
      )}
    </>
  );
}

const List = ({ title, person }) => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 text-white w-full rounded-xl text-center text-md md:text-xl ">
          {title} {person.length !== 1 ? person.length+" คน" : ""}
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 justify-center py-3 ">
          {person.length === 1 ? (
            <div className="col-start-1 col-span-4">
              {person.map((item) => (
                <Person {...item} key={item._id} position={title} />
              ))}
            </div>
          ) : (
            person.map((item) => (
              <Person {...item} key={item._id} position={title} />
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
