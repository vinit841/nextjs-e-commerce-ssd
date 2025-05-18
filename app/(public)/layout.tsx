import { TopMenu, Sidebar } from "../components";

interface Props {
  children: React.ReactNode;
}

export default function PublicLayout({ children }: Props) {
  return (
    <main className="min-h-screen  bg-gray-50">
      <TopMenu />
      <Sidebar />
      <div className=" w-full px-2 py-4 sm:px-8 md:px-16 lg:px-32 xl:px-64">
        {children}
      </div>
    </main>
  );
}
