import { ThemeToggle } from "@/components/theme-toggle";
import { HeroSection } from "@/components/hero-section";
import { AboutMeCard } from "@/components/about-me-card";
import { ProjectsSection } from "@/components/projects-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-12 max-w-4xl">
        <header className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50">
          <ThemeToggle />
        </header>

        <main className="space-y-16 sm:space-y-24 pb-16 sm:pb-24">
          <HeroSection />
          <AboutMeCard />
          <ProjectsSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}
