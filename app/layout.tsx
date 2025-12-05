import '@/app/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';

// Import the Inter font with latin subset.
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

// Default metadata applied across the site. Specific pages can override via export metadata.
export const metadata: Metadata = {
  title: {
    default: 'Planos de Saúde e Seguros em Salvador – Noely Teixeira',
    template: '%s | Noely Teixeira',
  },
  description:
    'Consultoria humanizada em planos de saúde e seguros em Salvador/BA. Encontre o plano ideal para você, sua família ou sua empresa.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Schema.org markup for LocalBusiness/InsuranceAgency */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'InsuranceAgency',
              name: 'Noely Teixeira – Corretora de Seguros',
              image: 'https://via.placeholder.com/300x200?text=Noely',
              telephone: '+55-71-99629-0118',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Av. Estados Unidos, 397 – Comércio. Ed. Cidade Salvador',
                addressLocality: 'Salvador',
                addressRegion: 'BA',
                postalCode: '40010-020',
                addressCountry: 'BR',
              },
              url: 'https://planodesaudebahia.com.br',
              areaServed: 'Salvador, Bahia',
            }),
          }}
        />
      </head>
      <body className={inter.className + ' flex flex-col min-h-screen'}>
        <Header />
        <main className="flex-1 mt-24">{children}</main>
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}