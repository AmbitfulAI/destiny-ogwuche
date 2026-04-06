'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const galleryImages = [
  // Speaking & Education (3)
  {
    id: 'speak-1',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/destiny-3dprint-flyer-msgsboAM7k8h5R9oI3lEjqBES1va09.jpeg',
    alt: '3D Printing Masterclass',
    category: 'Speaking',
  },
  {
    id: 'speak-2',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/destiny-ibuild-flyer-ww5H3wGa1QMw9PyjyJ9Ccy7mWMIaqx.jpeg',
    alt: 'iBuild Young African Initiative',
    category: 'Speaking',
  },
  {
    id: 'speak-3',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/destiny-ggu-class-gePGVyfxAWc3DTHxqARTXf683qVmDn.jpeg',
    alt: 'Teaching at Golden Gate University',
    category: 'Speaking',
  },
  // Ventures & Experience (5)
  {
    id: 'venture-1',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/destiny-nortek-vessel-lp8EnhMnaNdx41YcrdE0pZYbOvP2o2.jpeg',
    alt: 'Nortek Vessel Experience',
    category: 'Ventures',
  },
  {
    id: 'venture-2',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/destiny-nortek-team-7l5IaYqYFRGAmj6jn7rpZmKMY52izN.jpeg',
    alt: 'Nortek Team Collaboration',
    category: 'Ventures',
  },
  {
    id: 'venture-3',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/destiny-asml-TWMFuD2M31eDZVqVw6jzyPgQXabWTn.jpeg',
    alt: 'ASML Technical Work',
    category: 'Ventures',
  },
  {
    id: 'venture-4',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/destiny-africa-map-PdXcY2zocdfFpWgndtxFrq28zlkc4H.jpeg',
    alt: 'Africa Innovation',
    category: 'Ventures',
  },
  {
    id: 'venture-5',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/destiny-flight-sim-H4nkyMUsMOEzZLkHDDKEsBIRAm3XGk.jpeg',
    alt: 'Flight Simulator Experience',
    category: 'Ventures',
  },
  // Google Experience (3)
  {
    id: 'google-1',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/destiny-google-sgjrJ3k8b1RsDseWhb5U5chCWAcU5y.jpeg',
    alt: 'Google Campus Visit',
    category: 'Experience',
  },
  {
    id: 'google-2',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/destiny-google-inside-zDqydAn1IHeH0IYbhzu0zYrynLSBu1.jpeg',
    alt: 'Google Store Inside',
    category: 'Experience',
  },
  {
    id: 'google-3',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/destiny-google-bike-MI3rkC64ydUo9L6irj6F76OmxBMFyY.jpeg',
    alt: 'Google Bikes',
    category: 'Experience',
  },
  // Awards & Recognition (2)
  {
    id: 'award-1',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/destiny-ggu-cert-iRTbKX2r39pyDvcT7XZfW1DMaB5SL7.jpeg',
    alt: 'Golden Gate University Certificate',
    category: 'Awards',
  },
  {
    id: 'award-2',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/destiny-ggu-building-gAwzcN7PELbM6kVP64tt031iWv4l2M.jpeg',
    alt: 'Golden Gate University Building',
    category: 'Awards',
  },
  // Education (3)
  {
    id: 'edu-1',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/destiny-graduation-group-U0Ief3QZm0ncGZWiI6L15vJTwg6GPC.jpeg',
    alt: 'Graduation Ceremony Group',
    category: 'Education',
  },
  {
    id: 'edu-2',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/destiny-graduation-2dA1sgNlG2uKjwc0Ol6gUFsLNB3Aoe.jpeg',
    alt: 'Graduation Ceremony',
    category: 'Education',
  },
  {
    id: 'edu-3',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/destiny-dss-HQglyB8mraB2DMssIAFh1veYRUOE0j.jpeg',
    alt: 'Professional Portrait at University',
    category: 'Education',
  },
]

const categories = ['All', 'Speaking', 'Ventures', 'Experience', 'Awards', 'Education']
const ITEMS_PER_PAGE = 8

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory)

  const totalPages = Math.ceil(filteredImages.length / ITEMS_PER_PAGE)
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE
  const displayedImages = filteredImages.slice(startIdx, startIdx + ITEMS_PER_PAGE)

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

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

  const getCategoryCount = (category: string) => {
    if (category === 'All') return galleryImages.length
    return galleryImages.filter((img) => img.category === category).length
  }

  return (
    <section id="gallery" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              Gallery
            </p>
            <h2 className="font-serif text-5xl md:text-6xl font-medium text-foreground mb-6">
              Moments & Milestones
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A curated collection of speaking engagements, venture experiences, educational milestones, and recognition moments.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-6 py-3 font-medium transition-all text-sm ${
                  selectedCategory === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border text-foreground hover:border-primary hover:text-primary'
                }`}
              >
                {cat} <span className="text-xs opacity-75">({getCategoryCount(cat)})</span>
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {displayedImages.map((image, idx) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden bg-muted aspect-square"
                onClick={() => openLightbox(startIdx + idx)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div>
                    <p className="text-white font-medium text-sm">{image.alt}</p>
                    <p className="text-white/70 text-xs">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-col items-center gap-4">
            {/* Image Counter */}
            <p className="text-sm text-muted-foreground">
              Showing {startIdx + 1}–{Math.min(startIdx + ITEMS_PER_PAGE, filteredImages.length)} of{' '}
              {filteredImages.length} images
            </p>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className="p-2 border border-border hover:border-primary hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 flex items-center justify-center font-medium transition-all ${
                        currentPage === page
                          ? 'bg-primary text-primary-foreground'
                          : 'border border-border hover:border-primary text-foreground'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="p-2 border border-border hover:border-primary hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Next page"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors p-2"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image */}
            <div className="relative w-full aspect-auto bg-black">
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                width={1000}
                height={800}
                className="w-full h-auto"
              />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6 text-white">
              <button
                onClick={goToPrevImage}
                className="p-2 hover:bg-white/10 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="text-center flex-1">
                <p className="font-medium">{filteredImages[lightboxIndex].alt}</p>
                <p className="text-sm text-white/70">
                  {lightboxIndex + 1} / {filteredImages.length}
                </p>
              </div>

              <button
                onClick={goToNextImage}
                className="p-2 hover:bg-white/10 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
