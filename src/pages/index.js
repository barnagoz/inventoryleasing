"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import MyDocument from "@/pdfs/test";
import dynamic from "next/dynamic";
const PDFDownloadLink = dynamic(
    () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
    {
        ssr: false,
        loading: () => <p>Loading...</p>,
    }
);

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>Next.js + React-PDF</h1>
        <PDFDownloadLink document={<MyDocument/>} fileName={"test.pdf"}>
            {({ blob, url, loading, error }) =>
                loading ? 'Loading document...' : 'Download now!'
            }
        </PDFDownloadLink>
    </div>
  );
}
