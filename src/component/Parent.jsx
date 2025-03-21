import React, { createContext, useEffect, useState } from "react";
import useGetData from "./useGetData";
import { RouterProvider } from "react-router-dom";
import Route from "./Route";

// Create context with null as the default value.
const UserDataContext = createContext(null);

export default function Parent() {
  const { data } = useGetData({ url: "https://dummyjson.com/users/1" });
  const [userData, setUserData] = useState(null); // Initially null until data is fetched

  useEffect(() => {
      setUserData(data); // Only set userData when data is fetched
  }, [data]);

  return (
    <div>
      <UserDataContext.Provider value={userData}>
        <RouterProvider router={Route()} />
      </UserDataContext.Provider>
    </div>
  );
}

export { UserDataContext };
