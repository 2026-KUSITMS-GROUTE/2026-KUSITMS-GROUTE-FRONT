import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Groute",
  description: "KUSITMS 33rd 밋업 프로젝트 Groute",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="bg-gray-300">{children}</body>
    </html>
  );
}
