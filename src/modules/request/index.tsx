import { FC, Fragment, ReactElement, useState } from "react";
import SuspenseError from "@/modules/common/suspense-error";
import { ErrorRequest } from "@/modules/request/error";
import LoadingRequest from "@/modules/request/loading";
import Card from "@/components/molecules/card";
import { Tab } from "@headlessui/react";

import PermintaanPage from "@/modules/request/request";
import ProsesPage from "@/modules/request/process";
import HasilPage from "@/modules/request/result";

const RequestPage: FC = (): ReactElement => {
  const [active, setActive] = useState("permintaan");
  return (
    // <SuspenseError error={<ErrorRequest />} loading={<LoadingRequest />}>
    <Tab.Group>
      <section className="w-full flex h-fit relative pt-11 overflow-hidden justify-center lg:justify-end lg:pr-4">
        <Card className="w-full h-fit rounded-lg bg-white">
          <div className="px-11 py-4 flex flex-col w-full ">
            <Tab.List
              className="flex flex-row gap lg:gap-x-8 md:gap-x-2 text-base font-semibold"
              style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}
            >
              <Tab as={Fragment}>
                <button>
                  <a
                    className={`inline-block p-4 ${
                      active == "permintaan" ? "text-primary-400 border-b-4 border-primary-400" : ""
                    }       text-neutral-400 text-xs md:text-base `}
                    aria-current="page"
                    onClick={() => setActive("permintaan")}
                  >
                    Permintaan
                  </a>
                </button>
              </Tab>
              <Tab as={Fragment}>
                <button>
                  <a
                    className={`inline-block p-4 ${
                      active == "proses" ? "text-primary-400 border-b-4 border-primary-400" : ""
                    }       text-neutral-400 text-xs md:text-base`}
                    aria-current="page"
                    onClick={() => setActive("proses")}
                  >
                    Proses
                  </a>
                </button>
              </Tab>
              <Tab as={Fragment}>
                <button>
                  <a
                    className={`inline-block p-4 ${
                      active == "Hasil" ? "text-primary-400 border-b-4 border-primary-400" : ""
                    }       text-neutral-400 text-xs  md:text-base`}
                    aria-current="page"
                    onClick={() => setActive("Hasil")}
                  >
                    Hasil
                  </a>
                </button>
              </Tab>
            </Tab.List>

            {/* content */}
            <Tab.Panels>
              {/* tab 1 */}
              <Tab.Panel>
                <PermintaanPage />
              </Tab.Panel>
              {/* tab 2 */}
              <Tab.Panel>
                <ProsesPage />
              </Tab.Panel>
              {/* tabel 3 */}
              <Tab.Panel>
                <HasilPage />
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Card>
      </section>
    </Tab.Group>
    // </SuspenseError>
  );
};

export default RequestPage;
