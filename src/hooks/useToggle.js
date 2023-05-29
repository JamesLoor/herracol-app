import { useState } from "react";

export function useToggle() {
  const [clicked, setClicked] = useState(false);
  const handleClicked = () => {
    setClicked(!clicked);
  };

  return { clicked, handleClicked };
}
