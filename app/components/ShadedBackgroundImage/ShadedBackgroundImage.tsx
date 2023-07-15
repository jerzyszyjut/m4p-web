import Image, { StaticImageData } from 'next/image';
import styles from './ShadedBackgroundImage.module.scss';

type ShadedBackgroundImageProps = {
  image: StaticImageData;
  opacity?: number;
  height?: number;
  width?: number;
}

const ShadedBackgroundImage = ({ image, opacity, height, width }: ShadedBackgroundImageProps) => {
  opacity = opacity || 0.8;
  return (
    <>
      <div className={styles.shade} style={
        {
          backgroundColor: `rgba(0, 0, 0, ${opacity})`
        }
      }></div>
      <Image
        src={image}
        alt="Background image"
        width={width ?? 1920}
        height={height ?? 1080}
        className={styles.backgroundImage}
      />
    </>
  );
};

export default ShadedBackgroundImage;
