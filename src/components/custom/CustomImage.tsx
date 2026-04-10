import { useState } from 'react';
import { cn } from '@/lib/utils';

interface CustomImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  containerClassName?: string;
}

function CustomImage({
  src,
  alt,
  className,
  containerClassName,
  ...props
}: CustomImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        containerClassName
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={cn(
          "w-full h-full object-cover transition-all duration-500 ease-out",
          isLoaded ? "opacity-100 blur-0" : "opacity-0 blur-sm scale-105",
          className
        )}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
}

export default CustomImage;