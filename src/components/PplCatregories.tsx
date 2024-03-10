import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PplCatregories = () => {
  return (
    <>
      <div className="flex gap-4 text-[#0B7F8E] border border-[#0B7F8E] justify-around rounded-full items-center">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </>
    // <div className="flex gap-4 text-[#0B7F8E] border border-[#0B7F8E] justify-around rounded-full items-center">
    //   <div className="bg-[#0B7F8E] text-white p-2 rounded-full">Semua AP</div>
    //   <div>MUM</div>
    //   <div>MPU</div>
    //   <div>SGA</div>
    //   <div>AIL</div>
    //   <div>MJR</div>
    //   <div>LAN</div>
    //   <div>KSM</div>
    //   <div>BRU</div>
    //   <div>KLB</div>
    //   <div>BTB</div>
    //   <div>SAW</div>
    //   <div>GPS</div>
    //   <div>LSW</div>
    // </div>
  );
};

export default PplCatregories;
