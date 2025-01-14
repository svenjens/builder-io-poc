import { StaticImageData } from "next/image";

// Note: You'll need to update these imports to match your project structure
import blogThumb_1 from "@/public/assets/img/blog/blog_post01.jpg";
import blogThumb_2 from "@/public/assets/img/blog/blog_post02.jpg";
import blogThumb_3 from "@/public/assets/img/blog/blog_post03.jpg";
import blogThumb_4 from "@/public/assets/img/blog/blog_post04.jpg";
import blogThumb_5 from "@/public/assets/img/blog/blog_post05.jpg";
import blogThumb_6 from "@/public/assets/img/blog/blog_post06.jpg";

import blog2Thumb_1 from "@/public/assets/img/blog/author_post01.jpg";
import blog2Thumb_2 from "@/public/assets/img/blog/author_post02.jpg";
import blog2Thumb_3 from "@/public/assets/img/blog/author_post03.jpg";
import blog2Thumb_4 from "@/public/assets/img/blog/author_post04.jpg";

import authorThumb_1 from "@/public/assets/img/blog/author_post01.jpg";
import authorThumb_2 from "@/public/assets/img/blog/author_post02.jpg";
import authorThumb_3 from "@/public/assets/img/blog/author_post03.jpg";
import authorThumb_4 from "@/public/assets/img/blog/author_post04.jpg";
import authorThumb_5 from "@/public/assets/img/blog/author_post05.jpg";
import authorThumb_6 from "@/public/assets/img/blog/author_post06.jpg";

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

const inner_blog_data: DataType[] = [
   // ... (rest of the data as provided)
];

export default inner_blog_data;

