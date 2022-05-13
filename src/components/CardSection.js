import InfiniteScroll from "react-infinite-scroll-component";

const CardSection = ({ mocked, hasMore, getMore, filter, type }) => {
  const dataToMap =
    type === "all"
      ? mocked.filter((card) => {
          if (filter.length === 0) {
            return true;
          }
          return filter.some((r) => card.card_type.indexOf(r) >= 0);
        })
      : mocked;

  return (
    <div className="w-full">
      <InfiniteScroll
        dataLength={mocked.length}
        hasMore={hasMore}
        loader={
          <div className="flex justify-center">
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
        }
        next={getMore}
        hasChildren={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
          {dataToMap
            .map((card, index) => (
              <div className="mx-2 px-6 py-4 shadow-lg" key={index}>
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-[26px]">{card.name}</p>
                    <p className="text-[#959CA4]">
                      {card.owner_id} | {card.budget_name}
                    </p>
                  </div>
                  <div className="rounded-full h-[55px] w-[55px] shadow-xl bg-[#FEF6F7] text-[#FF3266] flex justify-center items-center">
                    {card.card_type === "burner" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                        <path
                          fillRule="evenodd"
                          d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="flex pt-2 justify-between items-center">
                  <div className="border-2 rounded-md">
                    {card.card_type === "burner" ? (
                      <p className="mx-2 text-[13px]">Burner</p>
                    ) : (
                      <p className="mx-2 text-[13px]">Subscription</p>
                    )}
                  </div>

                  {card.card_type === "burner" ? (
                    <p className="text-sm text-[#959CA4]">
                      Expires: {card.expiry}
                    </p>
                  ) : (
                    <p className="text-sm text-[#959CA4]">
                      This month's limit: {card.limit} SGD
                    </p>
                  )}
                </div>
                <div className="w-full bg-[#499359] rounded-md h-2.5 dark:bg-gray-700 mt-2">
                  <div
                    className="bg-[#EB4869] h-2.5 rounded-md"
                    style={{
                      width: `${(card.spent.value / card.limit) * 100}%`,
                    }}
                  ></div>
                </div>
                <div className="pt-3 flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="bg-[#EB4869] h-3 w-3 rounded-full"></div>
                    <p>Spent</p>
                  </div>
                  <p>
                    {card.spent.value} {card.spent.currency}
                  </p>
                </div>
                <div className="pt-3 flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="bg-green-500 h-3 w-3 rounded-full"></div>
                    <p>Availabe to spent</p>
                  </div>
                  <p>
                    {card.available_to_spend.value}{" "}
                    {card.available_to_spend.currency}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default CardSection;
