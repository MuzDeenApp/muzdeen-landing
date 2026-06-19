import { Audiences } from "@/components/sections/audiences";
import { DownloadApp } from "@/components/sections/download-app";
import { FAQ } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { ForOrganizations } from "@/components/sections/for-organizations";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { Ramadan } from "@/components/sections/ramadan";
import { Testimonials } from "@/components/sections/testimonials";
import { Trust } from "@/components/sections/trust";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Audiences />
      <Trust />
      <Pricing />
      <ForOrganizations />
      <Ramadan />
      <Testimonials />
      <DownloadApp />
      <FAQ />
      <FinalCta />
      <Footer />
    </main>
  );
}
