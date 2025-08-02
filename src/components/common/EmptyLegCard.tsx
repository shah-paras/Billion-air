"use client";

import React from "react";
import Image from "next/image";
import { EmptyLeg } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, ArrowRight } from "lucide-react";

interface EmptyLegCardProps {
  emptyLeg: EmptyLeg;
}

export default function EmptyLegCard({ emptyLeg }: EmptyLegCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-32">
        <Image
          src={emptyLeg.aircraft.images[0]}
          alt={emptyLeg.aircraft.name}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 left-2">
          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            -{emptyLeg.discount}%
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-900">
            {emptyLeg.aircraft.name}
          </h3>
          <span className="text-xs text-gray-500">
            {emptyLeg.aircraft.type}
          </span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="text-center">
            <div className="font-medium text-gray-900">
              {emptyLeg.from.split(" ")[0]}
            </div>
            <div className="text-xs text-gray-500">
              {emptyLeg.from.split(" ")[1]}
            </div>
          </div>
          <ArrowRight className="h-4 w-4 text-gray-400" />
          <div className="text-center">
            <div className="font-medium text-gray-900">
              {emptyLeg.to.split(" ")[0]}
            </div>
            <div className="text-xs text-gray-500">
              {emptyLeg.to.split(" ")[1]}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4 text-xs text-gray-600">
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {formatDate(emptyLeg.departureDate)}
          </div>
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {emptyLeg.departureTime}
          </div>
          <div className="flex items-center">
            <Users className="h-3 w-3 mr-1" />
            {emptyLeg.seats} seats
          </div>
        </div>

        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="line-through text-gray-400 text-sm">
              ${emptyLeg.originalPrice.toLocaleString()}
            </div>
            <div className="text-lg font-bold text-blue-600">
              ${emptyLeg.discountedPrice.toLocaleString()}
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500">Duration</div>
            <div className="font-medium">{emptyLeg.duration}</div>
          </div>
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          Book Now
        </Button>
      </div>
    </Card>
  );
}
