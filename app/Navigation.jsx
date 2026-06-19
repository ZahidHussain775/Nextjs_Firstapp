import Link from "next/link";

export default function Navigation() {

    return (
        <header className="grid grid-cols-2">
            <div className="">Mir</div>
           <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/service">Services</Link></li>
            </ul>
        </nav>  
        </header>
         
    );  


}
