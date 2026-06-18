/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TopBar } from "./components/TopBar";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { MenuSection } from "./components/Menu";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-urban-cream">
      <TopBar />
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <MenuSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

