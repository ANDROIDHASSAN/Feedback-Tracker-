import { useState } from "react";

function StarRating({ onRate }) {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  const handleClick = (value) => {
    setRating(value);
    if (onRate) onRate(value); // Optional callback
  };

  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          onClick={() => handleClick(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          xmlns="http://www.w3.org/2000/svg"
          fill={(hovered || rating) >= star ? "gold" : "none"}
          viewBox="0 0 24 24"
          stroke="gold"
          className="w-6 h-6 cursor-pointer transition-colors duration-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.909c.969 0 1.371 1.24.588 1.81l-3.974 2.886a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.974-2.886a1 1 0 00-1.176 0l-3.974 2.886c-.785.57-1.84-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.993 10.1c-.783-.57-.38-1.81.588-1.81h4.909a1 1 0 00.95-.69l1.518-4.674z"
          />
        </svg>
      ))}
    </div>
  );
}

export default StarRating;
