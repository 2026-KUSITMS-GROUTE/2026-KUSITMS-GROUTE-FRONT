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
      <body>{children}</body>
    </html>
  );
}
