import PageContainer from './PageContainer';
import ProductList from '../components/Products/ProductList';

const Products = ({ products }) => {
	return (
		<PageContainer keywords={'product'} title={'Каталог товаров'}>
			{/* <h1>Каталог товаров</h1> */}
			<ProductList products={products} />
		</PageContainer>
	);
};

export default Products;

export async function getStaticProps(context) {
	try {
		const response = await fetch(process.env.REACT_APP_API_URL);
		const products = await response.json();
		return {
			props: { products },
		};
	} catch (e) {
		console.log(e);
	}
}
