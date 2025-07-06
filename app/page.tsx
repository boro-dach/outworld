import Community from "@/widgets/community/ui/community";
import Enhanced from "@/widgets/enhanced/ui/enhanced";
import Hero from "@/widgets/hero/ui/hero";
import Nobullshit from "@/widgets/nobullshit/ui/nobullshit";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Hero />
      <p className="text-2xl text-center font-bold mb-2">
        Почему стоит присоединиться к нам:
      </p>
      <Enhanced />
      <Community />
      <Nobullshit />
    </div>
  );
};

export default Home;
