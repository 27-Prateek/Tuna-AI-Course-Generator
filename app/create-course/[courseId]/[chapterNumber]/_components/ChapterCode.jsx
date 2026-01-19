"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function ChapterCode({ code }) {
  const [copied, setCopied] = useState(false);

  if (!code) return null;

  // Remove <precode> tags safely
  const cleanedCode = code
    .replace("<precode>", "")
    .replace("</precode>", "")
    .trim();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(cleanedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg mb-10 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-800">
        <h2 className="text-sm font-semibold text-gray-200">
          Code Example
        </h2>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs text-gray-300 hover:text-white transition"
        >
          {copied ? (
            <>
              <Check size={14} /> Copied
            </>
          ) : (
            <>
              <Copy size={14} /> Copy
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <pre className="p-5 overflow-x-auto text-sm text-green-300 leading-relaxed">
        <code>{cleanedCode}</code>
      </pre>
    </div>
  );
}
