import { useEffect, useState } from 'react';
import Loader from '../UI/Loader/Loader';
import Pagination from '../UI/Pagination/Pagination';
import ProductItem from './ProductItem';
import cl from './ProductList.module.css';

function ProductList({ products, pageSize = 12 }) {
	const [productList, setProductList] = useState(products);
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = Math.ceil(products?.length / pageSize);
	const firstIndex = (currentPage - 1) * pageSize;
	const lastIndex = firstIndex + pageSize;

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	useEffect(() => {
		if (products?.length)
			setProductList(
				products
					.map((product) => {
						const isNew = Math.round(Math.random()) === 0;
						return {
							...product,
							new: isNew,
						};
					})
					.slice(firstIndex, lastIndex, lastIndex)
			);
	}, [products, firstIndex, lastIndex]);
	if (!productList.length) return <Loader />;
	return (
		<div className={cl.container}>
			<div className={cl.grid}>
				{productList.map((product) => (
					<ProductItem key={product.id} product={product} />
				))}
			</div>
			<Pagination
				totalPages={totalPages}
				currentPage={currentPage}
				onPageChange={handlePageChange}
			/>
		</div>
	);
}

export default ProductList;
