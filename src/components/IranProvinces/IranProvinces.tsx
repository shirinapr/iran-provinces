import React from "react";
import provinces from "./data.json";

export interface Props {
  label?: string;
  className?: string;
  labelClass?: string;
  selectClass?: string;
  optionClass?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  language?: "english" | "persian";
}

const IranProvinces = ({
  label,
  className,
  labelClass,
  language,
  onChange,
  selectClass,
  optionClass,
  placeholder,
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange({
      ...e,
      target: {
        ...e.target,
        value: provinces.find((x) => x.english === e.target.value),
      },
    });
  };

  return (
    <div className={className}>
      {label ? <label className={labelClass}>{label}</label> : ""}

      <select
        onChange={handleChange}
        className={selectClass}
        placeholder={placeholder}
      >
        {provinces.map((x) => (
          <option key={x.english} value={x.english} className={optionClass}>
            {language === "persian" ? x.persian : x.english}
          </option>
        ))}
      </select>
    </div>
  );
};

IranProvinces.defaultProps = {
  label: "",
  className: "",
  labelClass: "",
  selectClass: "",
  optionClass: "",
  placeholder: "",
  language: "persian",
};

export default IranProvinces;
