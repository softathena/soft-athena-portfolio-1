import { StaticImageData } from "next/image";
import brand01 from "../../public/assets/imgs/brand/01/brand-01.png";
import brand02 from "../../public/assets/imgs/brand/01/brand-02.png";
import brand03 from "../../public/assets/imgs/brand/01/brand-03.png";
import brand04 from "../../public/assets/imgs/brand/01/brand-04.png";
import brand05 from "../../public/assets/imgs/brand/02/brand-01.png";
import brand06 from "../../public/assets/imgs/brand/02/brand-02.png";
import brand07 from "../../public/assets/imgs/brand/02/brand-03.png";
import brand08 from "../../public/assets/imgs/brand/02/brand-04.png";
import brand09 from "../../public/assets/imgs/brand/02/brand-05.png";
import brand10 from "../../public/assets/imgs/brand/02/brand-06.png";

type TBrand = {
  id: number;
  image: StaticImageData;
};

const brand_data: TBrand[] = [
  { id: 1, image: brand01 },
  { id: 2, image: brand02 },
  { id: 3, image: brand03 },
  { id: 4, image: brand04 },
  { id: 5, image: brand05 },
  { id: 6, image: brand06 },
  { id: 7, image: brand07 },
  { id: 8, image: brand08 },
  { id: 9, image: brand09 },
  { id: 10, image: brand10 },
  { id: 11, image: brand01 },
  { id: 12, image: brand02 },
  { id: 13, image: brand03 },
  { id: 14, image: brand04 },
  { id: 15, image: brand05 },
  { id: 16, image: brand06 },
  { id: 17, image: brand07 },
  { id: 18, image: brand08 },
  { id: 19, image: brand09 },
  { id: 20, image: brand10 },
];

export default brand_data;
