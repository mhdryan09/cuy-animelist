'use client';
import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

const notFound = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex items-center justify-center">
      <div className="flex items-center justify-center gap-4 flex-col">
        <FileSearch size={64} className="text-color-accent" />
        <h3 className="text-5xl font-bold text-color-accent">Not Found</h3>
        <Link href='/' className="text-color-primary hover:text-color-accent transition-all">Kembali</Link>
      </div>
    </div>
  )
}

export default notFound;
