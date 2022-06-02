import c from "./pagination.module.scss";

export const Pagination = ({
  pageInfo: { totalItemsCount, pageSize, currentPage },
  onSelectPage,
}) => {
  const pagesTotal = Math.ceil(totalItemsCount / pageSize);
  const paginations = getPagination(pagesTotal);

  return (
    <ul className={c.list}>
      {paginations.map((pagination, idx) => (
        <li className={currentPage === pagination ? `${c.item} ${c.active}` : c.item} key={idx} onClick={() => onSelectPage(pagination)}>
        {pagination}
        </li>
      ))}
    </ul>
  );
};

const getPagination = (pagesTotal) => {
  const pages = [];
  for (let i = 1; i < 6; i++) {
    if (i <= 3) {
      pages.push(i);
    } else if (i === 4) {
      pages.push("...");
    } else {
      pages.push(pagesTotal);
    }
  }
  return pages;
};

export default Pagination;
