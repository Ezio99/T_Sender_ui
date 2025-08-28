// List of tools which wrap around our entire project
// Like the rainbowkit wallet connect so it has a projectwide availibility


"use client"

//ReactNode: A TypeScript type that represents anything React can render (JSX, strings, numbers, fragments, etc.).
import { type ReactNode, useState } from "react"
import config from "@/rainbowKitConfig"
import { WagmiProvider } from "wagmi"
import { RainbowKitProvider } from "@rainbow-me/rainbowkit"
import {
    QueryClientProvider,
    QueryClient,
} from "@tanstack/react-query";
import "@rainbow-me/rainbowkit/styles.css"



export function Providers(props: { children: ReactNode }) {
    const [queryClient] = useState(() => new QueryClient())
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>
                    {props.children} {/* <- the app basically*/}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}