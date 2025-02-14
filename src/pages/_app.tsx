import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LoanProvider } from "@/provider/LoanProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { config } from "@/provider/WagmiProvider";

const client = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <WagmiProvider config={config}>
        <RainbowKitProvider>
          <LoanProvider>
            <Component {...pageProps} />
          </LoanProvider>
        </RainbowKitProvider>
      </WagmiProvider>
    </QueryClientProvider>
  );
}
