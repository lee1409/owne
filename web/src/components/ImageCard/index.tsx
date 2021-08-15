import { styled } from "@material-ui/core/styles"

const ImageContainer = styled("img")({
  width: "200px",
  borderRadius: "12px",
})

type ImageCardProps = {
  src: string
  alt: string
}

const ImageCard = (props: ImageCardProps) => {
  const { src, alt } = props
  return <ImageContainer src={src} alt={alt} />
}

export default ImageCard
