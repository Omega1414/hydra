import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import How from "@/components/How";
import Intro from "@/components/Intro";
import Tech from "@/components/Tech";
import Why from "@/components/Why";

export default function Home() {
  return (
    <div className="relative flex flex-col w-full">
      <Header />
      <Hero />
      <Intro />
      <Why />
      <Tech />
      <How />
      <Form />
      <Footer />
    </div>
  );
}
