import Image from 'next/image';
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
                        <Image
                            alt="Mountains"
                            src={product.images[0]}
                            fill
                            sizes="100%"
                            style={{
                                objectFit: 'cover',
                            }}
                        />
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
				<Button variant='primary'>{"В корзину"}</Button>
			</div>
		</Card>
	);
};

export default ProductItem;
