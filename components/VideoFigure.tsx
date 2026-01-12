import Image from './Image'

interface VideoFigureProps {
  src: string
  alt: string
  caption?: string
  sourceHref?: string
  sourceTitle?: string
  width?: number
  height?: number
}

export default function VideoFigure({
  src,
  alt,
  caption,
  sourceHref,
  sourceTitle,
  width = 375,
  height = 667,
}: VideoFigureProps) {
  const basePath = process.env.BASE_PATH || ''
  const videoSrc = `${basePath}${src}`
  // Extract image path from video path (assuming same name with different extension)
  const imageSrc = src.replace(/\.mp4$/, '.png')

  return (
    <figure className="figure">
      <video width={width} height={height} controls className="rounded-lg">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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
