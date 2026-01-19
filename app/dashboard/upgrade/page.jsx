"use client";

import { PricingTable } from "@clerk/nextjs";

export default function UpgradePage() {
  return (
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-6">
          Upgrade Your Plan 
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Unlock unlimited course creation and premium features.
        </p>

        <PricingTable />
      </div>    

  );
}
