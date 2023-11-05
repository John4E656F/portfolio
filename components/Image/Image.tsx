import { default as NextImage, type ImageProps as NextImageProps } from 'next/image';

// interface ImageProps extends NextImageProps {
//   className?: string;
//   width?: number;
//   height?: number;
// }

export function Image({ src, alt, width = 0, height = 0, className }: NextImageProps) {
  return <NextImage src={src} alt={alt} width={width} height={height} className={className} />;
}
