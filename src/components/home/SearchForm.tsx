"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, MapPin, Users, Plane } from "lucide-react";
import { SearchQuery } from "@/lib/types";
import { popularDestinations } from "@/lib/data";

export default function SearchForm() {
  const [searchQuery, setSearchQuery] = useState<SearchQuery>({
    from: "",
    to: "",
    departure: "",
    passengers: 1,
    tripType: "one-way",
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
    // Handle search logic here
  };

  return (
    <form onSubmit={handleSearch} className="space-y-6">
      {/* Trip Type Toggle */}
      <div className="flex justify-center mb-6">
        <div className="bg-gray-100 rounded-lg p-1 inline-flex">
          <Button
            type="button"
            variant={searchQuery.tripType === "one-way" ? "default" : "ghost"}
            size="sm"
            className={
              searchQuery.tripType === "one-way"
                ? "bg-white text-blue-600 shadow-sm hover:bg-white"
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
            }
            onClick={() =>
              setSearchQuery({ ...searchQuery, tripType: "one-way" })
            }
          >
            One Way
          </Button>
          <Button
            type="button"
            variant={
              searchQuery.tripType === "round-trip" ? "default" : "ghost"
            }
            size="sm"
            className={
              searchQuery.tripType === "round-trip"
                ? "bg-white text-blue-600 shadow-sm hover:bg-white"
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
            }
            onClick={() =>
              setSearchQuery({ ...searchQuery, tripType: "round-trip" })
            }
          >
            Round Trip
          </Button>
        </div>
      </div>

      {/* Search Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* From */}
        <div className="space-y-2">
          <Label className="flex items-center text-sm font-medium">
            <MapPin className="h-4 w-4 mr-1" />
            From
          </Label>
          <Select
            value={searchQuery.from}
            onValueChange={(value) =>
              setSearchQuery({ ...searchQuery, from: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select departure" />
            </SelectTrigger>
            <SelectContent>
              {popularDestinations.map((destination) => (
                <SelectItem key={destination} value={destination}>
                  {destination}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* To */}
        <div className="space-y-2">
          <Label className="flex items-center text-sm font-medium">
            <MapPin className="h-4 w-4 mr-1" />
            To
          </Label>
          <Select
            value={searchQuery.to}
            onValueChange={(value) =>
              setSearchQuery({ ...searchQuery, to: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select destination" />
            </SelectTrigger>
            <SelectContent>
              {popularDestinations.map((destination) => (
                <SelectItem key={destination} value={destination}>
                  {destination}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Departure Date */}
        <div className="space-y-2">
          <Label className="flex items-center text-sm font-medium">
            <Calendar className="h-4 w-4 mr-1" />
            Departure
          </Label>
          <Input
            type="date"
            value={searchQuery.departure}
            onChange={(e) =>
              setSearchQuery({ ...searchQuery, departure: e.target.value })
            }
            min={new Date().toISOString().split("T")[0]}
          />
        </div>

        {/* Passengers */}
        <div className="space-y-2">
          <Label className="flex items-center text-sm font-medium">
            <Users className="h-4 w-4 mr-1" />
            Passengers
          </Label>
          <Select
            value={searchQuery.passengers.toString()}
            onValueChange={(value) =>
              setSearchQuery({ ...searchQuery, passengers: parseInt(value) })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num} {num === 1 ? "Passenger" : "Passengers"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Return Date for Round Trip */}
      {searchQuery.tripType === "round-trip" && (
        <div className="max-w-xs space-y-2">
          <Label className="flex items-center text-sm font-medium">
            <Calendar className="h-4 w-4 mr-1" />
            Return Date
          </Label>
          <Input
            type="date"
            value={searchQuery.return || ""}
            onChange={(e) =>
              setSearchQuery({ ...searchQuery, return: e.target.value })
            }
            min={
              searchQuery.departure || new Date().toISOString().split("T")[0]
            }
          />
        </div>
      )}

      {/* Search Button */}
      <div className="text-center">
        <Button
          type="submit"
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold"
        >
          <Plane className="h-5 w-5 mr-2" />
          Search Flights
        </Button>
      </div>
    </form>
  );
}
