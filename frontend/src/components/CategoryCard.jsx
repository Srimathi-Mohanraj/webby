

export default function CategoryCard({ category }) {
  
  if (!category) return null;

  
  const imgSrc = category.image || "/data/images/placeholder.png";

  return (
    <button
      type="button"
      className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow flex flex-col items-center"
      onClick={() => {
        /* your click handler to filter category */
      }}
    >
      <div className="w-full h-40 flex items-center justify-center bg-white rounded-md overflow-hidden">
        <img
          src={imgSrc}
          alt={category.label || "category"}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <div className="mt-3 text-center text-gray-700 w-full">
        {category.label}
      </div>
    </button>
  );
}
