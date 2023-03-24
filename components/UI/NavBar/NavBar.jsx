import Button from '../Button/Button'
import cl from './NavBar.module.css'

export default function NavBar() {
    return (
        <div className={cl.navbar}>
            <Button href={'/'} text='Главная' className={cl.navbarLink}/>
            <Button href={'/products'} text='Каталог' className={cl.navbarLink}/>
        </div>
    )
}