import { StaticImageData } from "next/image";

// Note: You'll need to update these imports to match your project structure
import spotlightThumb_1 from "@/public/assets/img/blog/spotlight_post01.jpg";
import spotlightThumb_2 from "@/public/assets/img/blog/spotlight_post02.jpg";
import spotlightThumb_3 from "@/public/assets/img/blog/spotlight_post03.jpg";
import spotlightThumb_4 from "@/public/assets/img/blog/spotlight_post04.jpg";

import popularThumb_1 from "@/public/assets/img/blog/g_popular_post01.jpg";
import popularThumb_2 from "@/public/assets/img/blog/g_popular_post02.jpg";
import popularThumb_3 from "@/public/assets/img/blog/g_popular_post03.jpg";
import popularThumb_4 from "@/public/assets/img/blog/g_popular_post04.jpg";
import popularThumb_5 from "@/public/assets/img/blog/g_popular_post05.jpg";

import recentThumb_1 from "@/public/assets/img/blog/rc_post01.jpg";
import recentThumb_2 from "@/public/assets/img/blog/rc_post02.jpg";
import recentThumb_3 from "@/public/assets/img/blog/rc_post03.jpg";
import recentThumb_4 from "@/public/assets/img/blog/rc_post04.jpg";
import recentThumb_5 from "@/public/assets/img/blog/rc_post05.jpg";

import videoThumb_1 from "@/public/assets/img/blog/video_post01.jpg";
import videoThumb_2 from "@/public/assets/img/blog/video_post02.jpg";
import videoThumb_3 from "@/public/assets/img/blog/video_post03.jpg";
import videoThumb_4 from "@/public/assets/img/blog/video_post04.jpg";

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   tag: string;
   title: string;
   date: string;
   time?: string;
   class_name?: string;
}

const spotlight_data: DataType[] = [
   // ... (rest of the data as provided)
];

export default spotlight_data;

