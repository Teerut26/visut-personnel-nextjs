import { client } from "../../config/sanity";
const menuReducer = async (state = null, action) => {
  switch (action.type) {
    default:
      const result = await client.fetch(`*[_type == "group"]{title,slug}`, {});
      return (state = result);
  }
};

export default menuReducer;
