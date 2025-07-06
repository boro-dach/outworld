import Hero from "@/widgets/hero/ui/hero";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <Hero />
      <p className="text-2xl text-center font-bold">
        Почему стоит присоединиться к нам:
      </p>
    </div>
  );
};

export default Home;
