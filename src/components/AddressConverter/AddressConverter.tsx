import React, { useState } from "react";
import { bech32 } from "bech32";

export const AddressConverter: React.FC<{}> = () => {
  const [address, setAddress] = useState("");
  const [convertedAddress, setConvertedAddress] = useState("");

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleConvert = () => {
    try {
      let converted = "1";
      if (address.startsWith("0x")) {
        const data = Buffer.from(address.substr(2), "hex");
        converted = bech32.encode("zeta", bech32.toWords(data));
      } else {
        // Convert from bech32 to hex
        const decoded = bech32.decode(address);
        converted =
          "0x" + Buffer.from(bech32.fromWords(decoded.words)).toString("hex");
      }

      setConvertedAddress(converted);
    } catch (e) {}
  };

  // Define styles
  const inputStyle = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "10px",
    margin: "10px 0",
    marginRight: "10px",
    width: "450px",
  };

  const buttonStyle = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "10px",
    cursor: "pointer",
    backgroundColor: "#eee",
  };

  return (
    <div>
      <input
        type="text"
        value={address}
        onChange={handleAddressChange}
        placeholder="0x or zeta address"
        style={inputStyle}
      />
      <button onClick={handleConvert} style={buttonStyle}>
        Convert
      </button>
      <p>Converted address: {convertedAddress}</p>
    </div>
  );
};

export default AddressConverter;
