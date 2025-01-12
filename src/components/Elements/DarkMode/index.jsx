import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const DarkMode = () => {
  // Mengatur nilai default state ke false (light mode)
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Mengambil preferensi yang tersimpan dari localStorage
    const savedMode = localStorage.getItem("darkmode");

    // Jika tidak ada preferensi tersimpan, gunakan light mode (false)
    if (savedMode === null) {
      localStorage.setItem("darkmode", "false");
      document.documentElement.classList.remove("dark");
    }
    // Jika ada preferensi tersimpan, gunakan preferensi tersebut
    else if (savedMode === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleToggle = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("darkmode", newDarkMode.toString());
  };

  return (
    <button onClick={handleToggle} className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" aria-label={isDarkMode ? "Beralih ke mode terang" : "Beralih ke mode gelap"}>
      <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="w-5 h-5 text-gray-800 dark:text-gray-200" />
    </button>
  );
};

export default DarkMode;
