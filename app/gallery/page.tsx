"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X, Calendar, MapPin, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { galleryImages, galleryCategories } from "@/lib/data/gallery"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrevImage = () => {
    setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length)
  }

  const goToNextImage = () => {
    setLightboxIndex((lightboxIndex + 1) % filteredImages.length)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PageHeader
        eyebrow="Digital Journal"
        title="Moments & Milestones"
        description="A chronological journey through speaking engagements, venture experiences, and personal growth."
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Category Filter - Refined Style */}
            <div className="flex flex-wrap justify-center gap-4 mb-20">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-8 py-3 text-sm font-medium transition-all rounded-full ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-primary border border-transparent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Journal Entries - Linear Staggered Layout */}
            <div className="space-y-32">
              {filteredImages.map((image, idx) => (
                <div 
                  key={image.id}
                  className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
                    idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image Part */}
                  <div className="w-full lg:w-1/2 group">
                    <div 
                      className="relative aspect-4/3 overflow-hidden bg-muted cursor-pointer ring-1 ring-border group-hover:ring-primary/30 transition-all duration-500 shadow-xl"
                      onClick={() => openLightbox(idx)}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Narrative Part */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                      <Calendar className="w-3.5 h-3.5" />
                      {image.date}
                    </div>
                    
                    <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground leading-tight text-balance">
                      {image.alt}
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed italic">
                      &ldquo;{image.description}&rdquo;
                    </p>

                    <div className="pt-4 flex items-center gap-6">
                      <span className="text-xs font-bold text-muted-foreground/60 uppercase tracking-widest border-l-2 border-primary/30 pl-3">
                        {image.category}
                      </span>
                      <button 
                         onClick={() => openLightbox(idx)}
                         className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                      >
                        View Full Image
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox - Refined Overlay */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-100 bg-background/95 backdrop-blur-xl flex items-center justify-center p-6 lg:p-12 animate-in fade-in duration-300">
          <div className="relative w-full max-w-6xl flex flex-col h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-0 right-0 p-3 text-muted-foreground hover:text-primary transition-colors z-110"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="flex-1 relative flex items-center justify-center">
              <button
                onClick={goToPrevImage}
                className="absolute left-0 p-4 text-muted-foreground hover:text-primary transition-all hover:scale-110 z-10 bg-background/50 rounded-full"
                aria-label="Previous"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <div className="relative w-full h-full p-4 lg:p-12 animate-in zoom-in duration-300">
                <div className="relative w-full h-full shadow-2xl">
                    <Image
                      src={filteredImages[lightboxIndex].src}
                      alt={filteredImages[lightboxIndex].alt}
                      fill
                      className="object-contain"
                      priority
                    />
                </div>
              </div>

              <button
                onClick={goToNextImage}
                className="absolute right-0 p-4 text-muted-foreground hover:text-primary transition-all hover:scale-110 z-10 bg-background/50 rounded-full"
                aria-label="Next"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>

            <div className="py-8 text-center space-y-2">
              <h3 className="font-serif text-2xl text-foreground">{filteredImages[lightboxIndex].alt}</h3>
              <p className="text-muted-foreground">{filteredImages[lightboxIndex].date} &bull; {filteredImages[lightboxIndex].category}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
