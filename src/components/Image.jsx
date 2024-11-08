import { useEffect, useState } from "react";

const ImageComponent = ({ src, width, height, className }) => {
  const [currentSrc, setCurrentSrc] = useState(
    `https://placehold.co/${width}X${height}?text=Loading`,
  );

  useEffect(() => {
    const img = new Image();
    if (src) {
      img.src = src;
      img.onload = () => {
        setCurrentSrc(src);
      };
    }

    setCurrentSrc(`https://placehold.co/${width}X${height}?text=NoImage`);

    return () => {
      img.onload = null;
    };
  }, [src, width, height]);

  return (
    <div>
      <img
        className={currentSrc === src || !src ? className : `${className} blur-md`}
        width={width}
        height={height}
        src={currentSrc}
      />
    </div>
  );
};
export default ImageComponent;
