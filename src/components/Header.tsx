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
      <div className="flex justify-between px-7 py-7 sm:px-7 sm:py-7 lg:px-10 lg:py-10">
        <div></div>
        <div></div>
      </div>
    </header>
  );
}
