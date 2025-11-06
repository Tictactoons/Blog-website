import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";


type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex gap-4 flex-col sm:flex-row sm:justify-between items-center sm:gap-2 mt-8 mb-20">


      <div className="flex items-center gap-3">
        
        <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`text-[#1a1a1a] text-[14px] dark:text-[#EFEFEF] font-medium disabled:opacity-50 flex gap-3 ${currentPage !== 1 ? "hover:text-blue-700 dark:hover:text-blue-700 transition-colors" : ""}`}
      >
        <IoMdArrowBack className={`text-[#667085] text-xl dark:text-[#EFEFEF] disabled:opacity-50 ${currentPage !== 1 ? "hover:text-blue-700 dark:hover:text-blue-700 transition-colors" : ""}`} />
         Previous
      </button>
      </div>
      

      <div className="flex gap-2">
        {pageNumbers.map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          className={`sm:px-3  py-2 px-3  sm:py-2  rounded-lg text-[12px] sm:text-[14px] ${num === currentPage ? "bg-[#F9F5FF] text-[#7F56D9]" : "text-[#667085] dark:text-white"}`}
        >
          {num}
        </button>
      ))}
      </div>


      
        <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`text-[#1a1a1a] text-[14px] dark:text-[#EFEFEF] font-medium disabled:opacity-50 flex gap-3 ${currentPage !== totalPages ? "hover:text-blue-700 dark:hover:text-blue-700 transition-colors" : ""}`}
      >
         Next
         <IoMdArrowForward className={`text-[#667085] dark:text-[#EFEFEF] text-xl disabled:opacity-50 ${currentPage !== totalPages ? "hover:text-blue-700 dark:hover:text-blue-700 transition-colors" : ""}`} />
      </button>
      
    </div>
  );
}
