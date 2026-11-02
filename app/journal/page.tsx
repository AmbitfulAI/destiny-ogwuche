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
        eyebrow="Journal"
        title="Moments and milestones"
        description="Talks, ventures, research and the people along the way, in pictures."
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Category Filter - Refined Style */}
            <div className="mb-20 flex flex-wrap gap-x-8 gap-y-2 border-b border-border">
              {galleryCategories.map((cat) => (
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

            {/* Journal Entries - Linear Staggered Layout */}
            <div className="space-y-24 md:space-y-32">
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
                      className="relative aspect-4/3 cursor-zoom-in overflow-hidden bg-muted"
                      onClick={() => openLightbox(idx)}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 560px, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Narrative Part */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <p className="text-[0.95rem] text-accent">{image.date}</p>
                    
                    <h2 className="font-serif text-[2.15rem] leading-tight md:text-[2.6rem]">
                      {image.alt}
                    </h2>

                    <p className="text-lg leading-relaxed text-muted-foreground">{image.description}</p>

                    <div className="pt-4 flex items-center gap-6">
                      <span className="text-sm text-muted-foreground">
                        {image.category}
                      </span>
                      <button 
                         onClick={() => openLightbox(idx)}
                         className="text-link text-[0.95rem] text-foreground"
                      >
                        View larger
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
                className="absolute left-0 p-4 text-muted-foreground hover:text-foreground transition-colors z-10 bg-background/50 rounded-full"
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
                      sizes="100vw"
                      className="object-contain"
                      priority
                    />
                </div>
              </div>

              <button
                onClick={goToNextImage}
                className="absolute right-0 p-4 text-muted-foreground hover:text-foreground transition-colors z-10 bg-background/50 rounded-full"
                aria-label="Next"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>

            <div className="py-8 text-center space-y-2">
              <h3 className="font-serif text-[1.75rem] text-foreground">{filteredImages[lightboxIndex].alt}</h3>
              <p className="text-muted-foreground">{filteredImages[lightboxIndex].date}, {filteredImages[lightboxIndex].category}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
