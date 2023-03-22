import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

import { Pokemon } from "@/types";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/" }),
  tagTypes: ["pokemon"],
  endpoints: (builder) => ({
    search: builder.query<Pokemon[], string>({
      query: (q) => `search?name=${q}`,
      providesTags: (result, error, search) => [{ type: "pokemon", search }],
    }),
    
  }),
  
});


// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
// import { Pokemon } from "@/types";

// export const pokemonApi = createApi({
//   reducerPath: "pokemonApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:3000/api/" }),
//   tagTypes: ["pokemon"],
//   endpoints: (builder) => ({
//     search: builder.query<Pokemon[], string>({
//       query: (query) => `search?name=${query}`,
//       providesTags: (result, error, search) => [{ type: "pokemon", search }],
//     }),
//   }),
// });
