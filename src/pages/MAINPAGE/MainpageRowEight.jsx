import { Heading, Img } from "../../components";
import React from "react";

export default function MainpageRowEight() {
  return (
    <div className="mt-[42px] flex justify-center">
      <div className="container-xs flex justify-center md:px-5">
        <div className="flex w-full flex-col items-center">
          <div className="flex flex-wrap gap-10">
            <Heading
              size="heading4xl"
              as="h1"
              className="font-orbitron text-[90.54px] font-bold uppercase text-white-a700 underline md:text-[48px]"
            >
              THe
            </Heading>
            <Heading
              size="heading4xl"
              as="h1"
              className="bg-gradient bg-clip-text font-orbitron text-[90.54px] font-bold uppercase text-transparent underline md:text-[48px]"
            >
              CHASE
            </Heading>
          </div>
          <Heading
            size="headinglg"
            as="h3"
            className="relative mt-[-2px] font-sarpanch text-[29.16px] font-bold uppercase text-white-a700 md:text-[27px] sm:text-[25px]"
          >
            Based on the latest information, we have identified potential getaway vehicles.
          </Heading>
          <div className="ml-6 mt-8 flex items-start self-stretch md:ml-0 md:flex-col">
            <div className="flex flex-1 flex-col self-center md:self-stretch">
              <Img
                src="images/img_whatsapp_image_2024_10_13.png"
                alt="Whatsappimage"
                className="relative z-[11] ml-3 h-[208px] w-[38%] object-contain md:ml-0"
              />
              <div className="relative mt-[-182px] flex items-center md:flex-col">
                <Img
                  src="images/img_whatsapp_image_2024_10_13_214x430.png"
                  alt="Whatsappimage"
                  className="relative z-10 mb-[62px] h-[214px] w-[30%] self-end object-contain md:w-full md:self-auto"
                />
                <div className="relative ml-[-250px] flex flex-1 items-center md:ml-0 md:flex-col md:self-stretch">
                  <Heading
                    as="h5"
                    className="relative z-[9] mb-6 self-end font-sarpanch text-[23.24px] font-bold uppercase text-white-a700 md:self-auto md:text-[21px]"
                  >
                    car 3
                  </Heading>
                  <div className="relative ml-[-62px] h-[718px] flex-1 bg-[url(/public/images/img_group_5.svg)] bg-cover bg-no-repeat py-[182px] md:ml-0 md:h-auto md:self-stretch md:py-5">
                    <div className="mb-[100px]">
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex items-start gap-[190px] self-stretch sm:flex-col sm:gap-5">
                          <Heading
                            as="h5"
                            className="font-sarpanch text-[23.24px] font-bold uppercase text-white-a700 md:text-[21px]"
                          >
                            CAR 1
                          </Heading>
                          <Img
                            src="images/img_whatsapp_image_2024_10_13_208x424.png"
                            alt="Whatsappimage"
                            className="h-[208px] w-[56%] self-center object-contain sm:w-full"
                          />
                        </div>
                        <Heading
                          as="h5"
                          className="font-sarpanch text-[23.24px] font-bold uppercase text-white-a700 md:text-[21px]"
                        >
                          BIKE
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative ml-[-214px] flex w-[28%] flex-col items-center md:ml-0 md:w-full">
              <Img
                src="images/img_whatsapp_image_2024_10_13_218x436.png"
                alt="Whatsappimage"
                className="h-[218px] w-full object-cover md:h-auto"
              />
              <Heading
                as="h5"
                className="font-sarpanch text-[23.24px] font-bold uppercase text-white-a700 md:text-[21px]"
              >
                CAR 2
              </Heading>
              <Img
                src="images/img_whatsapp_image_2024_10_13_216x422.png"
                alt="Whatsappimage"
                className="mr-4 mt-[204px] h-[216px] w-full object-cover md:mr-0 md:h-auto"
              />
              <Heading
                as="h5"
                className="font-sarpanch text-[23.24px] font-bold uppercase text-white-a700 md:text-[21px]"
              >
                car 4
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
