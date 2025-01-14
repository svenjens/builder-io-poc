import { StaticImageData } from "next/image";

// Note: Update these imports to match your project structure
import categoryThumb_1 from "@/public/assets/img/images/categories_img01.png"
// ... (other imports)

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   tag: string;
}

const category_data: DataType[] = [
   // ... (data as provided)
];

export default category_data;

