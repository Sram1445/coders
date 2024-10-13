import { Img, Text, Heading } from "../../components";
import React from "react";

export default function MainpageRowdescription() {
  return (
    <div className="mt-11">
      <div className="flex flex-col items-center gap-[38px]">
        <div className="container-xs flex flex-col items-start pl-[500px] pr-14 md:px-5">
          <Heading
            size="heading5xl"
            as="h1"
            className="bg-gradient bg-clip-text font-orbitron text-[92px] font-bold uppercase text-transparent underline md:text-[48px]"
          >
            DEMO
          </Heading>
        </div>
        <div className="flex flex-col items-center self-stretch">
          <div className="container-xs relative z-[12] md:px-5">
            <div className="flex flex-col items-start">
              <Heading
                size="heading2xl"
                as="h1"
                className="ml-[22px] font-orbitron text-[58.14px] font-bold uppercase text-white-a700 underline md:ml-0 md:text-[50px] sm:text-[44px]"
              >
                CHALLENGE 1 :{" "}
              </Heading>
              <Text
                size="text3xl"
                as="p"
                className="relative mt-[-24px] font-sarpanch text-[45.5px] font-normal leading-[63px] text-white-a700 md:text-[41px] sm:text-[35px]"
              >
                <>
                  {" "}
                  Using our model, we have successfully identified <br />
                  potential getaway vehicles from the security footage.
                </>
              </Text>
            </div>
          </div>
          <Img
            src="images/img_frame_127803_1.png"
            alt="Image"
            className="relative mt-[-6px] h-[614px] w-full object-cover md:h-auto"
          />
        </div>
      </div>
    </div>
  );
}
