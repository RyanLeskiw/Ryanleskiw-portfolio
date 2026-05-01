"use client";

import Image from "next/image";
import { useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: number;
}

export default function ImageGallery({
  images,
  columns = 2,
}: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const gridCols =
    columns === 2
      ? "md:grid-cols-2"
      : columns === 3
      ? "md:grid-cols-3"
      : "md:grid-cols-2";

  return (
    <>
      {/* Gallery Grid */}
      <div className={`grid grid-cols-1 ${gridCols} gap-6 mb-12`}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg border border-gray-800"
            onClick={() => setSelectedIndex(index)}
          >
            <div className="relative aspect-video bg-gray-900">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            {image.caption && (
              <div className="p-3 bg-gray-900 border-t border-gray-800">
                <p className="text-sm text-gray-400">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 text-text-light hover:text-white transition-colors"
              aria-label="Close lightbox"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image Container */}
            <div className="relative flex-1 flex items-center justify-center overflow-hidden rounded-lg">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>

            {/* Caption */}
            {selectedImage.caption && (
              <div className="mt-4 text-center">
                <p className="text-text-light text-sm">
                  {selectedImage.caption}
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  {selectedIndex + 1} of {images.length}
                </p>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={handlePrev}
                className="px-4 py-2 bg-white text-black hover:bg-gray-200 transition-colors rounded"
                aria-label="Previous image"
              >
                ← Previous
              </button>
              <span className="text-text-light text-sm">
                {selectedIndex + 1} / {images.length}
              </span>
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-white text-black hover:bg-gray-200 transition-colors rounded"
                aria-label="Next image"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
