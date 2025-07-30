import React from "react";

const ReduxToolkitQuery = () => {
  const code = `
	import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products'
    })
  })
});

export const { useGetProductsQuery } = api;

Usage in component:
const { data: products, isLoading } = useGetProductsQuery();


`;
  return (
    <div>
      <div style={{ textAlign: "left", paddingLeft: "40px" }}>
        <h2>Redux Toolkit Query (RTK Query)</h2>
        <p>RTK Query automates API fetching, caching, and state handling.</p>

        <div style={{ textAlign: "left", paddingLeft: "20px" }}>
          <p></p>
        </div>
      </div>
      <pre
        className="codepre"
        style={{
          background: "#f5f5f5",
          paddingTop: "20px",
          paddingLeft: "40px",
          borderRadius: "8px",
          overflowX: "auto",
          textAlign: "left",
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default ReduxToolkitQuery;
