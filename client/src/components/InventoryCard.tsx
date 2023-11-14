import React from "react";
import { InventoryObject } from "../pages/InventoryPage";

interface InventoryCardProps {
  inventory: Array<InventoryObject>;
}

const InventoryCard: React.FC<InventoryCardProps> = ({ inventory }) => {
  return (
    <div className="w-1/3 md:1/4 h-fit rounded-md bg-primary p-4">
      <div className="space-y-4">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <h1 className="text-lg font-medium ">Färdigvarulager</h1>
          <h1>{inventory[0].inventoryLocation}</h1>
        </div>
        <div>
          <h1 className="font-medium text-lg pb-2">Produkter</h1>
          {inventory.map((item) => {
            return (
              <div>
                <div
                  className="flex justify-between py-4 items-center"
                  key={item.product}
                >
                  <p>{item.product}</p>
                  <p>{item.quantity}</p>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;
