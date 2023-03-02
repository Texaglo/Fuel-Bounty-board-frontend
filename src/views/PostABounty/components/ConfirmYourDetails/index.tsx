import FileUploadIcon from "@/components/Icons/FileUploadIcon";

const ConfirmYourDetails = ({ onGoBack }: { onGoBack: () => void }) => {
  return (
    <div className="p-9">
      <div className="grid grid-cols-[215px,auto] gap-8">
        <div>
          <p className="w-full pt-1 mb-1 text-sm font-medium text-center">
            Avatar Image & Color
          </p>
          <div className="aspect-square gap-1.5 flex flex-col bg-[url('/img/image-placeholder.png')] bg-no-repeat bg-cover overflow-hidden rounded-xl">
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
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-end">
            <button className="px-6 __btn py-2.5" onClick={onGoBack}>
              Go Back
            </button>
          </div>

          <div className="ml-[60px] mt-10">
            <h3 className="__title_lg"> Confirm your details</h3>
            <div className="space-y-4 mt-14">
              <div className="grid grid-cols-[140px,auto] gap-3">
                <div className="__gray_box">Email</div>
                <a
                  href="mailto:Technoking@Texaglo.Com"
                  className="flex items-center font-semibold capitalize"
                >
                  Technoking@Texaglo.Com
                </a>
              </div>
              <div className="grid grid-cols-[140px,auto] gap-3">
                <div className="__gray_box">DISCORD</div>
                <p className="flex items-center font-semibold capitalize">
                  Technoking#7760
                </p>
              </div>
              <div className="grid grid-cols-[140px,auto] gap-3">
                <div className="__gray_box">Bounty title</div>
                <p className="flex items-center font-semibold capitalize">
                  Smart Contract
                </p>
              </div>
              <div className="grid grid-cols-[140px,auto] gap-3">
                <div>
                  <div className="__gray_box">Bounty description</div>
                </div>
                <p className="flex items-center font-medium capitalize max-w-[300px]">
                  We need a smart contract for creating uploading music to the
                  Solana blockchain
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-8 max-w-[450px]">
              <div className="px-3 w-full __btn py-2.5 outline white">
                Deposit:{" "}
                <input
                  type="text"
                  className="deposite_input"
                  defaultValue={"1500"}
                />
              </div>
              <button className="w-full px-3 __btn py-2.5">Pay Fiat</button>
              <button className="w-full px-3 __btn py-2.5">Pay Crypto</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmYourDetails;
