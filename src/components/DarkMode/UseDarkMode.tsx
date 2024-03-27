import { useState } from "react";

const useDarkMode = () => {
  const [dark, setDark] = useState<boolean>(true);

  const toggleDarkMode = () => {
    setDark(!dark);
  };

  return [dark, toggleDarkMode] as const;
};

export default useDarkMode;
