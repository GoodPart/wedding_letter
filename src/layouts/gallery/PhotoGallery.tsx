import "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import Images from "./Images";

export const PhotoGallery = () => {
  const smallItemStyles: React.CSSProperties = {
    cursor: "pointer",
    objectFit: "contain",
    width: "100px",
    height: "150px",
  };
  return (
    <Gallery>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 0fr)",
          gridGap: 2,
        }}
      >
        {Images.map((item, index) => {
          return (
            <Item
              key={index}
              cropped
              original={item.source}
              thumbnail={item.source}
              width={1280}
              height={1920}
            >
              {({ ref, open }) => (
                <img
                  style={smallItemStyles}
                  alt={item.alt}
                  src={item.source}
                  ref={ref}
                  onClick={open}
                />
              )}
            </Item>
          );
        })}
      </div>
    </Gallery>
  );
};
