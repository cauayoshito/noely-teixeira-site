interface BenefitCardProps {
  title: string;
  description: string;
  icon?: string; // use emoji as icon placeholder
}

/**
 * BenefitCard displays an icon, a title and a short description.
 */
export default function BenefitCard({ title, description, icon }: BenefitCardProps) {
  return (
    <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
      <div className="text-2xl">{icon ?? '✔️'}</div>
      <div>
        <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}