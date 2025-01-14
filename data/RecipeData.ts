import { StaticImageData } from "next/image";

// Note: You'll need to update these imports to match your project structure
import racipeThumb_1 from "@/public/assets/img/blog/recipe_img01.jpg";
import racipeThumb_2 from "@/public/assets/img/blog/recipe_img02.jpg";
import racipeThumb_3 from "@/public/assets/img/blog/recipe_img03.jpg";
import racipeThumb_4 from "@/public/assets/img/blog/recipe_img04.jpg";

import healthyThumb_1 from "@/public/assets/img/blog/hr_post01.jpg";
import healthyThumb_2 from "@/public/assets/img/blog/hr_post02.jpg";
import healthyThumb_3 from "@/public/assets/img/blog/hr_post03.jpg";
import healthyThumb_4 from "@/public/assets/img/blog/hr_post04.jpg";
import healthyThumb_5 from "@/public/assets/img/blog/hr_post05.jpg";
import healthyThumb_6 from "@/public/assets/img/blog/hr_post06.jpg";

import popularThumb_1 from "@/public/assets/img/blog/popular_post01.jpg";
import popularThumb_2 from "@/public/assets/img/blog/popular_post02.jpg";
import popularThumb_3 from "@/public/assets/img/blog/popular_post03.jpg";
import popularThumb_4 from "@/public/assets/img/blog/popular_post04.jpg";
import popularThumb_5 from "@/public/assets/img/blog/popular_post05.jpg";

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   tag: string;
   title: string;
   date: string;
}

const recipe_data: DataType[] = [
   // ... (rest of the data as provided)
];

export default recipe_data;

