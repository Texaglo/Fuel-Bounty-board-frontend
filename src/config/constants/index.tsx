import type { ImageProps } from "next/image";
import { Styles } from "react-modal";
export const navLinks = [
  {
    url: "/bounty-board",
    text: "Bounty Board",
  },
  {
    url: "/dashboard",
    text: "Dashboard",
  },
  {
    url: "/profile",
    text: "Profile",
  },
];

export const placeholderImage: ImageProps = {
  width: 590 * 1.5,
  height: 564 * 1.5,
  alt: "Placeholder Image",
  src: "/img/image-placeholder.png",
};

export const modalStyles: Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    borderRadius: 0,
    boxShadow: "none",
    background: "transparent",
    padding: 0,
    border: "none",
    overflow: "hidden",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.15)",
    backdropFilter: "blur(12px)",
    zIndex: 999999999,
  },
};
