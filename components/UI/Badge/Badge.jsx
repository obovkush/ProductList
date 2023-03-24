import clsx from 'clsx';
import cl from './Badge.module.css';

export default function Badge({
	children,
	variant = 'default',
	size = 'standart',
	text,
	props,
}) {
	const classes = clsx(cl.badge, {
		[cl[variant]]: true,
		[cl[size]]: true,
	});
	return (
		<div {...props} className={classes}>
			{children}
			{text}
		</div>
	);
}
