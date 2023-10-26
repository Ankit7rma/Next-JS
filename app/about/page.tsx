import Link from 'next/link'
import React from 'react'

export default function About() {
  // throw new Error("Not Today!")
  return (
    <div>
        <h1 className='m-5 p-5'>About</h1>
        <Link href="/">Go to Home Page</Link>      
    </div>
  )
}
