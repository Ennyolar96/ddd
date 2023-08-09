import classnames from "classnames";
import { usePagination, DOTS } from "./usePagination";
import "../../styles.css";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className="container">
      <ul
        className={classnames("pagination-container", {
          [className]: className,
        })}
      >
        <button
          disabled={currentPage <= 1}
          className={classnames("pagination-item", {
            disabled: currentPage === 1,
          })}
          onClick={onPrevious}
        >
          <BsFillArrowLeftCircleFill size={30} />
        </button>

        {paginationRange.map((pageNumber) => {
          const ChangePage = () => {
            onPageChange(pageNumber);
          };

          if (pageNumber === DOTS) {
            return (
              <li key={pageNumber} className="pagination-item dots">
                &#8230;
              </li>
            );
          }

          return (
            <li
              key={pageNumber}
              className={classnames("pagination-item", {
                selected: pageNumber === currentPage,
              })}
              onClick={ChangePage}
            >
              {pageNumber}
            </li>
          );
        })}
        <button
          disabled={currentPage >= lastPage}
          className={classnames("pagination-item", {
            disabled: currentPage === lastPage,
          })}
          onClick={onNext}
        >
          <BsFillArrowRightCircleFill size={30} />
        </button>
      </ul>
    </div>
  );
};

Pagination.propTypes;

export default Pagination; //> pageNumber.length - 1
