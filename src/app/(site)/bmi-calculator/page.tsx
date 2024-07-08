import React from "react";
import { genPageMetadata } from "@/app/seo";
import CardLayout from "@/components/bmi-calculator/CardLayout";
import BmiForm from "@/components/bmi-calculator/BmiForm";


export const metadata = genPageMetadata({ title: "BMI CALCULATOR" });

export default function BmiPage() {
  return (
    <main className="flex min-h-full flex-col items-center justify-center mx-auto py-14 px-4 lg:px-0">
      <h1 className="mb-7 text-center text-3xl font-bold uppercase tracking-widest text-violet-600">
        BMI Calculator
      </h1>
      <CardLayout>
        <BmiForm />
      </CardLayout>
    </main>
  );
}
