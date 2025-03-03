import React from "react";
import dynamic from "next/dynamic";

const UserPage = dynamic(() => import("@/components/users/userPage"));
const Users = () => {
  return <UserPage />;
};

export default Users;
