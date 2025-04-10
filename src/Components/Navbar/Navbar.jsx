import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Context";
import { PiShoppingCartLight } from "react-icons/pi";



const Navbar = () => {
    const context = useContext(ShoppingCartContext);
    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className="fixed top-0 z-10 flex items-center justify-between w-full px-8 py-5 text-sm font-light">
            <ul className="flex items-center justify-between gap-3">
                <li className="text-lg font-semibold">
                    <NavLink to='/'>Shopi</NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/'
                    onClick={() => context.setSearchByCategory()} 
                    className={({ isActive }) => isActive ? activeStyle : undefined}>Todo
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/ropa'
                    onClick={() => context.setSearchByCategory('clothes')}  
                    className={({ isActive }) => isActive ? activeStyle : undefined}>Ropa
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/electrodomesticos'
                    onClick={() => context.setSearchByCategory('electronics')} 
                    className={({ isActive }) => isActive ? activeStyle : undefined}>Electrodomesticos
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/muebles'
                    onClick={() => context.setSearchByCategory('furnitures')} 
                    className={({ isActive }) => isActive ? activeStyle : undefined}>Muebles
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/juguetes'
                    onClick={() => context.setSearchByCategory('toys')} 
                    className={({ isActive }) => isActive ? activeStyle : undefined}>Juguetes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/otros'
                    onClick={() => context.setSearchByCategory('others')} 
                    className={({ isActive }) => isActive ? activeStyle : undefined}>Otros
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center justify-between gap-3">
                <li className="text-black/60">
                    shopi@gmail.com
                </li>
                <li>
                    <NavLink to='/my-orders' className={({ isActive }) => isActive ? activeStyle : undefined}>Pedidos</NavLink>
                </li>
                <li>
                    <NavLink to='/my-account' className={({ isActive }) => isActive ? activeStyle : undefined}>Cuenta</NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in' className={({ isActive }) => isActive ? activeStyle : undefined}>Iniciar Sesion</NavLink>
                </li>
                <li className="flex items-center justify-between gap-2">
                <PiShoppingCartLight className="w-6 h-6" />
                    <span>{context.cartProduct.length}</span>
                </li>
            </ul>
        </nav>
    );
}

export { Navbar };