interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonHref: string;
}

/**
 * CTASection displays a full-width call-to-action block.
 */
export default function CTASection({ title, subtitle, buttonLabel, buttonHref }: CTASectionProps) {
  return (
    <section className="bg-secondary text-white py-12 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
        <p className="max-w-3xl mx-auto text-base md:text-lg">{subtitle}</p>
        <a
          href={buttonHref}
          className="inline-block bg-accent text-white font-semibold py-3 px-6 rounded-md hover:opacity-90 transition-opacity"
          target="_blank"
          rel="noopener noreferrer"
        >
          {buttonLabel}
        </a>
      </div>
    </section>
  );
}