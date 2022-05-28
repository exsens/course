import c from "./pagination.module.scss";

const Pagination = ({ currentPage, onClick, children }) => {
  return (
    <span
      onClick={() => {
        onClick(children);
      }}
      className={currentPage === children ? c.active : c.item}
    >
      {children}
    </span>
  );
};

export default Pagination;
