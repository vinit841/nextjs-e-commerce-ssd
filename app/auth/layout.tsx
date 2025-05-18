interface Props {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: Props) {
  console.log("Layout");

  return <main className="min-h-screen ">{children}</main>;
}
