import { useCallback, useEffect, useState } from "react";

interface IInventoryObject {
  product: string;
  inventoryLocation: string;
  quantity: number;
}

export default function useInventory() {
  const [inventory, setInventory] = useState([]);

  const getInventory = useCallback(async () => {
    const res = await fetch("http://localhost:8000/inventoryBalances");
    const fetchedInventory = await res.json();
    setInventory(fetchedInventory);
  }, [setInventory]);

  useEffect(() => {
    getInventory();
  }, [getInventory]);

  return inventory;
}
