import Layout from "@/components/Layout";
import Maps from "@/components/Maps";

import Tabel from "@/components/Table";

const Home = () => {
  return (
    <Layout>
      <div className="gap-4 flex flex-col">
        <h1 className="text-2xl font-bold">Pelayanan PPL</h1>
        <div className="flex justify-center bg-white py-2">
          <p className="text-sm">Tanggal review 18-12-2020 - 18-12-2023</p>
        </div>
        <Maps />

        <Tabel />
      </div>
    </Layout>
  );
};

export default Home;
