"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { photoAssets, photoCategories } from "@/lib/data/photos"

export default function PhotosPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filteredPhotos =
    selectedCategory === "All"
      ? photoAssets
      : photoAssets.filter((photo) => photo.category === selectedCategory)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const goToPrevImage = () => {
    setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length)
  }

  const goToNextImage = () => {
    setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PageHeader
        eyebrow="Photos"
        title="Photos"
        description="Labs, stages, classrooms and the people I have worked with."
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Category Filter */}
          <div className="mb-14 flex flex-wrap gap-x-8 gap-y-2 border-b border-border">
            {photoCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                aria-pressed={selectedCategory === cat}
                className={`border-b-2 px-1 py-2 text-[0.95rem] transition-colors ${selectedCategory === cat ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 gap-8 space-y-10 sm:columns-2 lg:columns-3">
            {filteredPhotos.map((photo, idx) => (
              <button
                type="button"
                key={photo.id}
                className="group block w-full break-inside-avoid text-left"
                onClick={() => openLightbox(idx)}
              >
                <span className="block overflow-hidden bg-secondary">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={800}
                    height={1000}
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="h-auto w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                  />
                </span>
                <span className="mt-3 block font-serif text-lg leading-snug text-foreground">{photo.alt}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{photo.category}</span>
              </button>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="text-center py-20 bg-secondary/20 border border-dashed border-border">
              <p className="text-muted-foreground font-serif text-xl italic">No photos found in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-100 bg-background/98 backdrop-blur-2xl flex items-center justify-center p-4 lg:p-12 animate-in fade-in duration-300">
          <div className="relative w-full max-w-7xl flex flex-col h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-0 right-0 p-4 text-muted-foreground hover:text-primary transition-all z-110"
              aria-label="Close"
            >
              <X className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            {/* Main Content Area */}
            <div className="flex-1 relative flex items-center justify-center">
              <button
                onClick={goToPrevImage}
                className="absolute left-0 p-6 text-muted-foreground hover:text-foreground transition-colors z-10 bg-background/50 backdrop-blur-md rounded-full shadow-lg"
                aria-label="Previous"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <div className="relative w-full h-[70vh] lg:h-full p-4 lg:p-12 animate-in zoom-in duration-500">
                <div className="relative w-full h-full">
                  <Image
                    src={filteredPhotos[lightboxIndex].src}
                    alt={filteredPhotos[lightboxIndex].alt}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <button
                onClick={goToNextImage}
                className="absolute right-0 p-6 text-muted-foreground hover:text-foreground transition-colors z-10 bg-background/50 backdrop-blur-md rounded-full shadow-lg"
                aria-label="Next"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="py-10 text-center animate-in slide-in-from-bottom-4 duration-500">
              <span className="mb-2 block text-sm text-accent">
                {filteredPhotos[lightboxIndex].category}
              </span>
              <h3 className="font-serif text-3xl md:text-5xl text-foreground mb-2">
                {filteredPhotos[lightboxIndex].alt}
              </h3>
              <p className="text-sm text-muted-foreground">
                {filteredPhotos[lightboxIndex].date}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
