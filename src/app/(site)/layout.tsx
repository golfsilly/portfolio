import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { siteMetadata } from "@/config/siteMetadata";

interface DefaultLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

export default async function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Header />
      {/* <Navbar /> */}
      {children}
      <Footer />
    </>
  );
}
