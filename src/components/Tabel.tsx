import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableContent from "./TableContent";
import { useState } from "react";
import tableData from '@/data/sample-data-tabel'


const Table = () => {
  const [selectedBranchCode, setSelectedBranchCode] = useState("all");

  const onTabChange = (value: string) => {
    setSelectedBranchCode(value);
  }

  return (
    <>
      <div>
        <Tabs defaultValue="all" value={selectedBranchCode} onValueChange={onTabChange}>
          <div className="flex gap-4 text-[#0B7F8E] border border-[#0B7F8E] justify-around rounded-full items-center">
            <TabsList>
              <TabsTrigger value="all">Semua AP</TabsTrigger>
              <TabsTrigger value="mum">MUM</TabsTrigger>
              <TabsTrigger value="mpu">MPU</TabsTrigger>
              <TabsTrigger value="sga">SGA</TabsTrigger>
              <TabsTrigger value="ail">AIL</TabsTrigger>
              <TabsTrigger value="mjr">MJR</TabsTrigger>
              <TabsTrigger value="lan">LAN</TabsTrigger>
              <TabsTrigger value="ksm">KSM</TabsTrigger>
              <TabsTrigger value="bru">BRU</TabsTrigger>
              <TabsTrigger value="klb">KLB</TabsTrigger>
              <TabsTrigger value="btb">BTB</TabsTrigger>
              <TabsTrigger value="saw">SAW</TabsTrigger>
              <TabsTrigger value="gps">GPS</TabsTrigger>
              <TabsTrigger value="lsw">LSW</TabsTrigger>
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
