import { getAuthUserDetails } from "@/lib/queries";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const authuser = currentUser();
  if (!authuser) redirect("/sign-in");

  const user = await getAuthUserDetails();
  return <div>Agency page</div>;
};

export default page;
