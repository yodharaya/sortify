"use client";
import Image from "next/image";
import { useState } from "react";

export default function OutputPage() {
  const [trashType, setTrashType] = useState("organic");
  const [classification, setClassification] = useState("Uknown");

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 px-[48px] py-6 gap-[12px]">
      <div className="w-full flex justify-center">
        <Image
          src="/all-page/logo.svg"
          alt="Sortify Logo"
          width={120}
          height={36}
          className="aspect-auto w-[120px] h-[36px] object-cover"
        />
      </div>
      <p className="w-full text-left font-bold p-[12px]">
        Here Your Sort Classification
      </p>
      <div className="bg-white w-full rounded-[12px] p-[24px] flex flex-col gap-[24px] aspect-[3/4] justify-between">
        {/* Non Logo */}

        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[12px]">
            <p className="font-bold">Trash Type</p>
            <p>{trashType}</p>
          </div>
          <div className="flex flex-col gap-[12px]">
            <p className="font-bold">Classification</p>
            <p>{classification}</p>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Image
            src={
              trashType == "anorganic"
                ? "/output/anorganic.svg"
                : trashType == "organic"
                ? "/output/organic.svg"
                : "/output/b3.svg"
            }
            width={200}
            height={200}
            alt=""
            className=""
          />
        </div>
      </div>
    </div>
  );
}
