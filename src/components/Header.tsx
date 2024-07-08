"use client";

import React from "react";
import Link from "next/link";
import { Phone, KeyRound, Mail } from "lucide-react";
import { Session } from "next-auth";
// import ProfileButton from "../layouts/profile-button";
// import LanguageButton from "../layouts/language-button";

type Props = {
  session: Session | null | any;
};

export default function Header() {
  return (
    <header className="bg-slate-800 dark:bg-slate-800">
      <div className="flex justify-end px-7 py-7 sm:px-7 sm:py-7 lg:px-10 lg:py-10">
        <div className="flex items-center sm:mr-0 gap-0">
          <div className="hidden sm:block">
            {/* <div className="flex flex-row">
              <Mail className="h-4 w-4  text-slate-400" aria-hidden="true" />
              <Link
                href="mailto:aranhos.team@gmail.com"
                className="ml-1 mr-2 text-xs text-slate-400 hover:text-indigo-400 hover:underline"
              >
                pnpnd2107@@gmail.com
              </Link>
            </div> */}
          </div>

          <div className="flex">
            {/* <Phone className="h-4 w-4  text-slate-400" aria-hidden="true" />
            <Link
              href="tel:0372330333"
              className="ml-1 mr-2 text-xs text-slate-400 hover:text-indigo-400 hover:underline"
            >
             0995489121
            </Link> */}
          </div>

          <div className="flex mr-2">
            {/* <LanguageButton /> */}
          </div>

          {/* <div className="flex">
            {session ? (
              <ProfileButton session={session} />
            ) : (
              <>
                <KeyRound
                  className="h-4 w-4  text-slate-400"
                  aria-hidden="true"
                />
                <Link
                  href="/signin"
                  className="ml-1 mr-2 text-xs text-slate-400 hover:text-indigo-400 hover:underline"
                >
                  Login
                </Link>
              </>
            )}
          </div> */}
        </div>
      </div>
    </header>
  );
}
