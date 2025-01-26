import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LoanProvider } from "@/context/LoanContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoanProvider>
      <Component {...pageProps} />
    </LoanProvider>
  );
}
