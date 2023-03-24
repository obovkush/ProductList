import clsx from 'clsx';
import cl from './Button.module.css';
import A from '../Link/A';

const Button = ({
	children,
	variant = 'default',
	size = 'standart',
	block = false,
	outlined = false,
	href,
	text,
	onClick,
	disabled = false,
	className,
	props,
}) => {
	const classes = clsx(cl.button, className, {
		[cl[variant]]: true,
		[cl[size]]: true,
		[cl.outlined]: outlined,
		[cl.block]: block,
	});

	if (href) {
		return (
			<A {...props} href={href} text={text} className={className}>
				{children}
			</A>
		);
	}

	return (
		<button
			{...props}
			className={classes}
			onClick={onClick}
			disabled={disabled}
		>
			{text}
		</button>
	);
};

export default Button;
