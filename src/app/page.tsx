import Image from "next/image";
import BlogPage from "./blog/page";
import Carousel from "@/components/Carousel";
export default function Home() {
  return (
  <>
  <Carousel/>
  <BlogPage/>
  </>
  );
}
