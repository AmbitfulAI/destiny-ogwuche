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
        eyebrow="Media"
        title="Visual Archive"
        description="A comprehensive collection of moments, technical execution, and global innovation experiences."
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {photoCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all rounded-full border ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                    : "bg-secondary/50 text-muted-foreground border-transparent hover:border-primary/20 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredPhotos.map((photo, idx) => (
              <div 
                key={photo.id}
                className="relative break-inside-avoid group cursor-pointer overflow-hidden rounded-xl bg-secondary transition-all hover:shadow-2xl hover:shadow-primary/10 ring-1 ring-border border-2 border-transparent hover:border-primary/20"
                onClick={() => openLightbox(idx)}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={800}
                    height={1000}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Overlay Info */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-1">
                      {photo.category}
                    </span>
                    <h3 className="text-white font-serif text-lg leading-tight">
                      {photo.alt}
                    </h3>
                    <div className="mt-3 flex items-center gap-2">
                       <Maximize2 className="w-4 h-4 text-white/60" />
                       <span className="text-white/60 text-[10px] font-bold tracking-widest uppercase">Expand</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="text-center py-20 bg-secondary/20 rounded-3xl border-2 border-dashed border-border">
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
                className="absolute left-0 p-6 text-muted-foreground hover:text-primary transition-all hover:scale-110 z-10 bg-background/50 backdrop-blur-md rounded-full shadow-lg"
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
                className="absolute right-0 p-6 text-muted-foreground hover:text-primary transition-all hover:scale-110 z-10 bg-background/50 backdrop-blur-md rounded-full shadow-lg"
                aria-label="Next"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="py-10 text-center animate-in slide-in-from-bottom-4 duration-500">
              <span className="text-xs font-black text-primary uppercase tracking-[0.4em] mb-3 block">
                {filteredPhotos[lightboxIndex].category}
              </span>
              <h3 className="font-serif text-3xl md:text-5xl text-foreground mb-2">
                {filteredPhotos[lightboxIndex].alt}
              </h3>
              <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase">
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
