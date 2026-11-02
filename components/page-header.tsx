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
    <header className="relative overflow-hidden border-b border-hairline pt-40 pb-20 md:pt-52 md:pb-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,#1C1F24_0%,#0B0D10_60%)]"
        aria-hidden="true"
      />
      <div className={`${container} relative`}>
        <div className={`grid items-end gap-14 ${imageSrc ? "lg:grid-cols-12" : ""}`}>
          <div className={imageSrc ? "lg:col-span-7" : "max-w-4xl"}>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-7 font-serif text-[3rem] font-medium leading-[1] text-ivory md:text-[4.5rem] lg:text-[5.25rem]">{title}</h1>
            {description && <div className="mt-8 max-w-2xl text-[1.125rem] leading-[1.75] text-mist md:text-[1.2rem]">{description}</div>}
          </div>
          {imageSrc && (
            <div className="lg:col-span-5">
              <div className="frame-offset">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-panel">
                  <Image src={imageSrc} alt={imageAlt} fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
