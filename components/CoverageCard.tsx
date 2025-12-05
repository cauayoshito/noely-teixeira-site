interface CoverageCardProps {
  title: string;
  description: string;
}

/**
 * CoverageCard lists a specific coverage offered in a product page.
 */
export default function CoverageCard({ title, description }: CoverageCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}