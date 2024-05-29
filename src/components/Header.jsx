import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="w-full h-24 bg-slate-400 flex">
            <div className="basis-1/3 flex justify-between items-center">
                {/* Logo */}
                <div className="h-24 w-24 flex mx-5">
                    <img
                        src="/images/logo.png"
                        className="items-center object-contain"
                        alt=""
                    />
                </div>

                {/* Navigation */}
                <nav className="flex gap-4 text-slate-800 font-bold">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            ` no-underline px-2 py-1 ${
                                isActive
                                    ? "bg-gray-600 text-zinc-100"
                                    : ""
                            } hover:bg-gray-600 hover:text-zinc-100 rounded`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => {
                            return ` no-underline px-2 py-1 ${
                                isActive ? "bg-gray-600 text-zinc-100" : ""
                            } hover:bg-gray-600 hover:text-zinc-100 rounded`;
                        }}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/causes"
                        className={({ isActive }) => {
                            return ` no-underline px-2 py-1 ${
                                isActive ? "bg-gray-600 text-zinc-100" : ""
                            } hover:bg-gray-600 hover:text-zinc-100 rounded`;
                        }}
                    >
                        Causes
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => {
                            return ` no-underline px-2 py-1 ${
                                isActive
                                    ? "bg-gray-600 text-zinc-100"
                                    : "bg-none text-slate-800"
                            } hover:bg-gray-600 hover:text-zinc-100 rounded`;
                        }}
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to="/events"
                        className={({ isActive }) => {
                            return ` no-underline px-2 py-1 ${
                                isActive
                                    ? "bg-gray-600 text-zinc-100"
                                    : "bg-none text-slate-800"
                            } hover:bg-gray-600 hover:text-zinc-100 rounded`;
                        }}
                    >
                        Events
                    </NavLink>
                    <NavLink
                        to="/gallery"
                        className={({ isActive }) => {
                            return ` no-underline px-2 py-1 ${
                                isActive
                                    ? "bg-gray-600 text-zinc-100"
                                    : "bg-none text-slate-800"
                            } hover:bg-gray-600 hover:text-zinc-100 rounded`;
                        }}
                    >
                        Gallery
                    </NavLink>
                </nav>
            </div>
            <div className="basis-2/3 flex justify-end items-center mx-8">
                <button className="bg-yellow-500 font-bold py-4 px-6 rounded-xl">
                    Donate
                </button>
            </div>
        </header>
    );
}
