import { wait } from "@testing-library/user-event/dist/utils";
import { mockData } from "./Data";

const MockGetAll = async (page) => {
  await wait(1000);
  let start = page * 10 - 10;
  let end = page * 10;
  return {
    data: mockData.data.slice(start, end),
    hasMore: page >= 3 ? false : true,
  };
};

const MockGetYour = async ({ name, page }) => {
  await wait(1000);
  let start = page * 10 - 10;
  let end = page * 10;
  return {
    data: mockData.data
      .filter((data) => data.owner_id === name)
      .slice(start, end),
    hasMore: page >= 2 ? false : true,
  };
};

export { MockGetAll, MockGetYour };
