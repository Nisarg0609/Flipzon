const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  function getPages() {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage <= 3) return [1, 2, 3, "...", totalPages];
    if (currentPage >= totalPages - 2)
      return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
  }

  return (
    <div className="flex items-center justify-center gap-1.5 mt-8">
      <button
        disabled={currentPage <= 1}
        className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </button>

      {getPages().map((page, ind) =>
        page === "..." ? (
          <span key={`dots-${ind}`} className="px-2 text-gray-400">
            ...
          </span>
        ) : (
          <button
            key={`page-${page}`}
            className={`w-9 h-9 rounded-lg text-sm font-medium border transition-colors
            ${
              currentPage === page
                ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ),
      )}

      <button
        disabled={currentPage >= totalPages}
        className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
