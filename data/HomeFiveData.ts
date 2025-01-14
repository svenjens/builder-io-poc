import { StaticImageData } from "next/image";

// Note: Update these imports to match your project structure
import recentThumb_1 from "@/public/assets/img/blog/cr_recent_post01.jpg"
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
   class_name?: string;
}

const home_5_data: DataType[] = [
   // ... (data as provided)
];

export default home_5_data;

