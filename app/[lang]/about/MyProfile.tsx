"use client";

import { useEffect } from "react";

import ProfileDetails from "./components/Details";
import ProfileMain from "./components/Main";

const MyProfile = () => {
  useEffect(() => {
    const getUser = async () => {
      const res = await fetch("/api/notion/userdb");
      const data = await res.json();
      console.log(data);
    };
    getUser();
  }, []);

  return (
    <>
      <ProfileMain />
      <ProfileDetails />
    </>
  );
};

export default MyProfile;
