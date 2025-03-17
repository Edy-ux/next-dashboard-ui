import Menu from "@/components/Menu";
import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "SIGA School Dashboard",
    description: "SIGA School Management System",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex">
            {/* LEFT */}
            <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]  p-4">
                <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
                    <Image src="/logo.png"
                        width={32}
                        height={32}
                        alt="logo"
                    />
                    <span className="font-bold hidden lg:block">ShoolSIGA</span>
                </Link>
                <Menu />
            </div>
            {/* RIGHT */}
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%]">
                <NavBar />
                {children}
            </div>

        </div>
    );
}
