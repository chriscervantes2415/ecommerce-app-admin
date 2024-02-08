import Header from "@/components/Header";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react"
import {  Poppins } from "next/font/google";

const inter = Poppins({ subsets: ["latin"], weight: '400'});

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return <main className={'${inter.className}'}>
    <SessionProvider session={session}>
      <Header/>
    <Component {...pageProps} />;
    </SessionProvider>
  </main>
}
