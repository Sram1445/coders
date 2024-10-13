import { Button, Text } from "./..";
import React from "react";

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex sm:flex-col justify-between items-center w-[64%] md:w-full gap-5`}
    >
      <div className="flex w-[24%] justify-center self-end rounded-[20px] border-[4.39px] border-solid border-purple-100 bg-purple-800 p-3 shadow-xs sm:self-auto">
        <Text
          size="textlg"
          as="p"
          className="font-malrindemo text-[36.8px] font-normal text-yellow-a200 sm:text-[30px]"
        >
          HEIST
        </Text>
      </div>
      <div className="flex w-[26%] justify-center rounded-[22px] border-[4.59px] border-solid border-purple-100 bg-purple-800 p-3 shadow-sm">
        <Text
          size="textxl"
          as="p"
          className="font-malrindemo text-[38.44px] font-normal text-yellow-a200 sm:text-[32px]"
        >
          DEMO
        </Text>
      </div>
      <Button className="flex h-[82px] min-w-[214px] flex-row items-center justify-center rounded-[22px] border-[4.56px] border-solid border-purple-100 bg-purple-800 px-[7.44px] text-center font-malrindemo text-[36.42px] text-yellow-a200 shadow-md sm:text-[30px]">
        TECH STACK
      </Button>
    </header>
  );
}
