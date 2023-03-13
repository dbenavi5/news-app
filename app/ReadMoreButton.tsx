"use client";

import { useRouter } from "next/navigation";

type Props = {
  article: DataEntry;
};

function ReadMoreButton({ article }: Props) {
  const router = useRouter();

  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    const url = `/article/article?${queryString}`;
    console.log(url);
    router.push(url);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-400 text-black h-10 rounded-b-lg"
    >
      Read More
    </button>
  );
}

export default ReadMoreButton;
