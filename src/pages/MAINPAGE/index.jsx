import { Helmet } from "react-helmet";
import { Img, Text, Heading } from "../../components";
import Header from "../../components/Header";
import MainpageColumnSix from "./MainpageColumnSix";
import MainpageColumnTen from "./MainpageColumnTen";
import MainpageRowEight from "./MainpageRowEight";
import MainpageRowTen from "./MainpageRowTen";
import MainpageRowThree from "./MainpageRowThree";
import MainpageRowdescription from "./MainpageRowdescription";
import React from "react";

export default function MAINPAGEPage() {
  return (
    <>
      <Helmet>
        <title>Main page 18</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-900">
        <div>
          <div>
            <div className="h-[4768px] bg-[url(/public/images/img_group_2.png)] bg-cover bg-no-repeat md:h-auto">
              <div className="mb-[312px]">
                <div>
                  <div className="flex h-[1022px] items-start justify-center bg-white-a700 bg-[url(/public/images/img_home.png)] bg-cover bg-no-repeat py-[30px] md:h-auto sm:py-5">
                    <div className="container-xs mb-[876px] flex justify-center px-14 md:px-5">
                      <Header />
                    </div>
                  </div>
                </div>
                <MainpageRowThree />
                <MainpageRowEight />
                <MainpageRowdescription />
                <MainpageColumnSix />
              </div>
            </div>
            <Img
              src="images/img_frame_201674_1.png"
              alt="Image"
              className="relative z-[13] mt-[-280px] h-[636px] w-full object-cover md:h-auto"
            />
          </div>
          <div className="relative h-[1024px]">
            <div className="absolute left-0 right-0 top-[8%] my-auto ml-[22px] mr-auto flex flex-1 flex-col items-start md:ml-0">
              <Heading
                size="heading2xl"
                as="h2"
                className="font-orbitron text-[58.14px] font-bold uppercase text-white-a700 underline md:text-[50px] sm:text-[44px]"
              >
                CHALLENGE 3
              </Heading>
              <Text
                size="text3xl"
                as="p"
                className="relative mt-[-70px] w-full font-sarpanch text-[45px] font-normal leading-[63px] text-white-a700 md:text-[41px] sm:text-[35px]"
              >
                We have finally uncovered the license plate of the getaway vehicle, and to our surprise, it was a
                bus—something we hadn&#39;t anticipated. Below is an image showcasing our model&#39;s identification of
                the bus as the getaway vehicle.
              </Text>
            </div>
            <Img
              src="images/img_frame_18016_1_1.png"
              alt="Image"
              className="absolute bottom-px left-0 right-0 m-auto h-[572px] flex-1 object-cover"
            />
          </div>
          <MainpageColumnTen />
          <div className="mt-[84px] bg-white-a700_26 py-[204px] md:py-5">
            <MainpageRowTen />
          </div>
        </div>
      </div>
    </>
  );
}
