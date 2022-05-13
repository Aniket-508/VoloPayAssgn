export default function Header() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between pb-10">
      <div className="flex items-center space-x-2 mb-4 md:mb-0">
        <p className="text-4xl font-bold">Virtual Cards</p>
        <button className="flex items-center space-x-1 bg-gray-200 p-1 text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <p className="text-sm">Learn More</p>
        </button>
      </div>
      <button className="flex space-x-2 items-center shadow-md rounded-lg cursor-pointer px-4 py-2 md:py-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
        <p>Virtual Card</p>
      </button>
    </div>
  );
}
