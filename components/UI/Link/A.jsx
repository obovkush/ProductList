import clsx from "clsx";
import Link from "next/link";
import cl from './A.module.css'

export default function A({children, text, href, className, props}) {
    const linkClass = clsx(cl.link, className)
    return (
        <Link {...props} href={href} className={className}>
            {children}
            {text}
        </Link>
    )
}
