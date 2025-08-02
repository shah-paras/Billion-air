import HeroSection from "@/components/home/HeroSection";
import FleetSection from "@/components/home/FleetSection";
import EmptyLegsSection from "@/components/home/EmptyLegsSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FleetSection />
      <EmptyLegsSection />
    </main>
  );
}
