import React, { useEffect } from "react";
import WithNavbar from "../../layouts/WithNavbar";
import axios from "axios";
import { builder } from "../../config/sanity";
import moment from "moment";
import Helmet from "../../components/Helmet";

export async function getServerSideProps(context) {
  const { name } = context.query;
  let { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_BASE_URL, {
    query: `{
          allPage(where:{}){
             title
            slug
          }
          Person(id: "${name}") {
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
        `,
  });

  return {
    props: { nav_lists: data.data.allPage, Person: data.data.Person, id: name }, // will be passed to the page component as props
  };
}

export default function person({ nav_lists, Person, id }) {
  moment.locale("th");
  return (
    <>
      {/* {Person !== null ? (
        <Helmet
          title={`บุคลากร โรงเรียนวิสุทธรังษี จังหวัดกาญจนบุรี - ${Person.name}`}
          discription={`${Person.name}`}
          image={
            Person.avatar !== null
              ? builder.image(Person.avatar).width(300)
              : "/icon.svg"
          }
          url={`${process.env.NEXT_PUBLIC_BASE_URL}/person/${id}`}
        />
      ) : (
       
        ""
      )} */}

      <WithNavbar navlists={nav_lists}>
        {Person !== null ? (
          <div className="w-full flex flex-col  gap-5 justify-center py-10 px-3">
            <div className="flex justify-center">
              {Person.avatar !== null ? (
                <img
                  className="rounded-full w-[15rem]"
                  src={builder.image(Person.avatar).width(300)}
                  alt={Person.name}
                />
              ) : (
                <div className="w-[15rem] h-[15rem] flex flex-col text-gray-700 justify-center items-center border-2 rounded-full">
                  NO PHOTO
                </div>
              )}
            </div>
            <div className="flex flex-col items-center gap-2">
              <div>{Person.name}</div>
              {Person.position_more !== null ? (
                <div>{Person.position_more}</div>
              ) : (
                ""
              )}
              {Person.start_time !== null ? (
                <div>
                  อายุราชการ:{" "}
                  {moment(Person.start_time, "YYYY-MM-DD").fromNow(true)}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </WithNavbar>
    </>
  );
}
