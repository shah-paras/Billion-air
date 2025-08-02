"use client";

import React, { useState } from "react";
import Image from "next/image";
import SearchForm from "./SearchForm";

export default function HeroSection() {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error("Video failed to load:", e);
              setVideoError(true);
            }}
            onLoadedData={() => console.log("Video loaded successfully")}
          >
            <source src="/videos/plane-flying.mp4" type="video/mp4" />
          </video>
        ) : (
          <Image
            src="/images/aircraft/aircraft-1.png"
            alt="Hero background"
            fill
            className="object-cover"
            priority
            onLoad={() => console.log("Fallback image loaded")}
          />
        )}

        {/* Overlay */}
        <div
          className="absolute inset-0 git push -u origin dev
 bg-opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Sky, Your Way
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Experience luxury private jet travel with unparalleled service and
            comfort
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl max-w-4xl mx-auto">
          <SearchForm />
        </div>
      </div>
    </section>
  );
}
