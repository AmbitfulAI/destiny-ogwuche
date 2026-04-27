import Image, { StaticImageData } from "next/image"
import { ReactNode } from "react"

interface PageHeaderProps {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  imageSrc?: string | StaticImageData
}

export function PageHeader({ eyebrow, title, description, imageSrc }: PageHeaderProps) {
  return (
    <div className="relative pt-48 pb-24 bg-background border-b border-border overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className={`grid gap-12 md:gap-20 items-center ${imageSrc ? 'lg:grid-cols-12' : 'max-w-4xl mx-auto'}`}>
          <div className={imageSrc ? 'lg:col-span-7' : ''}>
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              {eyebrow}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-medium text-foreground mb-8 leading-[1.1] tracking-tight">
              {title}
            </h1>
            {description && (
              <div className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                {description}
              </div>
            )}
          </div>

          {imageSrc && (
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-4/3 md:aspect-video lg:aspect-square">
                <Image
                  src={imageSrc}
                  alt="Page Concept"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
