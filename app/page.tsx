import { Audiences } from "@/components/sections/audiences";
import { DownloadApp } from "@/components/sections/download-app";
import { FAQ } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { ProductPreview } from "@/components/sections/product-preview";
import { Roadmap } from "@/components/sections/roadmap";
import { Trust } from "@/components/sections/trust";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Audiences />
      <Features />
      <DownloadApp />
      <Trust />
      <ProductPreview />
      <Roadmap />
      <FAQ />
      <FinalCta />
      <Footer />
    </main>
  );
}
