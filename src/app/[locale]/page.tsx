"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
  const t = useTranslations("HomePage");
  const pathname = usePathname();
  const router = useRouter();
  const [currentLocale, setCurrentLocale] = useState("en");

  useEffect(() => {
    setCurrentLocale(pathname.startsWith("/km") ? "km" : "en");
  }, [pathname]);

  const switchLocale = () => {
    const newLocale = currentLocale === "en" ? "km" : "en";
    const newPathname = pathname.replace(/^\/[^\/]+/, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <nav className="mb-8 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          Logo
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            {t("about")}
          </Link>
          <button
            onClick={switchLocale}
            className="cursor-pointer bg-indigo-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-indigo-600 transition duration-300"
          >
            <span>{currentLocale === "en" ? "EN" : "ខ្មែរ"}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </nav>

      <main>
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{t("title")}</h1>
        <p className="text-xl text-gray-600 mb-8">{t("description")}</p>
        <Link
          href="/about"
          className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition duration-300"
        >
          {t("learnMore")}
        </Link>
      </main>
    </div>
  );
}
