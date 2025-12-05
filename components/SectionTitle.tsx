interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

/**
 * SectionTitle renders a heading and optional subtitle. Alignment can be center or left.
 */
export default function SectionTitle({ title, subtitle, align = 'center' }: SectionTitleProps) {
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{title}</h2>
      {subtitle && <p className="text-gray-600 max-w-xl mx-auto">{subtitle}</p>}
    </div>
  );
}