"use client";

import { SectionAnchor } from "@/constants";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import Button from "../../atoms/button";
import { BackgroundCircles, BottomLine } from "../../design/hero";
import Section from "../../layout/section";

type Props = {};

const Hero = (props: Props) => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className={cn("pt-[12rem] -mt-[5.25rem]")}
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 mx-auto mb-16 max-w-[62rem] text-center md:mb-20 lg:mb-24">
          <h1 className="h1 mb-6">
            Master the crypto market with {""}
            <span className="relative inline-block">ApexCrypto Labs</span>
          </h1>
          <p className="body-1 mx-auto mb-6 max-w-3xl text-n-2 lg:mb-8">
            Education, alerts, and mentorships to turn knowledge into financial freedom. Ready-made
            playbooks, an active community, and decisions guided by on-chain data.
          </p>
          <Button href={SectionAnchor.Pricing}>Start now</Button>
        </div>

        <div className="relative mx-auto max-w-[23rem] md:max-w-5xl xl:mb-24">
          <div className="pointer-events-none absolute left-1/2 top-[-54%] aspect-[1440/1880] w-[234%] -translate-x-1/2 md:top-[-46%] md:w-[138%] lg:top-[-104%]">
            <div className="relative size-full overflow-hidden rounded-[2.5rem]">
              <video
                className="size-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-hidden
              >
                <source src="/assets/Hero.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-n-8/80 via-n-8/60 to-n-8" />
            </div>
          </div>

          <BackgroundCircles parallaxRef={parallaxRef} />
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
