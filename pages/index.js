import Head from "next/head";
import Sections from "./sections";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>ABCANDY</title>
        <meta name="description" content="ABCANDY" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Sections />
      </main>

      <footer></footer>
    </div>
  );
}
