const sanityClient = require("@sanity/client");
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient(JSON.parse(process.env.NEXT_PUBLIC_SANITY_CONFIG));
const builder = imageUrlBuilder(client);

export { client, builder };