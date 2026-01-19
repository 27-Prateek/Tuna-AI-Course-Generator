"use client";

const categories = [
  "All",
  "AI",
  "Web Development",
  "Data Science",
  "Design",
  "Business",
];

function ExploreFilters({ selected, onSelect }) {
  return (
    <div className="flex gap-3 flex-wrap mb-8">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => onSelect(item)}
          className={`px-4 py-1.5 rounded-full text-sm border transition
            ${
              selected === item
                ? "bg-[#5cbfb5] text-white border-[#5cbfb5]"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default ExploreFilters;
