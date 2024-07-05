import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/logo/logo-dark.png"
import Footer from "../Footer";

const navigation = [
    { name: "Beranda", href: "/"},
    { name: "Perangkat", href: "/devices"}
]

function CustomLink({ children, to, className, addStyle, ...props }) {
    return (
        <div>
            <Link to={to} className={addStyle} {...props}>
                {children}
            </Link>
        </div>
    );
}

const Navbar = () => {
    return (
        <>
            <div className="bg-primary flex flex-row w-full px-8">
                <div>
                    <Link to="/">
                        <img src={logo} alt="DOTS BCa" className="h-16 w-auto"/>
                    </Link>
                </div>
                <div className="flex grow flex-row mr-0 justify-end items-center">
                    <div className="flex flex-row gap-8">
                        {navigation.map((item) => (
                            <CustomLink key={item.name} to={item.href} addStyle={"text-white font-light"}>
                                {item.name}
                            </CustomLink>
                        ))}
                    </div>
                </div>
            </div>
            <Outlet/>
            <Footer />
        </>
    )
}

export default Navbar;