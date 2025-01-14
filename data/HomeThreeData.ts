import { StaticImageData } from "next/image";

// Note: Update these imports to match your project structure
import bannerThumb_1 from "@/public/assets/img/blog/t_banner_post01.jpg"
// ... (other imports)

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   tag: string;
   title: string;
   date: string;
   time?: string;
   desc?: string;
}

const home_3_data: DataType[] = [
   // ... (data as provided)
];

export default home_3_data;

