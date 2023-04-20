import { FC, lazy, ReactElement, useState, Fragment } from "react";
import SuspenseError from "@/modules/common/suspense-error";
import { LoadingReport } from "@/modules/report/loading";
import { ErrorReport } from "@/modules/report/error";
import Card from "@/components/molecules/card";
import { Tab } from "@headlessui/react";

const ReportModules = lazy(() => import("@/modules/report"));
const ChartReport = lazy(() => import("@/modules/report/grafik"));

const ReportPages: FC = (): ReactElement => {
  const [active, setActive] = useState("laporan");
  return (
    <SuspenseError error={<ErrorReport />} loading={<LoadingReport />}>
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
                        active == "laporan" ? "text-primary-400 border-b-4 border-primary-400" : ""
                      }       text-neutral-400 text-xs md:text-base `}
                      aria-current="page"
                      onClick={() => setActive("laporan")}
                    >
                      Laporan User
                    </a>
                  </button>
                </Tab>
                <Tab as={Fragment}>
                  <button>
                    <a
                      className={`inline-block p-4 ${
                        active == "Grafik" ? "text-primary-400 border-b-4 border-primary-400" : ""
                      }       text-neutral-400 text-xs md:text-base`}
                      aria-current="page"
                      onClick={() => setActive("Grafik")}
                    >
                      Grafik
                    </a>
                  </button>
                </Tab>
              </Tab.List>

              {/* content */}
              <Tab.Panels>
                {/* tab 1 */}
                <Tab.Panel>
                  <ReportModules />
                </Tab.Panel>
                {/* tab 2 */}
                <Tab.Panel>
                  <ChartReport />
                </Tab.Panel>
              </Tab.Panels>
            </div>
          </Card>
        </section>
      </Tab.Group>
    </SuspenseError>
  );
};

export default ReportPages;
