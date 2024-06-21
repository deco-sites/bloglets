import { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  /** @format textarea */
  title?: string;
  numberOfItems?: number;
  /** @format color-input */
  backgroundColor?: string;
  image?: ImageWidget;
}

export async function loader(
  { title = "API Data", numberOfItems = 10, backgroundColor = "#f0f0f0", image }: Props,
  _req: Request,
) {
  const response = await fetch(`https://api.example.com/data?limit=${numberOfItems}`);
  const data = await response.json();

  return {
    title,
    items: data.slice(0, numberOfItems),
    backgroundColor,
    imageUrl: image?.src ?? "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  };
}