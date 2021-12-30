const Pagination = (props) => {
  let pages = Math.ceil(props.count / props.pageSize);
  let pagesArray = [];
  for (let i = 1; i <= pages; i++) {
    pagesArray.push(i);
  }
  return (
    <nav aria-label='Page navigation example ' style={{ marginLeft: '30rem' }}>
      <ul className='pagination'>
        {pagesArray.map((page) => (
          <li
            onClick={() => props.onActivePageChange(page)}
            className={
              page == props.activePage ? 'page-item active' : 'page-item'
            }
          >
            <a className='page-link' href='#'>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
