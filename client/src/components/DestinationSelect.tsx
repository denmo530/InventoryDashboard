import React from "react";
import Select from "react-select";
import useLocations from "../hooks/useLocations";

export type LocationSelectValue = {
  city: string;
  value: string;
};

interface LocationSelectProps {
  value?: LocationSelectValue;
  onChange: (value: LocationSelectValue) => void;
}

const LocationSelect: React.FC<LocationSelectProps> = ({ value, onChange }) => {
  const locations = useLocations();

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
        placeholder="Destination"
        isClearable
        isSearchable={false}
        options={locations}
        value={value}
        onChange={(selectedLocation) =>
          onChange(selectedLocation as LocationSelectValue)
        }
        formatOptionLabel={(option: any) => <div>{option.city}</div>}
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

export default LocationSelect;
