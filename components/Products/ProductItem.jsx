import Badge from '../UI/Badge/Badge';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import cl from './ProductItem.module.css';

const ProductItem = ({ product }) => {
	return (
		<Card className={cl.product}>
			<div>
				<div
					className={cl.content}
					style={{ backgroundImage: `url(${product.images[0]})` }}
				>
					<div className={cl.header}>
						<div className={cl.badges}>
							{product.rate > 4 && (
								<Badge variant={'primary'} size={'small'} text={'Top'} />
							)}
							{product.new && (
								<Badge variant={'success'} size={'small'} text={'New'} />
							)}
						</div>
                        <div className={cl.category}>
							<h4>{product.category?.name}</h4>
						</div>
					</div>
				</div>
				<div className={cl.details}>
					<div>
						<p className={cl.title}>{product.title}</p>
					</div>
					<div>
						<p className={cl.price}>{`${product.price} ₽`}</p>
					</div>
				</div>
			</div>
			<div>
				<Button variant='primary' text='В корзину' />
			</div>
		</Card>
	);
};

export default ProductItem;
