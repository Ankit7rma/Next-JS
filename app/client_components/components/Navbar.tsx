import Link from "next/link"
import Search from "./Search"

export default function Navbar() {
    return (
        <nav className="bg-slate-600 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl items-center ">
            <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                <Link href="client_components">WikiRocket!</Link>
            </h1>
                <Link href="/" className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0"> Home</Link>
            <Search />
        </nav>
    )
}