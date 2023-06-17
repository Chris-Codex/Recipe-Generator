import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, changePage }) => {
  return (
    <div className="flex justify-between max-w-[480px] px-10  ml-[900px] mt-[-40px] items-center">
      <div className="flex  justify-between items-center w-full flex-shrink">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName="flex justify-center p-3 items-center  w-full h-[60px] bg-[#ffc300]"
          previousLinkClassName={"previousBttns"}
          nextLinkClassName={"nextBttns"}
          activeClassName={"paginationActive"}
          disabledClassName={"paginationDisabled"}
        />
      </div>
    </div>
  );
};

export default Pagination;
