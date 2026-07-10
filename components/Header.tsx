import Link from "next/link";
import NavLinks from "@/components/NavLinks";

export default function Header() {
    return (
        <header className="bg-blue-500 text-white p-4 flex justify-between">
            <div id="header-title" className="text-xl font-bold">
                Kelsey Hansel
            </div>
            <nav className="flex justify-between items-center">
                <ul className="flex gap-4">
                    <li><NavLinks href="/">Home</NavLinks></li>
                    <li><NavLinks href="/about">About</NavLinks></li>
                    <li><NavLinks href="/contact">Contact</NavLinks></li>
                </ul>
            </nav>
        </header>
  );
}