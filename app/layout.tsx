import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

// 1. Define custom, unique variable names to prevent loop crashes in Tailwind v4
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'Supreme Plumbing Service | Licensed, Bonded, & Insured',
  description: 'Supreme Plumbing Service delivers premium residential and commercial plumbing contracting. With over a decade of trusted experience, we specialize in water heaters, full contracting, and expert service.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      {/* 2. Fixed background color to exactly match your premium #0A111C branding */}
      <body className="font-sans bg-[#0A111C] text-white antialiased min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}