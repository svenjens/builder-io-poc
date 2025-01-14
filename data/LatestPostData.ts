interface DataType {
   id: number;
   page: string;
   thumb: string;
   tag: string;
   title: string;
   date: string;
}

const latest_post_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      thumb: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/latest_post01.jpg-1CoO6Mn5UN0amxeBUWpJ2UbUhnar2c.jpeg",
      tag: "Breakfast",
      title: "The Potentially Dangerous Non-Accessibility Of Cookie",
      date: "25 August, 2024",
   },
   {
      id: 2,
      page: "home_1",
      thumb: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/latest_post02.jpg-OdZrXF0WFfKAVhONApbMXywC347Jl5.jpeg",
      tag: "Lunch",
      title: "One-Pan Baked Sausage And Lentils",
      date: "29 August, 2024",
   },
];

export default latest_post_data;

