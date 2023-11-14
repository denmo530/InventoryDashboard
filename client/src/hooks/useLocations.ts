import { useCallback, useEffect, useState } from "react";

export default function useLocations() {
  const [locations, setLocations] = useState([]);

  const getLocations = useCallback(async () => {
    const res = await fetch("http://localhost:8000/inventories");
    const fetchedLocations = await res.json();
    setLocations(fetchedLocations);
  }, [setLocations]);

  useEffect(() => {
    getLocations();
  }, [getLocations]);

  return locations;
}
