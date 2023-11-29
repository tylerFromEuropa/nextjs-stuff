import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center  p-24">
            <h1>Tyler&apos;s Blog</h1>
            <Link href="http://localhost:3000/blog">Blog</Link>
        </main>
    );
}
