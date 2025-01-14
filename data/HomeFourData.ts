import { StaticImageData } from "next/image";

// Note: Update these imports to match your project structure
import editThumb_1 from "@/public/assets/img/blog/tr_editor_img01.jpg";
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

const home_4_data: DataType[] = [
   // ... (data as provided)
];

export default home_4_data;

