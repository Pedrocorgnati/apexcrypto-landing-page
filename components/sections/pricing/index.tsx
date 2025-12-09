import Heading from "@/components/atoms/heading";
import { LeftLine, RightLine } from "@/components/design/pricing";
import Section from "@/components/layout/section";
import { SectionAnchor } from "@/constants";
import Link from "next/link";
import PricingList from "./pricing-list";

type Props = {};

const Pricing = (props: Props) => {
  return (
    <Section id="pricing" className="overflow-hidden">
      <div className="container relative z-2">
        <Heading tag="ApexCrypto plans" title="Choose how you want to grow" />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            className="border-b font-code text-xs font-bold uppercase tracking-wider"
            href={SectionAnchor.Pricing}
          >
            View full details
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
