import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function FilterModal({ show, close, setFilter }) {
  const [state, setState] = useState({ selections: [] });
  function handleCheckboxChange(key) {
    let sel = state.selections;
    let find = sel.indexOf(key);
    if (find > -1) {
      sel.splice(find, 1);
    } else {
      sel.push(key);
    }

    setState({
      selections: sel,
    });
  }
  function handleFilters() {
    setFilter(state.selections);
    close();
  }

  function resetFilters() {
    setState({ selections: [] });
    setFilter([]);
    close();
  }
  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={close}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 border-b-2 border-gray-300 pb-4"
                  >
                    Filters
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-gray-400 mb-2">Type</p>
                    <div className="grid grid-cols-2 gap-x-4">
                      <div className="flex items-center">
                        <div className="flex items-center h-5">
                          <input
                            id="subscription"
                            type="checkbox"
                            checked={state.selections.includes("subscription")}
                            onChange={() =>
                              handleCheckboxChange("subscription")
                            }
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                          />
                        </div>
                        <label
                          for="subscription"
                          className="ml-2 text-sm font-medium text-gray-900"
                        >
                          Subscription
                        </label>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center h-5">
                          <input
                            id="burner"
                            type="checkbox"
                            checked={state.selections.includes("burner")}
                            onChange={() => handleCheckboxChange("burner")}
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                          />
                        </div>
                        <label
                          for="burner"
                          className="ml-2 text-sm font-medium text-gray-900"
                        >
                          Burner
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-x-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md shadow-md border py-2 bg-[#EB4869] text-white font-semibold"
                      onClick={handleFilters}
                    >
                      Apply
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md shadow-md border py-2 font-semibold"
                      onClick={resetFilters}
                    >
                      Clear
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
