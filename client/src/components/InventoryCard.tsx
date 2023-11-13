import React from "react";
import Tilt from "react-parallax-tilt";

interface InventoryCardProps {
  inventoryLocation: string;
  product: string;
  quantity: number;
}

// Använd getInventoryBalanceLocation routen för att få lagersaldo för specifikt lager. Visa upp varje produkt i kortet

const InventoryCard: React.FC<InventoryCardProps> = ({
  inventoryLocation,
  product,
  quantity,
}) => {
  return (
    <Tilt className="w-1/4 h-[300px] rounded-md bg-primary p-4">
      <div>
        <h1>Produkter</h1>
        <p>Telfon</p>
      </div>
    </Tilt>
  );
};

export default InventoryCard;
