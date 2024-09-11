import { useState } from "react";
import { bech32 } from "bech32";
import { ethers } from "ethers";
import QRCode from "react-qr-code";
import { convertAddress } from "../AddressConverter.utils";

export const AddressConverter = () => {
  const [address, setAddress] = useState("");
  const [convertedAddress, setConvertedAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const isValidAddress = (address: string) => {
    try {
      if (address.startsWith("0x")) {
        return ethers.utils.isAddress(address);
      } else {
        const decoded = bech32.decode(address);
        return decoded.prefix === "zeta";
      }
    } catch (error) {
      return false;
    }
  };

  const handleConversion = () => {
    setErrorMessage("");
    if (!isValidAddress(address)) {
      setErrorMessage("Invalid address format.");
      return;
    }

    try {
      let converted = convertAddress(address);
      setConvertedAddress(converted);
    } catch (error) {
      setErrorMessage("Conversion failed.");
      console.error(error);
    }
  };

  const copyToClipboard = () => {
    if (convertedAddress) {
      navigator.clipboard.writeText(convertedAddress);
      alert("Address copied to clipboard!");
    }
  };

  const isChecksummed = (address: string) => {
    try {
      return address === ethers.utils.getAddress(address);
    } catch {
      return false;
    }
  };

  return (
    <div className="mt-8 first:mt-0">
      <div className="flex items-center gap-3 mb-3">
        <input
          type="text"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          placeholder="0x or zeta address"
          className="border border-grey-200 dark:border-grey-500 rounded p-3 sm:w-[450px] bg-transparent dark:bg-grey-800 outline-none"
        />
        <button
          type="button"
          onClick={handleConversion}
          className="border border-grey-200 dark:border-grey-500 rounded p-3 hover:border-green-100 hover:dark:border-green-100 transition-[border-color]"
        >
          Convert
        </button>
      </div>

      {errorMessage && <p className="text-red-500 mb-3">{errorMessage}</p>}

      <p style={{ marginBottom: "1rem" }}>Converted address: {convertedAddress}</p>

      {address.startsWith("0x") && (
        <p style={{ marginBottom: "1rem" }}>
          {isChecksummed(address) ? "This address is checksummed." : "This address is not checksummed."}
        </p>
      )}

      {convertedAddress && (
        <button
          onClick={copyToClipboard}
          className="border border-grey-200 dark:border-grey-500 rounded p-3 hover:border-green-100 hover:dark:border-green-100 transition-[border-color] mb-3"
        >
          Copy to Clipboard
        </button>
      )}

      {convertedAddress && (
        <div className="mt-3">
          <QRCode value={convertedAddress} size={128} />
        </div>
      )}
    </div>
  );
};

export default AddressConverter;
