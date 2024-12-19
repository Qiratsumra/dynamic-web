'use client'
import { useParams } from 'next/navigation';
import Image from 'next/image';
import image1 from "../../../../public/nextjs.png"
import image2 from "../../../../public/setup.png"
import image3 from "../../../../public/hook.png"
import Link from 'next/link';

const BlogDetailPage = () => {
    // Get dynamic id from the URL
    const { id } = useParams();
  
    // Check if id is not available (handle loading state)
    if (!id) {
      return <p>Loading...</p>;
    }
  
    // Simulate blog data (in a real project, you might fetch data from an API)
    const blogData = {
      '1': { title: 'What is NextJS and why is it used?', content: `Next.js is a React framework designed for building fast, scalable, and SEO-friendly web applications. It combines several powerful features like server-side rendering (SSR), static site generation (SSG), and client-side rendering (CSR) to help developers create modern web apps. With file-based routing, Next.js automatically generates routes based on the file structure in the pages/ directory, simplifying routing setup. Additionally, it supports dynamic routes, such as /products/[id], allowing for more flexible and customizable web pages.

Next.js stands out for its ability to optimize performance and improve SEO. SSR and SSG enable faster page loads and make content more accessible to search engines, improving rankings. API routes in Next.js allow developers to handle backend logic directly within the application, eliminating the need for a separate backend server. The framework also includes built-in performance enhancements like code splitting, image optimization, and lazy loading, ensuring smooth user experiences even with complex applications.

In terms of full-stack development, Next.js enables you to handle both frontend (React components) and backend (API routes) within the same project, streamlining development. Its seamless integration with Vercel makes deployment quick and easy, further enhancing the developer experience. For projects like e-commerce sites, where SEO, performance, and dynamic content are crucial, Next.js is an ideal choice, offering all the tools needed to create robust, high-performing applications.`,image:image1 },

      '2': { title: 'How to Set Up a Next.js Project: A Step-by-Step Guide', content: `Setting up a Next.js project is a straightforward process. First, ensure that Node.js is installed on your computer, as it’s required to run Next.js. You can download Node.js from the official website, and it’s recommended to use the LTS (Long-Term Support) version. Once Node.js is installed, open a terminal or command prompt and navigate to the directory where you want to create your project. Then, run the command npx create-next-app@latest your-project-name to generate a new Next.js app, replacing your-project-name with the desired project name. If you prefer using Yarn, you can run yarn create next-app your-project-name instead.

After the setup is complete, navigate to your project folder using cd your-project-name, and start the development server with npm run dev (or yarn dev if you’re using Yarn). By default, your app will be available at http://localhost:3000 in the browser. Next, explore the project structure. The pages/ directory contains all your app’s pages, with index.js being the default homepage. The public/ directory is for static assets like images, while styles/ holds your CSS files. The next.config.js file allows you to configure your app’s settings.

From here, you can begin customizing your project. Edit pages/index.js to modify the home page or create new pages by adding files in the pages/ directory. You can also install additional dependencies, such as Tailwind CSS, to enhance your app's styling. For instance, to set up Tailwind, you can install the required packages and configure Tailwind in your CSS file. Once your app is ready, you can build it for production using npm run build and deploy it using platforms like Vercel, which integrates seamlessly with Next.js. Vercel allows you to deploy directly from your GitHub repository, making the process simple and fast.

In summary, setting up a Next.js project involves installing Node.js, creating a new app with create-next-app, starting the development server, exploring the project structure, customizing it as needed, and deploying it when you're ready. This process provides a solid foundation for building fast, scalable, and SEO-friendly web applications.`, image:image2},
      '3': { title: 'React Hooks Explained: useState, useEffect, and More', content: `React Hooks are functions that allow you to manage state and side effects in functional components, making it possible to perform operations like state management and lifecycle methods without needing class components. Two of the most commonly used hooks are useState and useEffect.

The useState hook enables you to add state to functional components. Before hooks, state could only be managed in class components, but useState allows you to create and update state in functional components. It is used by calling useState(initialValue), where initialValue is the value with which the state is initialized. The hook returns two things: the current state value and a function to update that state. For example, in a counter component, useState(0) would initialize a count state variable to 0, and the associated setter function would allow you to update the state when the user interacts with the UI.

The useEffect hook, on the other hand, is used to perform side effects in your functional components. Side effects include operations like data fetching, DOM manipulation, or subscribing to external data. The useEffect hook takes two arguments: a function that contains the side effect logic, and an optional dependency array that determines when the effect should run. If you provide an empty array ([]), the effect runs only once when the component is first mounted, similar to the behavior of componentDidMount in class components. If you include dependencies, the effect will run whenever any of those values change. For example, useEffect can be used to set up an interval for updating a timer, and the hook includes a cleanup function that runs when the component unmounts to prevent memory leaks.

Together, useState and useEffect allow you to add state and handle side effects in functional components, simplifying the code and improving readability. These hooks make it possible to manage complex logic like state updates and data fetching in a concise and efficient way, replacing the need for class components in most use cases.`,image:image3 },
    };
  
    // Access blog data using id (as string) safely
    const blogPost = blogData[id as keyof typeof blogData];
  
    // If the blog post does not exist, show a "not found" message
    if (!blogPost) {
      return <p>Blog post not found!</p>;
    }
  
    return (
        <div className="font-sans px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:max-w-6xl max-w-2xl mx-auto">
          <div className="text-left">
            <h2 className=" text-3xl font-bold mb-6">{blogPost.title}</h2>
            <p className="mb-4 text-sm">{blogPost.content}</p>
          </div>
          <div>
            <Image src={blogPost.image} alt={`${blogPost.title}`} className="rounded-lg object-contain w-full h-full" />
          </div>
          <button>
            <Link href={'/blog'}  className="px-5 py-2.5 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-blue-700 hover:bg-blue-800 active:bg-blue-700">Back to Blog</Link>
          </button>
        </div>
      </div>
    );
  };
  
  export default BlogDetailPage;


