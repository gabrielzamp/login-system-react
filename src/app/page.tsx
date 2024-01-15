"use client";

import { useState } from "react";
import AccessModal from "./components/AcessModal";

export default function Home() {
  return (
    <div className="flex items-center h-screen bg-gray-200 bg-cover bg-[url('https://conasems-ava-prod.s3.sa-east-1.amazonaws.com/portal/paginas/blue-white-leafy-background-vector-53876-136080-1-1704912731.png')] lg:bg-none">
      <AccessModal />
    </div>
  );
}
