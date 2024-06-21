export interface Props {
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
}

const action = async (props: Props): Promise<void> => {
  const { name, description, price, category, image = "" } = props;

  const productData = {
    name,
    description,
    price,
    category,
    image,
  };

  try {
    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Handle the response if needed
    const data = await response.json();
    console.log("Product created:", data);
  } catch (error) {
    console.error("Error creating product:", error);
  }
};

export default action;