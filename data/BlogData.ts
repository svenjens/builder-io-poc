import { StaticImageData } from "next/image";

// Note: Update these imports to match your project structure
import blogThumb_1 from "@/public/assets/img/blog/weekly_post01.jpg";
// ... (other imports)

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   tag: string;
   title: string;
   date: string;
   time: string;
   desc: string;
}

const blog_data: DataType[] = [
   // ... (data as provided)
];

export default blog_data;

