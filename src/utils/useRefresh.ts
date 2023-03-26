import React from "react";

export const useRefresh = (callback: () => void) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      callback();
      setRefreshing(false);
    }, 2000);
  }, [callback]);

  return { refreshing, onRefresh };
};
