"use client";

import React, { useRef, useState } from "react";
import { UploadCloud, Image as ImageIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ImageUploader({ onImageSelect, loading }) {
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageSelect(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearSelection = (e) => {
    e.stopPropagation();
    setPreview(null);
    onImageSelect(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div
      onClick={() => !loading && fileInputRef.current?.click()}
      className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
        preview ? "border-orange-500 bg-orange-50" : "border-stone-300 hover:border-orange-400 hover:bg-stone-50"
      } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
        disabled={loading}
      />

      {preview ? (
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-[200px] aspect-video mb-4 rounded-lg overflow-hidden border border-stone-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={preview} alt="Preview" className="w-full h-full object-cover" />
            {!loading && (
              <button
                onClick={clearSelection}
                className="absolute top-2 right-2 p-1 bg-white/80 rounded-full hover:bg-white text-stone-700 hover:text-red-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <p className="text-sm font-medium text-stone-700">Image selected</p>
          <p className="text-xs text-stone-500 mt-1">Click to change</p>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4 text-orange-600">
            <UploadCloud className="w-6 h-6" />
          </div>
          <p className="text-base font-medium text-stone-800 mb-2">
            Click to upload an image
          </p>
          <p className="text-sm text-stone-500">
            PNG, JPG, JPEG up to 5MB
          </p>
        </div>
      )}
    </div>
  );
}
