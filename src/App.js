import "@rainbow-me/rainbowkit/styles.css";
import {
  RainbowKitProvider,
  connectorsForWallets
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { YourComponent } from "./YourComponent";

import { ArcanaConnector } from "@arcana/auth-wagmi";
import { metaMaskWallet } from "@rainbow-me/rainbowkit/wallets";
import { connectors } from "./utils/wallet";

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [publicProvider()]
);

/*
export const ArcanaRainbowConnector = ({ chains }) => {
  return {
    id: "arcana-auth",
    name: "Arcana Wallet",
    iconUrl: svgSource,
    iconBackground: "#101010",
    createConnector: () => {
      const connector = new ArcanaConnector({
        chains,
        options: {
          //clientId: "xar_dev_5fd5338ee82834d59eee58f37b676bdabdfa41e9"
          //clientId: "xar_test_87f34a9c7879cd4b726ba36a99e164837d70143a"
          //App: 'Arc4n4-docx' wallet:
          clientId: "xar_live_d7c88d9b033d100e4200d21a5c4897b896e60063"
        }
      });
      return {
        connector
      };
    }
  };
};
*/

/*const connectors = (chains) =>
  connectorsForWallets([
    {
      groupName: "Recommended",
      wallets: [ArcanaRainbowConnector({ chains }), metaMaskWallet({ chains })]
    }
  ]);
*/

const wagmiClient = createClient({
  autoConnect: true,
  connectors: connectors(chains),
  provider
});

export default function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <YourComponent />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
