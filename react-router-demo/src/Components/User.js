import React from "react";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";

export const User = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams, "searchParams");
  const showActiveUsers = searchParams.get("filter") === "active";
  const showRegularUsers = searchParams.get("filter") === "regular";

  return (
    <div>
      <h1 onClick={() => navigate("1")}>User 1</h1>
      <h1 onClick={() => navigate("2")}>User 2</h1>
      <h1 onClick={() => navigate("3")}>User 3</h1>
      <Outlet />

      <button onClick={() => setSearchParams({ filter: "active" })}>
        Active Users
      </button>
      <button onClick={() => setSearchParams({})}>Reset Filter</button>
      <button onClick={() => setSearchParams({ filter: "regular" })}>
        Regular user
      </button>

      {showActiveUsers ? (
        <h1>showinng active users</h1>
      ) : showRegularUsers ? (
        <h1>Regular Users</h1>
      ) : (
        <h1>showing all users</h1>
      )}
    </div>
  );
};
