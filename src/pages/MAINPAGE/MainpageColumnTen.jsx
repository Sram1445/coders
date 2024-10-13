import { Text, Heading } from "../../components";
import React from "react";

export default function MainpageColumnTen() {
  return (
    <div className="mt-20 flex flex-col items-center">
      <div className="container-xs flex flex-col items-center px-4 md:px-5">
        <div className="flex flex-wrap gap-[26px]">
          <Heading
            size="heading3xl"
            as="h2"
            className="font-orbitron text-[69.46px] font-bold uppercase text-white-a700 underline md:text-[48px]"
          >
            TECH
          </Heading>
          <Heading
            size="heading3xl"
            as="h3"
            className="bg-gradient bg-clip-text font-orbitron text-[69.46px] font-bold uppercase text-transparent underline md:text-[48px]"
          >
            STACK
          </Heading>
        </div>
        <Text
          size="text4xl"
          as="p"
          className="mt-[120px] w-[98%] font-sarpanch text-[47.9px] font-normal leading-[67px] text-white-a700 md:w-full md:text-[43px] sm:text-[37px]"
        >
          We developed a computer vision model using AWS Rekognition to identify custom labels in images. We utilized
          Amazon S3 for secure and scalable data storage. We employed Python and key libraries such as Pillow (PIL) for
          image processing, boto3 for AWS integration, json for data management, and uuid for unique identifiers.{" "}
        </Text>
        <Text
          size="text5xl"
          as="p"
          className="mt-[76px] font-sarpanch text-[52.07px] font-normal leading-[72px] text-white-a700 md:text-[44px] sm:text-[38px]"
        >
          <span className="font-bold">Cloud Services:</span>
          <span>&nbsp;</span>
          <span className="font-poppins">
            <>
              AWS Rekognition, Amazon S3
              <br />
            </>
          </span>
          <span className="font-bold">Programming Language:</span>
          <span>&nbsp;</span>
          <span className="font-poppins">
            <>
              Python
              <br />
            </>
          </span>
          <span className="font-bold">Key Libraries:</span>
          <span>&nbsp;React,&nbsp;</span>
          <span className="font-poppins">Pillow (PIL), boto3, json, uuid</span>
        </Text>
      </div>
    </div>
  );
}
