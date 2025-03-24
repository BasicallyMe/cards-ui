"use client";

import { Copy, Check } from "lucide-react";
import { useState, useRef } from "react";

export default function CopyButton({ code }: { code: string }) {
  const [disableCopyButton, setDisableCopyButton] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function handleCopy() {
    if (disableCopyButton) return;

    timeoutRef.current = null;
    setDisableCopyButton(() => true);
    navigator.clipboard
      .writeText(code)
      .then(() => setIsCopied(() => true))
      .catch((err) => console.log("clipboard not supported in your browser"));
    timeoutRef.current = setTimeout(() => {
      setIsCopied(() => false);
      setDisableCopyButton(() => false);
      timeoutRef.current = null;
    }, 1000);
  }

  return (
    <button
      onClick={handleCopy}
      disabled={disableCopyButton}
      className="border border-gray-300 disabled:cursor-default rounded-full w-8 h-8 cursor-pointer flex items-center justify-center"
    >
      {isCopied ? (
        <Check size={15} strokeWidth={2} className="text-green-500" />
      ) : (
        <Copy size={13} strokeWidth={2} />
      )}
    </button>
  );
}
