import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

// Hover testApi here and note that the type shows correctly
export const testApi = createApi({
  reducerPath: "testApi",
  baseQuery: fetchBaseQuery(),
  endpoints: () => ({})
});

// testApi shows as "any" in code completion, but
// this results in a TS error:
testApi.foo();