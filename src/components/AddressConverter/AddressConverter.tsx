import React, { useState } from "react";
import { bech32 } from "bech32";

export const AddressConverter: React.FC<{}> = () => {
  const [address, setAddress] = useState("");
  const [convertedAddress, setConvertedAddress] = useState("");

  const handleAddressChange = (e: any) => {
    setAddress(e.target.value);
  };

  const handleConvert = () => {
    try {
      let converted;
      if (address.startsWith("0x")) {
        const data = Buffer.from(address.substr(2), "hex");
        converted = bech32.encode("zeta", bech32.toWords(data));
      } else {
        const decoded = bech32.decode(address);
        converted =
          "0x" + Buffer.from(bech32.fromWords(decoded.words)).toString("hex");
      }

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
      <p>Converted address: {convertedAddress}</p>
    </div>
  );
};

export default AddressConverter;
