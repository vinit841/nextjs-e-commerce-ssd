import { TopMenu } from "../components";

interface Props {
  children: React.ReactNode;
}

export default function PublicLayout({ children }: Props) {
    console.log("Layout");
    
  return (
    <main className="min-h-screen ">
      <TopMenu />
      {children}
    </main>
  );
}