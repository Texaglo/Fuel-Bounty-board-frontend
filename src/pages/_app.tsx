import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

Modal.setAppElement("#__next");

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
