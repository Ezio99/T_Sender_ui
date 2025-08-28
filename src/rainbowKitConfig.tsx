// Run on client side
"use client"

import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';

import {anvil,zksync, sepolia} from "wagmi/chains"

export default getDefaultConfig({
    appName:"T-Sender",
    // ! at the end is a TypeScript feature called the non-null assertion operator
    projectId: process.env.NEXT_PUBLIC_RAINBOW_KIT_WALLET_CNNECT_PROJECT_ID!,
    chains:[anvil,zksync,sepolia],
    // Server side rendering
    ssr:false
})