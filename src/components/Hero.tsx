import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";
import SearchCurrency from "./SearchCurrency";
import CurrencyForm from "./CurrencyForm";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import Link from "next/link";

const Hero = async () => {
  const session = await getServerSession(options);

  return (
    <div className="pt-36 flex flex-col xl:flex-row relative z-0 max-w-[1440px] mx-auto gap-4">
      <div className="flex flex-col gap-4 justify-center items-center">
        <Image src="/hero-img.png" width={500} height={500} alt="hero" />
        <h1 className="text-4xl font-light text-headline text-center">
          Convert Your Currency. The easy Way.
        </h1>
      </div>
      <div className="min-h-full w-[1px] bg-headline"></div>
      {session ? (
        <div className="flex flex-col  w-full justify-evenly items-center gap-8">
          <CurrencyForm />
        </div>
      ) : (
        <div className="w-1/2 mx-auto">
          <div className="bg-headline h-full w-full flex flex-col justify-evenly items-center p-4 gap-6">
            <h1 className="text-4xl font-extrabold text-center">
              SIGN IN TO USE THE SERVICES
            </h1>
            <div className="w-1/2">
              <Link href="/api/auth/signin">
                <CustomButton title="SIGN IN" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
