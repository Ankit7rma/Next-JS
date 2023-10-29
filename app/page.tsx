import Link from 'next/link'
import { Inter } from 'next/font/google'
const inter = Inter({subsets:['latin']})
export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between p-24">
        Hello World
        <Link href="about">Go To About Page</Link>
        <Link href="users">Go to Users</Link>
        <Link href="client_components">Client-Components</Link>
        <Link href="blog_web" > Blog_Website</Link>
    </main>
  )
}
