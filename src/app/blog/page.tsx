import Link from 'next/link';
import Image from 'next/image';
import image1 from "../../../public/nextjs.png"
import image2 from "../../../public/setup.png"
import image3 from "../../../public/hook.png"

const BlogPage = () => {
  // Simulate blog data
  const blogs = [
    { id: '1',title: 'What is NextJS and why is it used?',image:image1,date:'10 FEB 2023 | BY JOHN DOE' },
    { id: '2', title: 'How to Set Up a Next.js Project: A Step-by-Step Guide',image:image2,date:'10 FEB 2023 | BY JOHN DOE' },
    { id: '3', title: 'React Hooks Explained: useState, useEffect, and More',image:image3,date:'10 FEB 2023 | BY JOHN DOE'},
];

  return (
    <div className=" font-sans">
    <div className="max-w-6xl mx-auto p-4">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold  inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-lg-full">LATEST BLOGS</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-lg:max-w-3xl max-md:max-w-md mx-auto">
       {blogs.map((item)=>(
        <div key={item.id}>
            <Link href={`/blog/${item.id}`}>
            <div className=" cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
         <Image src={item.image} alt="Blog Post 1" className="w-full h-[400px]" >
         </Image>
         <div className="p-6 absolute bottom-0 left-0 right-0 bg-pink-200 opacity-90">
           <span className="text-sm block text-gray-800 mb-2">{item.date}</span>
           <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
         </div>
       </div>       
            </Link>
        </div>

       ))}
      </div>
    </div>
  </div>
  );
};

export default BlogPage;
