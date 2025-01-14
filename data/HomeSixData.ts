import { StaticImageData } from "next/image";

// Note: Update these imports to match your project structure
//import todayPostThumb_1 from "@/public/assets/img/blog/today_post01.jpg";
// ... (other imports)

interface DataType {
   id: number;
   page: string;
   thumb: string;
   tag: string;
   title: string;
   date: string;
   time?: string;
   video?: boolean;
}

const home_6_data: DataType[] = [
{
   id: 1,
   page: "today_post",
   thumb: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/today_post01.jpg-eO877LOMJ9MIifXofemoJoBHpCRIY5.jpeg",
   tag: "SPORTS",
   title: "Designing Better Error Messages UX",
   date: "27 AUGUST, 2024",
},
{
   id: 2,
   page: "today_post",
   thumb: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/today_post02.jpg-hzLcvSCNaehtCPnuX0PJ9ba717cC0j.jpeg",
   tag: "TECH",
   title: "Implementing A Reset Password Feature With Dynamic Routes",
   date: "27 AUGUST, 2024",
   video: true,
},
   // ... (rest of data)
];

export default home_6_data;

