interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
}

/**
 * TestimonialCard presents a client's testimonial with name and role.
 */
export default function TestimonialCard({
  name,
  role,
  testimonial,
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col space-y-3">
      <p className="italic text-gray-700">“{testimonial}”</p>
      <div>
        <p className="font-semibold text-gray-800">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
        <div className="mt-2 flex space-x-1">
          {/* Render 5 stars as emoji */}
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>
      </div>
    </div>
  );
}
