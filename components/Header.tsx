import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-blue-500 text-white p-4 flex justify-between">
            <div id="header-title" className="text-xl font-bold">
                Kelsey Hansel
            </div>
            <nav className="flex justify-between items-center">
                <ul className="flex gap-4">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                </ul>
            </nav>
        </header>
  );
}