import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useFirstVisit = (): [boolean, () => Promise<void>] => {
  const [firstVisit, setFirstVisit] = useState<boolean>(true);

  useEffect(() => {
    const checkFirstVisit = async () => {
      try {
        const hasVisited = await AsyncStorage.getItem("hasVisited");
        if (hasVisited !== null) {
          setFirstVisit(false);
        }
      } catch (error) {
        console.error("Error reading AsyncStorage:", error);
      }
    };

    checkFirstVisit();
  }, []);

  const setVisited = async () => {
    try {
      await AsyncStorage.setItem("hasVisited", "true");
      setFirstVisit(false);
    } catch (error) {
      console.error("Error saving to AsyncStorage:", error);
    }
  };

  return [firstVisit, setVisited];
};

export default useFirstVisit;
