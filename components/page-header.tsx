import Image, { StaticImageData } from "next/image"
import { ReactNode } from "react"
import { container } from "./site/action-link"

interface PageHeaderProps {
  // Names the section the page belongs to, shown quietly above the title.
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  imageSrc?: string | StaticImageData
  imageAlt?: string
}

export function PageHeader({ eyebrow, title, description, imageSrc, imageAlt = "" }: PageHeaderProps) {
  return (
    <header className="border-b border-border pt-36 pb-16 md:pt-44 md:pb-20">
      <div className={container}>
        <div className={`grid items-end gap-12 ${imageSrc ? "lg:grid-cols-12" : ""}`}>
          <div className={imageSrc ? "lg:col-span-7" : "max-w-3xl"}>
            <p className="mb-5 text-[0.95rem] text-accent">{eyebrow}</p>
            <h1 className="font-serif text-[2.6rem] leading-[1.05] text-foreground md:text-6xl lg:text-[4.25rem]">{title}</h1>
            {description && <div className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">{description}</div>}
          </div>
          {imageSrc && (
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary">
                <Image src={imageSrc} alt={imageAlt} fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
