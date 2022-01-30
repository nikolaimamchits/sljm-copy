import Link from "next/link"

const leftSideItems = [{
    label: "Shop", href: "/"
}, {label: "Editorial", href: "/editorial"}, {label: "Archivio", href: "/archivio"}, {
    label: 'Spazio Maiocchi',
    href: "/Spazio-maiocchi"
}, {label: "Circle", href: "/circle"}, {label: "Drop", href: "/drop"}]

const rightSideItems = [{label: "Search", href: "/_____"}, {login: "Log in", href: "/"}, {
    label: "Wishlist",
    href: "/wishlist"
}, {label: "Cart", href: "/cart"}]

export const Navbar = () => {
    return <nav className="flex justify-between">
        <ul className="flex gap-2">
            {leftSideItems.map((i) => <li key={i.href}><Link href={i.href} passHref><a href="">{i.label}</a></Link>
            </li>)}
        </ul>
        <ul className="flex gap-2">
            {rightSideItems.map((i) => <li key={i.href}><Link href={i.href} passHref><a href="">{i.label}</a></Link>
            </li>)}
        </ul>
    </nav>
}