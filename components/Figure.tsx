import Image from './Image'

interface FigureProps {
  src: string
  alt: string
  caption?: string
  sourceHref?: string
  sourceTitle?: string
}

export default function Figure({ src, alt, caption, sourceHref, sourceTitle }: FigureProps) {
  return (
    <figure className="figure">
      <Image src={src} alt={alt} width={800} height={600} className="rounded-lg" />
      {caption && (
        <figcaption className="figcaption">
          <p>{caption}</p>
          {sourceHref && sourceTitle && (
            <p className="source">
              <a href={sourceHref}>{sourceTitle}</a>
            </p>
          )}
        </figcaption>
      )}
    </figure>
  )
}
