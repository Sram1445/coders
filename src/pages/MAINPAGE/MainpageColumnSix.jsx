import { Text, Heading } from "../../components";
import React from "react";

export default function MainpageColumnSix() {
  return (
    <div className="mt-[90px] flex flex-col items-center">
      <div className="container-xs flex flex-col items-start gap-4 md:px-5">
        <Heading
          size="heading2xl"
          as="h1"
          className="font-orbitron text-[58.14px] font-bold uppercase text-white-a700 underline md:text-[50px] sm:text-[44px]"
        >
          CHALLENGE 2
        </Heading>
        <Text
          size="text3xl"
          as="p"
          className="w-[88%] font-sarpanch text-[45px] font-normal leading-[63px] text-white-a700 md:w-full md:text-[41px] sm:text-[35px]"
        >
          We have recently identified an additional getaway vehicle: a red van.
        </Text>
      </div>
    </div>
  );
}