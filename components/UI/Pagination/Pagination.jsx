import Button from "../Button/Button";
import Input from "../Input/Input";
import cl from "./Pagination.module.css";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
	const handlePrevClick = () => {
		onPageChange(currentPage - 1);
	};

	const handleNextClick = () => {
		onPageChange(currentPage + 1);
	};

	return (
		<div className={cl.pagination}>
			<Button
				variant={currentPage !== 1 && "primary"}
				size="small"
				disabled={currentPage === 1}
				onClick={handlePrevClick}
                text={"<"}
			/>
			<div>
				<Input
					type="number"
					min="1"
					max={totalPages}
                    className={cl.pageInput}
					value={currentPage}
					onChange={(e) => (Number(e.target.value) > 0 && Number(e.target.value) <= totalPages) && onPageChange(Number(e.target.value))}
				/>
                {' '} / {totalPages}
			</div>
			<Button
				variant={currentPage !== totalPages && "primary"}
				size="small"
				disabled={currentPage === totalPages}
				onClick={handleNextClick}
                text={">"}
			/>
		</div>
	);
};

export default Pagination;