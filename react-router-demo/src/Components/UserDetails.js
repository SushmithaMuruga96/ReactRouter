import React from "react";
import { useParams } from "react-router-dom";

export const UserDetails = () => {
  const { userId } = useParams();
  //useParams() return key and values of dynamic routes eg here userId key and its value

  return <div>User Summmary Page {userId}</div>;
};
