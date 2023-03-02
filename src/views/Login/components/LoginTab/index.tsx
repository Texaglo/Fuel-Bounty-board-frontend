/* eslint-disable jsx-a11y/alt-text */
import DevelopAProjectForm from "@/components/DevelopAProjectForm";
import { placeholderImage } from "@/config/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LoginTab = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="grid grid-cols-[415px,auto] gap-10 p-10">
      <div className="rounded-[18px] overflow-hidden">
        <Image {...placeholderImage} className="aspect-square" />
      </div>
      <div>
        <h1 className="__title_lg">There’s always work to be done</h1>
        <p className="mt-7 text-[27px] font-red-rose">
          If you need something done,come post a job and get it done to your
          specifications.
        </p>

        <div className="flex justify-between gap-4 mt-7 max-w-[75%] mx-auto">
          <Link href={"/bounty-board"} className="__btn w-full py-2.5">
            Login
          </Link>
          <DevelopAProjectForm
            showModal={showModal}
            setShowModal={setShowModal}
          />
          <button
            onClick={() => setShowModal(true)}
            className="__btn w-full py-2.5"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginTab;
