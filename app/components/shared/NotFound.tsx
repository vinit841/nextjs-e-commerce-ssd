import Image from "next/image";
import Link from "next/link";

interface NotFoundProps {
  title?: string;
  description?: string;
  href?: string;
  linkText?: string;
  children?: React.ReactNode;
}

export const NotFound = ({
  title = "Página no encontrada",
  description = "La página que buscas no existe o ha sido movida.",
  href = "/",
  linkText = "Volver al inicio",
  children,
}: NotFoundProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white text-gray-900 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-4">
          <Image
            src="/imgs/starman_750x750.png"
            alt="Página no encontrada"
            className="mx-auto w-40 h-40 object-contain"
            width={550}
            height={550}
          />
        </div>
        <div className="text-7xl font-bold mb-4 text-gray-300 select-none">
          404
        </div>
        <h1 className="text-2xl font-semibold mb-2">{title}</h1>
        <p className="mb-6 text-gray-600">{description}</p>
        {children}
        <Link
          href={href}
          className="inline-block px-6 py-2 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition-colors"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};
