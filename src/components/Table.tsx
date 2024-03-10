import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableContent from "./TableContent";
import { useState } from "react";
import tableData from "@/data/sample-data-tabel";

const Table = () => {
  const [selectedBranchCode, setSelectedBranchCode] = useState("all");

  const onTabChange = (value: string) => {
    setSelectedBranchCode(value);
  };

  return (
    <>
      <div>
        <Tabs
          defaultValue="all"
          value={selectedBranchCode}
          onValueChange={onTabChange}
        >
          <div className="flex gap-4 text-[#0B7F8E] border border-[#0B7F8E] justify-around rounded-full items-center px-2">
            <TabsList className="flex flex-grow justify-around">
              <TabsTrigger
                value="all"
                className="text-[#0B7F8E] font-semibold data-[state=active]:bg-[#0B7F8E] data-[state=active]:text-white data-[state=active]:rounded-full"
              >
                Semua AP
              </TabsTrigger>
              <TabsTrigger
                value="mum"
                className="text-[#0B7F8E] font-semibold data-[state=active]:bg-[#0B7F8E] data-[state=active]:text-white data-[state=active]:rounded-full"
              >
                MUM
              </TabsTrigger>
              <TabsTrigger
                value="mpu"
                className="text-[#0B7F8E] font-semibold data-[state=active]:bg-[#0B7F8E] data-[state=active]:text-white data-[state=active]:rounded-full"
              >
                MPU
              </TabsTrigger>
              <TabsTrigger
                value="sga"
                className="text-[#0B7F8E] font-semibold data-[state=active]:bg-[#0B7F8E] data-[state=active]:text-white data-[state=active]:rounded-full"
              >
                SGA
              </TabsTrigger>
              <TabsTrigger
                value="ail"
                className="text-[#0B7F8E] font-semibold data-[state=active]:bg-[#0B7F8E] data-[state=active]:text-white data-[state=active]:rounded-full"
              >
                AIL
              </TabsTrigger>
              <TabsTrigger
                value="mjr"
                className="text-[#0B7F8E] font-semibold data-[state=active]:bg-[#0B7F8E] data-[state=active]:text-white data-[state=active]:rounded-full"
              >
                MJR
              </TabsTrigger>
              <TabsTrigger
                value="lan"
                className="text-[#0B7F8E] font-semibold data-[state=active]:bg-[#0B7F8E] data-[state=active]:text-white data-[state=active]:rounded-full"
              >
                LAN
              </TabsTrigger>
              <TabsTrigger
                value="ksm"
                className="text-[#0B7F8E] font-semibold data-[state=active]:bg-[#0B7F8E] data-[state=active]:text-white data-[state=active]:rounded-full"
              >
                KSM
              </TabsTrigger>
              <TabsTrigger
                value="bru"
                className="text-[#0B7F8E] font-semibold data-[state=active]:bg-[#0B7F8E] data-[state=active]:text-white data-[state=active]:rounded-full"
              >
                BRU
              </TabsTrigger>
              <TabsTrigger
                value="klb"
                className="text-[#0B7F8E] font-semibold data-[state=active]:bg-[#0B7F8E] data-[state=active]:text-white data-[state=active]:rounded-full"
              >
                KLB
              </TabsTrigger>
              <TabsTrigger
                value="btb"
                className="text-[#0B7F8E] font-semibold data-[state=active]:bg-[#0B7F8E] data-[state=active]:text-white data-[state=active]:rounded-full"
              >
                BTB
              </TabsTrigger>
              <TabsTrigger
                value="saw"
                className="text-[#0B7F8E] font-semibold data-[state=active]:bg-[#0B7F8E] data-[state=active]:text-white data-[state=active]:rounded-full"
              >
                SAW
              </TabsTrigger>
              <TabsTrigger
                value="gps"
                className="text-[#0B7F8E] font-semibold data-[state=active]:bg-[#0B7F8E] data-[state=active]:text-white data-[state=active]:rounded-full"
              >
                GPS
              </TabsTrigger>
              <TabsTrigger
                value="lsw"
                className="text-[#0B7F8E] font-semibold data-[state=active]:bg-[#0B7F8E] data-[state=active]:text-white data-[state=active]:rounded-full"
              >
                LSW
              </TabsTrigger>
            </TabsList>
          </div>
          <TableContent
            sampleData={tableData[selectedBranchCode] ?? []}
            branchCode={selectedBranchCode}
          />
        </Tabs>
      </div>
    </>
  );
};

export default Table;
