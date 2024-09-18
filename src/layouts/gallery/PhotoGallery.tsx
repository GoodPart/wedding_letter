import "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import Images from "./Images";

export const PhotoGallery = () => {
  const smallItemStyles: React.CSSProperties = {
    cursor: "pointer",
    objectFit: "contain",
    width: "100px",
    height: "120px",
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
              original={item.originSource}
              thumbnail={item.thumbSource}
              width={item.width} // 390
              height={item.height}
            >
              {({ ref, open }) => (
                <img
                  style={smallItemStyles}
                  alt={item.alt}
                  src={item.originSource}
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
