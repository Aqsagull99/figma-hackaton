import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Letter = () => {
  return (
    <div className="relative  grid grid-cols-1 md:grid-cols-2 py-9 md:py-11 px-6 md:px-16 max-w-frame mx-auto bg-black rounded-[20px]">
      <p
        className={cn([
          "font-bold text-[32px] md:text-[40px] text-white mb-9 md:mb-0",
        ])}
      >
        STAY UP TO DATE ABOUT OUR LATEST OFFERS
      </p>
      <div className="flex items-center">
        <div className="flex flex-col max-w-[349px] mx-auto">
          {/* Email Input Group */}
          <div className="flex bg-white mb-[14px] rounded-full overflow-hidden">
            <span className="flex items-center px-3">
              <Image
                priority
                src="/envoicon.png"
                height={15}
                width={15}
                alt="email"
                className="min-w-5 min-h-5"
              />
            </span>
            <input
              type="email"
              
              placeholder="Enter your email address"
              className="bg-transparent placeholder:text-black/40 placeholder:text-sm sm:placeholder:text-base flex-grow py-2 px-3 outline-none"
            />
          </div>
          {/* Button */}
          <button
            className="text-sm sm:text-base font-medium bg-white h-12 rounded-full px-4 py-3"
            aria-label="Subscribe to Newsletter"
            type="button"
          >
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Letter;
