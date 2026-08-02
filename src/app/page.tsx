'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { LiveScoreboardBar } from '../components/LiveScoreboardBar';
import { Hero3D } from '../components/Hero3D';
import { TeamsCarousel3D } from '../components/3DTeamsCarousel';
import { TournamentSplitSection } from '../components/TournamentSplitSection';
import { EpicMomentsNewspaperCarousel } from '../components/EpicMomentsNewspaperCarousel';
import { InteractiveCanelonesMap } from '../components/InteractiveCanelonesMap';
import { LeaderboardSection } from '../components/LeaderboardSection';
import { SocialSection } from '../components/SocialSection';
import { Footer } from '../components/Footer';
import { FixtureModal } from '../components/FixtureModal';
import { AccessibilityWidget } from '../components/AccessibilityWidget';

export default function Home() {
  const [isFixtureModalOpen, setIsFixtureModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-[#061A42] selection:bg-[#FFE600] selection:text-[#061A42] overflow-x-hidden">
      {/* Floating Navigation Menu */}
      <Navbar onOpenFixtureModal={() => setIsFixtureModalOpen(true)} />

      {/* Sticky Live Scoreboard Bar */}
      <LiveScoreboardBar />

      {/* Hero Section with 3D Parallax Effect */}
      <Hero3D onOpenFixtureModal={() => setIsFixtureModalOpen(true)} />

      {/* Tournament Section with 65% / 35% Unequal Split Screen */}
      <TournamentSplitSection onOpenFixtureModal={() => setIsFixtureModalOpen(true)} />

      {/* 3D Interactive Tilted Teams Carousel */}
      <TeamsCarousel3D />

      {/* AI Generated Vintage Newspaper Carousel for Epic League Moments */}
      <EpicMomentsNewspaperCarousel />

      {/* Interactive Canelones Venues & Clubs Map */}
      <InteractiveCanelonesMap />

      {/* Collectible Trading Card Leaderboard Section */}
      <LeaderboardSection />

      {/* Hyper-Visible Social Media Section */}
      <SocialSection />

      {/* Editorial Magazine Footer */}
      <Footer />

      {/* Interactive Fixture & Schedule Modal */}
      <FixtureModal
        isOpen={isFixtureModalOpen}
        onClose={() => setIsFixtureModalOpen(false)}
      />

      {/* Floating Accessibility Settings Widget */}
      <AccessibilityWidget />
    </main>
  );
}
