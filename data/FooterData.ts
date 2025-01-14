interface DataType {
   id: number;
   title: string;
   class_name: string;
   footer_link: {
      link: string;
      title: string;
   }[];
}

const footer_data: DataType[] = [
   // ... (data as provided)
];

export default footer_data;

