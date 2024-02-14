import React, { useState } from "react";
import { convertAddress } from "./convertAddress";

export const AddressConverter: React.FC<{}> = () => {
  const [address, setAddress] = useState("");
  const [convertedAddress, setConvertedAddress] = useState("");

  const handleAddressChange = (e: any) => {
    setAddress(e.target.value);
  };

  const handleConvert = () => {
    try {
      const converted = convertAddress(address);

      setConvertedAddress(converted);
    } catch (e) {}
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <input
          type="text"
          value={address}
          onChange={handleAddressChange}
          placeholder="0x or zeta address"
          className="border border-grey-200 dark:border-grey-500 rounded p-3 sm:w-[450px] bg-transparent dark:bg-grey-800 outline-none"
        />

        <button
          type="button"
          onClick={handleConvert}
          className="border border-grey-200 dark:border-grey-500 rounded p-3 hover:border-green-100 hover:dark:border-green-100 transition-[border-color]"
        >
          Convert
        </button>
      </div>
      <p style={{ marginBottom: "1rem" }}>
        Converted address: {convertedAddress}
      </p>
    </div>
  );
};

export default AddressConverter;
