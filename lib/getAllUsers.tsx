import React from 'react'

export default async function getAllUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = res.json()
    if(!res.ok){
        throw new Error("Not Fetched Data")
    }
    console.log(data)
  return (
    data
  )
}
