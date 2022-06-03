import { useState } from "react";
import Flex from "../../flex/flex.jsx";

import c from "./pagination.module.scss";

export const Pagination = ({
  pageInfo: { totalItemsCount, pageSize, currentPage, portionSize = 10 },
  onSelectPage,
}) => {
  const [portionNumber, setPortionNumber] = useState(1);
  const pagesTotal = Math.ceil(totalItemsCount / pageSize);
  const portionTotal = Math.ceil(pagesTotal / portionSize);
  const leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionNumber = portionNumber * portionSize;
  const paginations = getPagination(totalItemsCount);

  return (
    <Flex style={{alignItems: 'center'}}>
      {leftPortionNumber > 1 && <button type="button" onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>}
      <ul className={c.list}>
        {paginations
          .filter(
            (pagination) =>
              pagination >= leftPortionNumber &&
              pagination <= rightPortionNumber
          )
          .map((pagination, idx) => (
            <li
              className={
                currentPage === pagination ? `${c.item} ${c.active}` : c.item
              }
              key={idx}
              onClick={() => onSelectPage(pagination)}
            >
              {pagination}
            </li>
          ))}
      </ul>
      {rightPortionNumber < portionTotal && (
        <button
          type="button"
          onClick={() => setPortionNumber(portionNumber + 1)}
        >
          Next
        </button>
      )}
    </Flex>
  );
};

const getPagination = (totalItemsCount) => {
  const pages = [];
  for (let i = 1; i <= totalItemsCount; i++) {
    pages.push(i);
  }
  return pages;
};

export default Pagination;
