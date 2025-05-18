import { Products } from "@/interfaces/products";
import { ProductsGridItem } from "./ProductsGridItem";

interface Props {
  products: Products[];
}

export const ProductsGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10 px-2">
      {products.map((product) => (
        <ProductsGridItem key={product.slug} product={product} />
      ))}
    </div>
  );
};
