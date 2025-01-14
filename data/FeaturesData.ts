import { StaticImageData } from "next/image";

// Note: Update these imports to match your project structure
import featureThumb_1 from "@/public/assets/img/blog/featured_post01.jpg";
// ... (other imports)

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   tag: string;
   title: string;
   date: string;
}

const feature_data: DataType[] = [
   // ... (data as provided)
];

export default feature_data;

