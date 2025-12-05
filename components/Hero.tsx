"use client";

import Image from "next/image";

interface Bullet {
  text: string;
}

interface HeroProps {
  title: string;
  subtitle: string;
  bullets?: Bullet[];
  buttonLabel: string;
  buttonHref: string;
  imageSrc?: string;
  imageAlt?: string;
}

/**
 * Hero component with a two-column layout on desktop. On mobile it stacks vertically.
 */
export default function Hero({
  title,
  subtitle,
  bullets = [],
  buttonLabel,
  buttonHref,
  imageSrc,
  imageAlt,
}: HeroProps) {
  return (
    <section className="bg-white pt-12 pb-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left column */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {title}
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            {subtitle}
          </p>
          {bullets.length > 0 && (
            <ul className="space-y-2 mt-4">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-primary mt-0.5">✔️</span>
                  <span className="text-gray-700 text-sm md:text-base">
                    {bullet.text}
                  </span>
                </li>
              ))}
            </ul>
          )}
          <a
            href={buttonHref}
            className="mt-6 inline-block bg-primary text-white font-semibold py-3 px-6 rounded-md hover:opacity-90 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            {buttonLabel}
          </a>
        </div>
        {/* Right column: image */}
        {imageSrc && (
          <div className="relative w-full h-64 md:h-80 lg:h-96">
            <Image
              src={imageSrc}
              alt={imageAlt || ""}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}
