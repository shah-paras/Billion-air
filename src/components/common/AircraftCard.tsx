"use client";

import React from "react";
import Image from "next/image";
import { Aircraft } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Gauge, MapPin, Clock } from "lucide-react";

interface AircraftCardProps {
  aircraft: Aircraft;
}

export default function AircraftCard({ aircraft }: AircraftCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={aircraft.images[0]}
          alt={aircraft.name}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            {aircraft.type}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {aircraft.name}
        </h3>

        <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {aircraft.capacity} passengers
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            {aircraft.maxRange.toLocaleString()} nm
          </div>
          <div className="flex items-center">
            <Gauge className="h-4 w-4 mr-1" />
            {aircraft.cruiseSpeed} mph
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />$
            {aircraft.hourlyRate.toLocaleString()}/hr
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {aircraft.features.slice(0, 3).map((feature) => (
              <span
                key={feature}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          Request Quote
        </Button>
      </div>
    </Card>
  );
}
