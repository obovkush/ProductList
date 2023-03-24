import clsx from 'clsx';
import cl from './Badge.module.css';

export default function Badge({ variant, text, props }) {
	const classes = clsx(cl.badge, {
		[cl[variant]]: true,
	});
	return <div {...props} className={classes}>{text}</div>;
}
