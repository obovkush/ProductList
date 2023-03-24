import clsx from 'clsx';
import cl from './Card.module.css';

const Card = ({ children, props, className }) => {
    const classes = clsx(cl.Card, className);
	return (
		<div {...props} className={classes}>
			{children}
		</div>
	);
};

export default Card;
