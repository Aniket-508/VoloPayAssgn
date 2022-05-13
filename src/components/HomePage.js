import { useNavigate } from "react-router-dom";
import { Tab } from "@headlessui/react";
import YourPanel from "./YourPanel";
import AllPanel from "./AllPanel";
import Header from "./Header";

export default function HomePage({ index }) {
  const navigate = useNavigate();
  const tabs = [
    {
      title: "Your",
      path: "/your",
    },
    {
      title: "All",
      path: "/all",
    },
    {
      title: "Blocked",
      path: "/blocked",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <Header />
      <Tab.Group selectedIndex={index}>
        <Tab.List className="flex space-x-6 border-b-2 border-gray-200">
          {tabs.map((tab, index) => (
            <Tab
              className={({ selected }) =>
                selected ? "border-b-2 border-[#FF2F64] outline-none py-3 font-semibold" : "outline-none py-3"
              }
              onClick={() => navigate(tab.path)}
              key={index}
            >
              {tab.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <YourPanel />
          </Tab.Panel>
          <Tab.Panel>
            <AllPanel />
          </Tab.Panel>
          <Tab.Panel>
            <h1>Blocked Panel</h1>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
