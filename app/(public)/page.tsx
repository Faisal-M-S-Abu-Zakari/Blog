import Stats from "@/components/Stats";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import TrendingNewsletter from "@/components/TrendingNewsletter";
import Cta from "@/components/Cta";
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <Stats />

      {/* Featured Post */}
      <Featured />
      {/* Recent Posts */}

      {/* Trending and Newsletter */}
      <TrendingNewsletter />
      {/* CTA Section */}
      <Cta />
    </div>
  );
}
