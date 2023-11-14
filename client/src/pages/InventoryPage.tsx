import InventoryCard from "../components/InventoryCard";
import useInventory from "../hooks/useInventory";

export interface InventoryObject {
  product: string;
  quantity: number;
  inventoryLocation: string;
}

export default function InventoryPage() {
  const currentDate = new Date().toDateString();
  const inventory: InventoryObject[] = useInventory();

  const groupedData = inventory.reduce((acc, entry) => {
    const location = entry.inventoryLocation;
    if (!acc[location]) {
      acc[location] = [];
    }
    acc[location].push(entry);
    return acc;
  }, {});

  return (
    <main className="mx-8 h-full w-full">
      <section className="mt-16 ">
        <div className="flex flex-row gap-2 items-baseline">
          <h1 className="text-2xl font-semibold">Admin Panel</h1>
          <p className="text-sm text-neutral-300">{currentDate}</p>
        </div>
      </section>
      <section className="mt-16">
        <h1 className="text-2xl font-medium mb-8">Lagersaldo</h1>
        <div className="flex flex-wrap flex-row gap-4">
          {Object.values(groupedData).map((inventory) => (
            <InventoryCard
              key={inventory[0].inventoryLocation}
              inventory={inventory}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
