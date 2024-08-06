"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full max-w-3xl h-screen flex items-center bg-bg3 dark:bg-bg4">
       <div className="absolute inset-0 bg-white opacity-50 dark:opacity-0"></div>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "",
    title: "",
    src: "/contact/hero.webp",
  },
  {
    category: "",
    title: "",
    src: "/contact/ghibli.webp",
  },
  {
    category: "",
    title: "",
    src: "/contact/cybersphere.webp",
  },
  {
    category: "",
    title: "",
    src: "/contact/gdsc.webp",
  },
  
  {
    category: "",
    title: "",
    src: "/contact/monsterpedia.webp",
  },
  {
    category: "",
    title: "",
    src: "/contact/inkscroll.webp",
  },
];
