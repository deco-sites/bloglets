export interface Props {
  title: string;
  content: string;
  tags?: string[];
}

const action = async (
  props: Props,
  req: Request,
): Promise<void> => {
  const {
    title,
    content,
    tags = [],
  } = props;

  const postData = {
    title,
    content,
    tags,
    createdAt: new Date().toISOString(),
  };

  const url = "https://api.example.com/posts";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Handle the response if needed
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

export default action;