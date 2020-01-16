import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

const useDarkMode = (status) => {

    const [isDarkModeOn, setIsDarkModeOn] = useLocalStorage("darkModeStatus", false);

    useEffect(() => {

        console.log("inside useEffect", isDarkModeOn);

        // document.getElementById("root").classList.toggle("dark-mode");

        isDarkModeOn ?
            document.getElementById("root").classList.remove("dark-mode") :
            document.getElementById("root").classList.add("dark-mode")

    }, [isDarkModeOn]);

    return [isDarkModeOn, setIsDarkModeOn];
}

export default useDarkMode;