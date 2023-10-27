import { error } from "console";
import React from "react";

export default async function getUser(userId: string) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/${userId}"
  );
  const data = await res.json();
  // if (!res.ok) {
  //   throw new Error("Not Fetched User");
  // }
  return data;
}
