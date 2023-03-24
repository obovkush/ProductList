import clsx from 'clsx';
import cl from './Card.module.css';

const Card = ({ children, props, className }) => {
    const cardClass = clsx(cl.Card, className);
	return (
		<div {...props} className={cardClass}>
			{children}
		</div>
	);
};

export default Card;
