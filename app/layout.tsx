import type {Metadata} from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Supreme Plumbing Service | Licensed, Bonded, & Insured',
  description: 'Supreme Plumbing Service delivers premium residential and commercial plumbing contracting. With over a decade of trusted experience, we specialize in water heaters, full contracting, and expert service.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans bg-[#030712] text-white antialiased min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
