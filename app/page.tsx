import HeroSection from '../components/HeroSection';
import EventDetails from '../components/EventDetails';
import ArtistGrid from '../components/ArtistGrid';
import BookDetails from '../components/BookDetails';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <EventDetails />
      <BookDetails />
      <ArtistGrid />
    </main>
  );
}
          