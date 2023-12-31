import Head from "next/head";

import Navbar from "../layout/navbar";
import Hero from "../layout/Hero";
import WelcomePage from "./welcome";
import MainPage from "../pages/main";
import ContactForm from "./footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <WelcomePage />
      <MainPage />
      <ContactForm />
    </>
  );
}
