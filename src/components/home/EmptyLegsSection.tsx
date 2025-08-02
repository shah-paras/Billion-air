"use client";

import React from "react";
import { emptyLegsDeals } from "@/lib/data";
import EmptyLegCard from "@/components/common/EmptyLegCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function EmptyLegsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Empty Leg Deals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Save up to 75% on last-minute flights
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {emptyLegsDeals.map((deal) => (
            <EmptyLegCard key={deal.id} emptyLeg={deal} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/empty-legs">
            <Button variant="outline" size="lg">
              View All Empty Leg Deals
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
