import HeroSectionBlock from "@/components/HeroSectionBlock";
import BountyBoardCard from "./components/BountyBoardCard";
import BountyNameCard from "./components/BountyNameCard";

const BountyBoard = () => {
  return (
    <>
      <HeroSectionBlock>
        <div className="container flex items-center h-full text-center">
          <div className="max-w-[800px] mx-auto">
            <input
              type="text"
              placeholder="Type Bounty"
              className="text-white text-[118px] w-full font-red-rose bg-transparent outline-none border-none placeholder:text-white/50"
            />
          </div>
        </div>
      </HeroSectionBlock>

      <section className="mb-20">
        <div className="container">
          <div className="grid grid-cols-[600px,auto] gap-12">
            <BountyNameCard />
            <BountyBoardCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default BountyBoard;
