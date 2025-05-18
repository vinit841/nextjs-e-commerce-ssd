import { ProductsGrid, Title } from "@/app/components";
import { initialData } from "@/app/seed/seed";

const products = initialData.products;

export default function Shopping() {
  return (
    <>
      <Title title="Tienda" subtitle="Todos Los Productos" />
      <ProductsGrid products={products} />
    </>
  );
}
