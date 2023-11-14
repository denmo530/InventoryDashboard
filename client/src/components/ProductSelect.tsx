import React from "react";
import Select from "react-select";
import useProducts from "../hooks/useProducts";

export type ProductSelectValue = {
  name: string;
  value: string;
};

interface ProductSelectProps {
  value?: ProductSelectValue;
  onChange: (value: ProductSelectValue) => void;
}

const ProductSelect: React.FC<ProductSelectProps> = ({ value, onChange }) => {
  const products = useProducts();

  return (
    <div>
      <Select
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            padding: "8px",
            borderWidth: "2px",
          }),
          input: (baseStyles) => ({
            ...baseStyles,
            fontSize: "large",
          }),
          option: (baseStyle) => ({
            ...baseStyle,
            fontSize: "large",
            color: "black",
          }),
        }}
        placeholder="Produkt"
        isClearable
        isSearchable={false}
        options={products}
        value={value}
        onChange={(selectedProduct) =>
          onChange(selectedProduct as ProductSelectValue)
        }
        formatOptionLabel={(option: any) => <div>{option.name}</div>}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "rgba(92, 92, 92, 0.8)",
            primary25: "rgba(20, 20, 20, 0.3)",
          },
        })}
      />
    </div>
  );
};

export default ProductSelect;
