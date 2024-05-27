import "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import mainBg from "./assets/images/main.jpg";
import subBg1 from "./assets/images/sub1.jpg";

export const GalleryWrap = () => {
  return (
    <Gallery>
      <Item
        original="https://placehold.co/300x400"
        thumbnail="https://placehold.co/300x400"
        width="1024"
        height="768"
      >
        {({ ref, open }) => (
          <img ref={ref} onClick={open} src="https://placehold.co/300x400" />
        )}
      </Item>
      <Item
        original="https://placehold.co/300x401"
        thumbnail="https://placehold.co/300x401"
        width="1024"
        height="768"
      >
        {({ ref, open }) => (
          <img ref={ref} onClick={open} src="https://placehold.co/300x401" />
        )}
      </Item>
    </Gallery>
  );
};
