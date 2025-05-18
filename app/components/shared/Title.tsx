interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

export const Title = ({ title, className, subtitle }: Props) => {
  return (
    <div className={`mb-6 mt-3 ${className || ""}`}>
      <h1 className="text-3xl font-bold text-gray-900 antialiased my-10">{title}</h1>
      {subtitle && <h3 className="text-gray-500 mt-1 mb-5 text-xl">{subtitle}</h3>}
    </div>
  );
};
