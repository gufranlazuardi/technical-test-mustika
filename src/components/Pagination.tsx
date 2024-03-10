import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = () => {
  return (
    <>
      <div className="flex items-end justify-end py-6">
        <div className="w-8 h-11 text-[#0B7F8E] bg-[0B7F8E] border-t border-b border-l rounded-sm items-center flex justify-center">
          <ChevronLeft size={20} />
        </div>
        <div className="w-8 h-11 text-white bg-[#0B7F8E] border-r border-t border-b border-l rounded-sm items-center flex justify-center">
          1
        </div>
        <div className="w-8 h-11 text-[#0B7F8E] border-r border-t border-b rounded-sm items-center flex justify-center">
          2
        </div>
        <div className="w-8 h-11 text-[#0B7F8E] border-r border-t border-b rounded-sm items-center flex justify-center">
          3
        </div>
        <div className="w-8 h-11 text-[#0B7F8E] border-r border-t border-b rounded-sm items-center flex justify-center">
          4
        </div>
        <div className="w-8 h-11 text-[#0B7F8E] border-r border-t border-b rounded-sm items-center flex justify-center">
          <ChevronRight size={20} />
        </div>
      </div>
    </>
  );
};

export default Pagination;
