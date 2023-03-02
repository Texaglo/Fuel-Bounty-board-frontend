import { ReactNode } from "react";

const HeroSectionBlock = ({ children = null }: { children?: ReactNode }) => {
  return (
    <section className="h-[397px] bg-[url('/img/hero-section-bg.png')] bg-no-repeat bg-cover">
      {children}
    </section>
  );
};

export default HeroSectionBlock;
