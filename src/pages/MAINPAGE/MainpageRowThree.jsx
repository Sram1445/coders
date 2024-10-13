import { Img, Text, Heading } from "../../components";
import React from "react";

export default function MainpageRowThree() {
  return (
    <div>
      <div className="flex h-[1024px] items-center justify-center bg-gray-900 bg-[url(/public/images/img_desktop_2.png)] bg-cover bg-no-repeat md:h-auto">
        <div className="container-xs mt-[42px] flex justify-center md:px-5">
          <div className="relative h-[980px] w-full">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1">
              <div className="ml-[296px] mr-[312px] flex flex-wrap justify-between gap-5 md:mx-0">
                <Heading
                  size="heading4xl"
                  as="h1"
                  className="font-orbitron text-[90.54px] font-bold uppercase text-white-a700 underline md:text-[48px]"
                >
                  RELIC
                </Heading>
                <Heading
                  size="heading4xl"
                  as="h2"
                  className="bg-gradient bg-clip-text font-orbitron text-[90.54px] font-bold uppercase text-transparent underline md:text-[48px]"
                >
                  FINDER
                </Heading>
              </div>
              <div className="relative mt-[-24px] h-[872px]">
                <div className="absolute left-0 right-0 top-0 mx-[116px] my-auto flex flex-1 items-center md:relative md:mx-0 md:flex-col">
                  <Img
                    src="images/img_vector_6.svg"
                    alt="Vectorsix"
                    className="h-[554px] w-[54%] object-contain md:w-full"
                  />
                  <div className="cardbidmain_border relative mb-[52px] ml-[-124px] flex w-[34%] rotate-[13deg] justify-center self-end rounded-[18px] bg-gradient1 p-3.5 md:ml-0 md:w-full md:self-auto">
                    <div className="flex w-full">
                      <div className="flex h-[60px] w-[20%] items-end justify-end bg-[url(/public/images/img_group_4.png)] bg-cover bg-no-repeat py-2.5 md:h-auto">
                        <Img
                          src="images/img_verified_1.png"
                          alt="Verifiedone"
                          className="mt-[22px] h-[16px] object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col items-start gap-0.5">
                        <Heading
                          size="headingmd"
                          as="h3"
                          className="ml-1 text-[27.8px] font-semibold text-white-a700_19 md:ml-0 md:text-[25px] sm:text-[23px]"
                        >
                          HAPE #6959
                        </Heading>
                        <Heading size="textxs" as="h4" className="text-[12.91px] font-medium text-black-900_b2">
                          HAPES PRIME
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[-1.72px] left-0 right-0 m-auto flex flex-1 items-center justify-end md:relative md:flex-col">
                  <div className="cardbidmain_border relative z-[3] mb-[124px] flex w-[12%] rotate-[13deg] justify-center self-end rounded-[18px] bg-gradient2 p-2.5 shadow-lg md:w-full md:self-auto">
                    <div className="mb-1 w-full">
                      <div className="flex flex-col items-start">
                        <Heading size="headingxs" as="h5" className="text-[19.86px] font-semibold text-white-a700_19">
                          Auction
                        </Heading>
                        <Heading
                          size="texts"
                          as="h6"
                          className="relative mb-2 mt-[-2px] text-[13.9px] font-medium text-white-a700_19"
                        >
                          End In
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <div className="relative ml-[-8px] flex w-[62%] items-center justify-end md:ml-0 md:w-full md:flex-col">
                    <div className="relative z-[1] mb-20 h-[106px] w-[42%] self-end md:h-auto md:w-full md:self-auto">
                      <Img
                        src="images/img_card_bid_main.png"
                        alt="Cardbidmain"
                        className="h-[96px] w-full flex-1 rounded-[18px] object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 px-7 sm:relative sm:flex-col sm:px-5">
                        <div className="flex flex-1 sm:self-stretch">
                          <div className="w-full rotate-[14deg] p-3.5">
                            <div className="mb-4 flex flex-col items-start">
                              <Heading
                                size="headingxl"
                                as="h3"
                                className="text-[31.78px] font-semibold text-white-a700_19 md:text-[29px] sm:text-[27px]"
                              >
                                17
                              </Heading>
                              <Heading
                                size="texts"
                                as="p"
                                className="relative mt-[-6px] text-[13.9px] font-medium text-white-a700_19"
                              >
                                Hours
                              </Heading>
                            </div>
                          </div>
                          <div className="relative ml-[-28px] flex w-full rotate-[14deg] items-start justify-center gap-5 py-3.5">
                            <Heading
                              as="h5"
                              className="mt-3 rotate-[13deg] text-[23.83px] font-semibold text-white-a700_19 md:text-[21px]"
                            >
                              :
                            </Heading>
                            <div className="mb-4 flex flex-1 flex-col items-start">
                              <Heading
                                size="headingxl"
                                as="h3"
                                className="text-[31.78px] font-semibold text-white-a700_19 md:text-[29px] sm:text-[27px]"
                              >
                                56
                              </Heading>
                              <Heading
                                size="texts"
                                as="p"
                                className="relative mt-[-6px] text-[13.9px] font-medium text-white-a700_19"
                              >
                                Minutes
                              </Heading>
                            </div>
                          </div>
                        </div>
                        <div className="relative ml-[-8px] flex w-[36%] items-start justify-center sm:ml-0 sm:w-full">
                          <Heading
                            as="h5"
                            className="relative z-[2] mt-[26px] rotate-[13deg] text-[23.83px] font-semibold text-white-a700_19 md:text-[21px]"
                          >
                            :
                          </Heading>
                          <div className="relative ml-[-4px] flex-1 rotate-[14deg] self-center p-3.5">
                            <div className="mb-4 flex flex-col items-start">
                              <Heading
                                size="headingxl"
                                as="h3"
                                className="text-[31.78px] font-semibold text-white-a700_19 md:text-[29px] sm:text-[27px]"
                              >
                                03
                              </Heading>
                              <Heading
                                size="texts"
                                as="p"
                                className="relative mt-[-6px] text-[13.9px] font-medium text-white-a700_19"
                              >
                                Seconds
                              </Heading>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_vector_5.svg"
                      alt="Vectorfive"
                      className="relative ml-[-302px] h-[554px] w-[58%] object-contain md:ml-0 md:w-full"
                    />
                  </div>
                </div>
                <div className="absolute left-0 right-0 top-[6%] m-auto flex flex-1 items-start justify-center px-14 md:relative md:flex-col md:px-5">
                  <div className="cardbidmain_border1 h-[306px] w-[46%] self-center rounded-[18px] bg-gradient2 shadow-lg" />
                  <div className="cardbidmain_border2 relative ml-[-108px] mt-2.5 flex w-[18%] rotate-[13deg] justify-center rounded-[14px] bg-gradient2 shadow-lg md:ml-0 md:w-full">
                    <div className="mb-1.5 w-full px-9 sm:px-5">
                      <div className="flex flex-col items-start justify-center">
                        <Heading as="h5" className="text-[23.83px] font-bold text-white-a700_19 md:text-[21px]">
                          BID NOW!
                        </Heading>
                        <Heading
                          size="texts"
                          as="p"
                          className="relative mt-[-4px] text-[13.9px] font-medium text-white-a700_19"
                        >
                          Latest Collection
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 top-0 z-[4] m-auto flex h-max flex-1 items-center justify-center px-14 md:relative md:flex-col md:px-5">
                  <div className="cardbidmain_border relative z-[5] mb-[114px] flex w-[28%] rotate-[13deg] justify-center self-end rounded-[18px] bg-gradient2 p-4 shadow-xl md:w-full md:self-auto">
                    <div className="flex w-full justify-between gap-5 px-[52px] md:px-5">
                      <div className="flex flex-1 flex-col items-start justify-center">
                        <Heading as="h5" className="text-[23.83px] font-semibold text-white-a700_19 md:text-[21px]">
                          5.758 ETH
                        </Heading>
                        <Heading
                          size="texts"
                          as="p"
                          className="relative mt-[-4px] text-[13.9px] font-medium text-white-a700_19"
                        >
                          Latest Bid
                        </Heading>
                      </div>
                      <div className="flex flex-col items-end self-end">
                        <Heading size="headingxs" as="h6" className="text-[19.86px] font-semibold text-white-a700_19">
                          $5758.31
                        </Heading>
                        <Heading
                          size="texts"
                          as="p"
                          className="mb-2 mr-1.5 text-[13.9px] font-medium text-light_green-a700 md:mr-0"
                        >
                          +12.45%
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <div className="cardbidmain_border1 relative ml-[-302px] flex w-[46%] rotate-[13deg] justify-end rounded-[18px] bg-gradient2 px-[38px] py-[106px] shadow-lg md:ml-0 md:w-full md:py-5 sm:p-5">
                    <div className="mt-[228px] h-[170px] w-[44%] bg-purple-300_4c blur-[99.00px] backdrop-opacity-[0.5]" />
                  </div>
                </div>
                <Img
                  src="images/img_image_17.png"
                  alt="Imageseventeen"
                  className="absolute left-0 right-0 top-[9%] z-[6] m-auto h-[498px] w-[54%] rounded-[14px] object-contain"
                />
              </div>
            </div>
            <div className="absolute bottom-[1.17px] left-0 right-0 z-[7] m-auto h-[854px] w-[78%] rounded-[60px] border-[3.72px] border-solid border-black-900 bg-blue_gray-900" />
            <div className="absolute bottom-0 left-0 right-0 top-0 z-[8] m-auto h-[962px] w-[78%] content-center md:h-auto">
              <Text
                size="textmd"
                as="p"
                className="ml-auto w-[92%] font-sarpanch text-[33.18px] font-normal leading-[46px] text-white-a700 md:text-[31px] sm:text-[29px]"
              >
                <>
                  A national treasure has been stolen. The Four-Goat Square Zun, the largest surviving bronze ritual
                  vessel from the Shang Dynasty and one of China’s top ten treasures, has disappeared in a daring
                  daylight heist. This priceless artifact, a symbol of ancient heritage, is now in the hands of unknown
                  thieves.
                  <br />
                  <br />
                  As authorities race against time, our cutting-edge AI technology steps in. Using advanced vehicle
                  identification techniques, we’ve developed a model to track and identify the getaway vehicle. The
                  mission: recover the Zun and bring the culprits to justice.
                  <br />
                  <br />
                  The chase begins now.
                </>
              </Text>
              <Img
                src="images/img_trophy.png"
                alt="Trophy"
                className="absolute bottom-[4%] left-0 right-0 m-auto h-[788px] w-[788px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
