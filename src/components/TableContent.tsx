import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "./ui/separator";
import Pagination from "./Pagination";
import { TabsContent } from "@/components/ui/tabs";
import { FC } from "react";
import { IData } from "@/data/sample-data-tabel";

interface IProps {
  sampleData: IData[];
  branchCode: string;
}

const TableContent: FC<IProps> = ({ sampleData, branchCode }) => {
console.log({branchCode})
  return (
    <TabsContent value={branchCode}>
      <div className="bg-white py-4 px-8  ">
        <h1 className="text-2xl pb-4 pl-4">Tabel Data Semua Perusahaan</h1>
        <Separator />

        <div className="flex py-8 gap-4">
          <div className=" bg-[#E7F2F4] text-[#0B7F8E] px-2 rounded-md py-1">
            Total data : 14 dari 500 data
          </div>
          <div className="bg-[#E7F2F4] text-[#2EB85C] px-2 rounded-md py-1">
            Berhasil dimuat : 100%
          </div>
        </div>
        <Table className="border">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Ranking</TableHead>
              <TableHead className="whitespace-nowrap">Nama PPL</TableHead>
              <TableHead>Rata-rata Rating Kepuasan</TableHead>
              <TableHead className="whitespace-nowrap">
                Jumlah Periode
              </TableHead>
              <TableHead>Unit yang di Pegang</TableHead>
              <TableHead className="whitespace-nowrap">
                Rata - Rata IP
              </TableHead>
              <TableHead className="whitespace-nowrap">
                Rata - Rata FCR
              </TableHead>
              <TableHead className="text-right">
                Populasi ekor yang dipegang
              </TableHead>

              <TableHead className="text-right text-green-500">
                Rata-Rata Keuntungan Per Ekor
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-xs">
            {sampleData?.map((sampleData) => (
              <TableRow key={sampleData.Ranking}>
                <TableCell className="font-medium">
                  {sampleData.Ranking}
                </TableCell>
                <TableCell className="font-medium">
                  {sampleData.namaPpl}
                </TableCell>
                <TableCell className="font-medium">
                  {sampleData.rataRataRating}
                </TableCell>
                <TableCell className="font-medium">
                  {sampleData.jumlahPeriode}
                </TableCell>
                <TableCell className="font-medium">
                  {sampleData.unitYangDipegang}
                </TableCell>
                <TableCell className="font-medium">
                  {sampleData.rataRataIp}
                </TableCell>
                <TableCell className="font-medium">
                  {sampleData.rataRataFcr}
                </TableCell>
                <TableCell className="font-medium text-right">
                  {sampleData.populasiEkor}
                </TableCell>

                <TableCell className="text-right text-green-500">
                  {sampleData.rataRataKeuntungan}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination />
      </div>
    </TabsContent>
  );
};

export default TableContent;
