import InventoryCard from "../components/InventoryCard";

export default function InventoryScreen() {
  const currentDate = new Date().toDateString();

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
        <InventoryCard
          inventoryLocation="Norrköping"
          product="jTelefon"
          quantity={44000}
        />
      </section>
    </main>
  );
}
