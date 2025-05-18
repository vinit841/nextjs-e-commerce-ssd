import Link from "next/link";

interface Props {
    href: string;
    icon: React.ReactNode;
    title: string;
}

export const SidebarItem = ({ href, icon, title }: Props) => {
    return (
        <Link
            href={href}
            className="flex items-center mt-4 md:mt-10 p-2 md:p-3 hover:bg-gray-100 rounded transition-all"
        >
            {icon}
            <span className="ml-2 md:ml-3 text-base md:text-xl hidden sm:inline">{title}</span>
        </Link>
    );
};
