import Head from "next/head";
import { Button, Input } from "@packages/ui/build";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Button>Button</Button>
        <Input placeholder="Input" />
      </main>
    </>
  );
}
