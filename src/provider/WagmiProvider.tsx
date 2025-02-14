import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { electroneumTestnet } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: '432234',
  chains: [
    electroneumTestnet, 
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [electroneumTestnet] : []),
  ],
  ssr: true,
});
