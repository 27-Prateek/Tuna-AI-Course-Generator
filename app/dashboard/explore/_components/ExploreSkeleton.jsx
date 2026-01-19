// "use client";

// function ExploreSkeleton() {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {Array.from({ length: 6 }).map((_, i) => (
//         <div
//           key={i}
//           className="bg-white rounded-xl shadow-sm animate-pulse overflow-hidden"
//         >
//           <div className="h-40 bg-gray-200" />
//           <div className="p-4 space-y-3">
//             <div className="h-4 bg-gray-200 rounded w-3/4" />
//             <div className="h-3 bg-gray-200 rounded w-1/2" />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ExploreSkeleton;
function ExploreSkeleton() {
  return (
    <div className="mt-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-white border rounded-xl p-4 animate-pulse"
          >
            <div className="h-40 bg-gray-200 rounded-lg" />
            <div className="h-4 bg-gray-200 rounded mt-4 w-3/4" />
            <div className="h-3 bg-gray-200 rounded mt-2 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreSkeleton;

