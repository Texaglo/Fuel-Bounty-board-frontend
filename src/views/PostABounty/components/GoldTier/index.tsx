import FileUploadIcon from "@/components/Icons/FileUploadIcon";
const GoldTier = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="p-9">
      <div className="grid grid-cols-[420px,auto] gap-8">
        <div>
          <div className="aspect-square gap-1.5 flex flex-col bg-[url('/img/image-placeholder.png')] bg-no-repeat bg-cover overflow-hidden rounded-xl">
            <p className="pt-1 text-center text-sm font-medium text-[#374151] w-full">
              Avatar Image & Color
            </p>

            <label className="flex flex-col items-center justify-center w-full text-center border border-white border-dashed cursor-pointer grow rounded-xl">
              <input type="file" className="sr-only" />
              <FileUploadIcon />
              <p className="text-sm text-[#4F46E5] mt-2">
                Upload a file{" "}
                <span className="text-[#4B5563]">or drag and drop</span>
              </p>
              <p className="text-xs text-[#6B7280] mt-1">
                PNG, JPG, GIF up to 10MB
              </p>
            </label>
          </div>
          <div className="mt-2">
            <p className="text-sm italic">*Optional Hex Value</p>
            <div className="w-[210px] space-y-1 mt-2">
              <div className="__gray_box">#123445</div>
              <div className="__gray_box">upload audio message</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="__title_lg">Gold tier $250</h2>
          <p className="mt-8 text-lg font-medium mb-9">
            Gold tier is the Premium experience we connect you with only
            experienced developers and Sme’s from the arts, project management,
            and other qualified collaborators.
          </p>

          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-[140px,auto] gap-2">
                <div className="__gray_box">Bounty title</div>
                <div className="relative overflow-hidden rounded-[5px]">
                  <div className="w-[54px] h-full absolute flex items-center justify-center text-[#6B7280] bg-[#F9FAFB] border-r border-[#D1D5DB]">
                    Title
                  </div>
                  <input
                    type="text"
                    placeholder="What is your bounty called"
                    className="py-[9px] pr-[5px] pl-[65px] text-sm font-medium text-[#6B7280] placeholder:text-[#6B7280] border border-[#D1D5DB] outline-none w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-[140px,auto] gap-2">
                <div className="__gray_box">Bounty description</div>
                <div className="relative overflow-hidden rounded-[5px]">
                  <div className="w-[54px] h-full absolute flex items-center justify-center text-[#6B7280] bg-[#F9FAFB] border-r border-[#D1D5DB]">
                    Title
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your bounty description"
                    className="py-[9px] pr-[5px] pl-[65px] text-sm font-medium text-[#6B7280] placeholder:text-[#6B7280] border border-[#D1D5DB] outline-none w-full"
                  />
                </div>
              </div>

              <button
                onClick={onNext}
                type="button"
                className="__btn py-[9px] px-20"
              >
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldTier;
