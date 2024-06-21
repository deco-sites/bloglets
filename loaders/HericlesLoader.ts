export interface Props {
  /** The number of products to fetch. */
  limit?: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export default async function loader({ limit = 10 }: Props) {
  const response = await fetch(`https://dummyjson.com/products?limit=${limit}`);
  const { products } = await response.json() as { products: Product[] };
  
  return {
    products: products.map(product => ({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
    })),
  };
}