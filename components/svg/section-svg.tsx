import PlusSvg from "./plus-svg";

const SectionSvg = ({ crossesOffset }: { crossesOffset?: string }) => {
  return (
    <>
      <PlusSvg
        className={`pointer-events-none absolute left-[1.5625rem] top-[-0.3125rem] hidden ${
          crossesOffset && crossesOffset
        } lg:block xl:left-[2.1875rem]`}
      />

      <PlusSvg
        className={`pointer-events-none absolute right-[1.5625rem]  top-[-0.3125rem] hidden ${
          crossesOffset && crossesOffset
        } lg:block xl:right-[2.1875rem]`}
      />
    </>
  );
};

export default SectionSvg;
