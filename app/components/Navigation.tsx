"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavigationProps {
  navLinks: { href: string; name: string }[];
}

export function Navigation({ navLinks }: NavigationProps) {
  const pathname = usePathname();

  return (
    <div className=" bg-rose-400 p-3">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            href={link.href}
            key={link.name}
            className={`mr-4 font-medium hover:text-gray-200 ${
              isActive ? "text-black" : "text-white"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
