import "src/styles/globals.css";
import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";

const isDeveloping = process.env.NODE_ENV === "development" && typeof window !== "undefined";

const isPreview = Boolean(process.env.NEXT_PUBLIC_IS_NEXT_PREVIEW);

if ((isDeveloping || isPreview) && typeof window !== "undefined") {
  (window as any).Twamm = {};

  Promise.all([import("../library"), import("../index")]).then((res) => {
    const [libraryProps, rendererProps] = res;

    (window as any).Twamm = libraryProps;
    (window as any).TwammRenderer = rendererProps;
  });
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
