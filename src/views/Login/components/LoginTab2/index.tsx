/* eslint-disable jsx-a11y/alt-text */
import WorkOnAProjectForm from "@/components/WorkOnAProjectForm";
import { placeholderImage } from "@/config/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LoginTab2 = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="grid grid-cols-[415px,auto] gap-10 p-10">
      <div className="rounded-[18px] overflow-hidden">
        <Image {...placeholderImage} className="aspect-square" />
      </div>
      <div>
        <h1 className="__title_lg">Lorem, ipsum dolor.</h1>
        <p className="mt-7 text-[27px] font-red-rose">
          Lorem ipsum dolor sit amet.
        </p>

        <div className="flex justify-between gap-4 mt-7 max-w-[75%] mx-auto">
          <Link href={"/dashboard"} className="__btn w-full py-2.5">
            Login
          </Link>
          <WorkOnAProjectForm
            showModal={showModal}
            setShowModal={setShowModal}
          />
          <button
            className="__btn w-full py-2.5"
            onClick={() => setShowModal(true)}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginTab2;
