"use client";

import { useEffect } from 'react';
import { typeWriter } from '/Users/naveedrahman/e-portfolio/Website/e-portfolio/components/client/TypeWriter';

export default function Home() {
  useEffect(() => {
    typeWriter();
  }, []);

  return (
    <main className="min-h-screen back_color">
      <div className="welcome_page font_style">
        <h2>Welcome</h2>
        <p id="welc"></p>
      </div>
    </main>
  );
}
