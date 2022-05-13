import { useEffect, useState } from "react";
import { MockGetAll } from "../mock-api/MockAPI";
import CardSection from "./CardSection";
import FilterModal from "./FilterModal";

export default function AllPanel() {
  const [isLoading, setIsLoading] = useState(false);
  const [initialData, setInitialData] = useState([]);
  const [mocked, setMocked] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    if (mocked.length === 0) {
      setIsLoading(true);
      MockGetAll(1).then((mockData) => {
        setInitialData(mockData.data);
        setMocked(mockData.data);
        setIsLoading(false);
        setHasMore(mockData.hasMore);
      });
    }
  }, [mocked.length]);

  const getMore = () => {
    setPage(page + 1);
    MockGetAll(page).then((mockData) => {
      setMocked([...mocked, ...mockData.data]);
      setHasMore(mockData.hasMore);
    });
  };

  const searchByName = (name) => {
    if (name === "") {
      setMocked(initialData);
    } else {
      const filtered = mocked.filter((card) =>
        card.name.toLowerCase().includes(name.toLowerCase())
      );
      setMocked(filtered);
    }
  };

  return (
    <div className="py-4">
      {isLoading ? (
        <div className="box-border h-screen flex items-center justify-center">
          <svg
            role="status"
            className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      ) : (
        <>
          <div className="pb-4 flex justify-end">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 border-gray-300 border focus-within:outline focus-within:outline-2 focus-within:outline-blue-500 focus-within:outline-offset-2 rounded-sm px-2 py-[2px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  className="border-none focus:outline-none"
                  onChange={(e) => searchByName(e.target.value)}
                />
              </div>
              <button
                className="flex items-center space-x-2 px-2 py-1 bg-[#F8F8F8] text-gray-600 rounded-md"
                onClick={() => setIsOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                </svg>
                <span className="font-semibold">Filter</span>
              </button>
              <FilterModal
                show={isOpen}
                close={() => setIsOpen(false)}
                setFilter={setFilter}
              />
            </div>
          </div>
          <CardSection
            mocked={mocked}
            hasMore={hasMore}
            getMore={getMore}
            filter={filter}
            type="all"
          />
        </>
      )}
    </div>
  );
}
