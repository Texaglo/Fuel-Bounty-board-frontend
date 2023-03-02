import { navLinks } from "@/config/constants";
import { cx } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();
  return (
    <header className="bg-[#1F2937]">
      <div className="container flex items-center justify-between py-9">
        {/** Logo --Start-- */}
        <div>
          <Link href={"/"} className="max-w-[132px] block">
            <Image
              src={"/img/logo.png"}
              alt="Texaglo"
              width={600}
              height={92}
            />
          </Link>
        </div>
        {/** Logo --End-- */}

        <nav>
          <ul className="flex gap-20">
            {navLinks.map(({ text, url }, i) => (
              <li key={i}>
                <Link
                  className={cx(
                    "block font-medium",
                    url === router.pathname
                      ? "text-[#FF7D7D]"
                      : "text-white hover:opacity-80",
                  )}
                  href={url}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <button className="py-2 __btn">Connect</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
