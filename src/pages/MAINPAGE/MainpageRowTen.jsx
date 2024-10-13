import { Text, Img, Heading } from "../../components";
import React from "react";

export default function MainpageRowTen() {
  return (
    <div className="mb-20 flex justify-center">
      <div className="container-xs flex justify-center px-4 md:px-5">
        <div className="flex w-full flex-col items-center gap-[102px] md:gap-[76px] sm:gap-[51px]">
          <div className="flex flex-wrap gap-7">
            <Heading
              size="heading3xl"
              as="h2"
              className="font-orbitron text-[69.18px] font-bold uppercase text-white-a700 underline md:text-[48px]"
            >
              OUR
            </Heading>
            <Heading
              size="heading3xl"
              as="h3"
              className="bg-gradient bg-clip-text font-orbitron text-[69.18px] font-bold uppercase text-transparent underline md:text-[48px]"
            >
              TEAM
            </Heading>
          </div>
          <div className="mr-2.5 flex items-center justify-between gap-5 self-stretch md:mr-0 md:flex-col">
            <div className="flex flex-1 items-center gap-3.5 md:flex-col md:self-stretch">
              <div className="flex flex-1 flex-col items-start gap-[78px] md:gap-[58px] md:self-stretch sm:gap-[39px]">
                <Text
                  as="p"
                  className="font-sarpanch text-[41.87px] font-normal text-white-a700 md:text-[37px] sm:text-[31px]"
                >
                  Sushma Ganapuram
                </Text>
                <Text
                  as="p"
                  className="font-sarpanch text-[41.87px] font-normal text-white-a700 md:text-[37px] sm:text-[31px]"
                >
                  Shashi Preetham Kotte
                </Text>
              </div>
              <Img
                src="images/img_image_18.png"
                alt="Imageeighteen"
                className="h-[330px] w-[42%] object-contain md:w-full"
              />
            </div>
            <div className="flex flex-col items-start gap-[76px] md:gap-[57px] sm:gap-[38px]">
              <Text
                as="p"
                className="font-sarpanch text-[41.87px] font-normal text-white-a700 md:text-[37px] sm:text-[31px]"
              >
                Sindhuja Kodaparthi
              </Text>
              <Text
                as="p"
                className="ml-[50px] font-sarpanch text-[41.87px] font-normal text-white-a700 md:ml-0 md:text-[37px] sm:text-[31px]"
              >
                Sriram Yatam
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
