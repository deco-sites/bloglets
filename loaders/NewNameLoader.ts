export interface Props {
  nameType: "first" | "last";
  numberOfNames?: number;
}

export default async function loader(
  { nameType, numberOfNames = 1 }: Props,
  _req: Request,
) {
  const response = await fetch(
    `https://www.randomlists.com/data/names-${nameType}.json`
  );
  const data = await response.json();
  const names = data.data.slice(0, numberOfNames);
  return { names };
}