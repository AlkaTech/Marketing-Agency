import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'ba5d7400fec7bad3f63ccb8636ae5e64b02015d4', queries,  });
export default client;
  