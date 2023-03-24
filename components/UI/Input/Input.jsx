import clsx from 'clsx';
import cl from './Input.module.css'

export default function Input({type, value, onChange, className, props}) {
    const classes = clsx(cl.input, className);
    return (
        <input
            {...props}
            type={type}
            value={value}
            onChange={onChange}
            className={classes}
        />
    )
}
