import clsx from 'clsx';
import Link from 'next/link';
import cl from './A.module.css';

export default function A({ children, text, href, className, props }) {
	const classes = clsx(cl.link, className);
	return (
		<Link {...props} href={href} className={classes}>
			{children}
			{text}
		</Link>
	);
}
