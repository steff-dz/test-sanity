import React from "react";
import image from "../randombackground.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="desk with potted plant background"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-20 px-8">
        <h1 className="text-6xl text-black font-bold cursive leading-none lg:leading-snug home-name">
          Howdy. I'm Steff
        </h1>
      </section>
    </main>
  );
}
