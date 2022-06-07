import { useState } from "react";
import Flex from "../../flex/flex.jsx";
import cn from "classnames";
import c from "./pagination.module.scss";

type PageInfo = {
  totalItemsCount: number;
  pageSize: number;
  currentPage: number;
  portionSize?: number;
};

type Props = {
  pageInfo: PageInfo;
  onSelectPage: (paguNumber: number) => void;
};

export const Pagination: React.FC<Props> = ({
  pageInfo: { totalItemsCount, pageSize, currentPage, portionSize = 10 },
  onSelectPage,
}):JSX.Element => {
  const [portionNumber, setPortionNumber] = useState(1);
  const pagesTotal = Math.ceil(totalItemsCount / pageSize);
  const portionTotal = Math.ceil(pagesTotal / portionSize);
  const leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionNumber = portionNumber * portionSize;
  const paginations = getPagination(totalItemsCount);


  return (
    <Flex style={{alignItems: 'center'}}>
      {leftPortionNumber > 1 && (
        <button
          type="button"
          onClick={() => setPortionNumber(portionNumber - 1)}
        >
          Prev
        </button>
      )}
      <ul className={c.list}>
        {paginations
          .filter(
            (pagination) =>
              pagination >= leftPortionNumber &&
              pagination <= rightPortionNumber
          )
          .map((pagination, idx) => (
            <li
              className={cn(c.item, {
                [c.active]: currentPage === pagination,
              })}
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



const getPagination = (totalItemsCount: number): Array<number> => {
  const pages = [];
  for (let i = 1; i <= totalItemsCount; i++) {
    pages.push(i);
  }
  return pages;
};

export default Pagination;
