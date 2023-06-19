import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, changePage }) => {
  return (
    <div className="flex justify-between max-w-[480px] px-10  ml-[1030px] mt-[-40px] items-center">
      <div className="flex  justify-between items-center w-full flex-shrink">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName="flex justify-center p-3 gap-4 items-center pl-[140px] w-full h-[60px] "
          previousLinkClassName={
            "flex w-[100px] h-[40px] items-center justify-center rounded-lg border border-[#18b648]"
          }
          nextLinkClassName={
            "flex w-[100px] h-[40px] items-center justify-center rounded-lg border border-[#18b648]"
          }
          activeClassName={"paginationActive"}
          disabledClassName={"paginationDisabled"}
        />
      </div>
    </div>
  );
};

export default Pagination;
