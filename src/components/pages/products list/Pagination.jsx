import { Pagination } from "react-bootstrap";
import { useState } from "react";


const Paginationn = ({ productsPerPage, totalProducts, paginate }) => {

    const pageNumbers = [];
    let [currentPageNumber, setCurrentPageNumber] = useState(1);


    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleNextPage = () => {
        currentPageNumber < pageNumbers.length && paginate(currentPageNumber + 1);
        currentPageNumber < pageNumbers.length && setCurrentPageNumber(currentPageNumber + 1);
        currentPageNumber !== pageNumbers.length && window.scrollTo(0, 0);
    }

    const handlePrevPage = () => {
        currentPageNumber !== 1 && paginate(currentPageNumber - 1);
        currentPageNumber !== 1 && setCurrentPageNumber(currentPageNumber - 1);
        currentPageNumber !== 1 && window.scrollTo(0, 0);
    }

    return (
        <nav className="d-flex justify-content-between align-items-center mt-5">
            <ul className="pagination gap-2">
                {
                    currentPageNumber > 1 &&
                    <Pagination.Prev className="page-item" onClick={() => handlePrevPage()} />
                }
                {pageNumbers.length > 2 && currentPageNumber === pageNumbers.length ? <Pagination.Ellipsis disabled /> : null}

                {pageNumbers.map(pageNumber => (

                    <span onClick={() => window.scrollTo(0, 0)}>
                        <li
                            style={{ color: '#000' }}
                            key={pageNumber}
                            onClick={() => setCurrentPageNumber(pageNumber)}
                            className={currentPageNumber === pageNumber ? 'page-item active' : 'page-item'}
                        >
                            <button onClick={() => paginate(pageNumber)} className="page-link">
                                {pageNumber}
                            </button>
                        </li>
                    </span>
                ))}

                {pageNumbers.length > 2 && currentPageNumber !== pageNumbers.length ? <Pagination.Ellipsis disabled /> : null}
                <Pagination.Next onClick={() => handleNextPage()} />
            </ul>
        </nav>
    )
}

export default Paginationn