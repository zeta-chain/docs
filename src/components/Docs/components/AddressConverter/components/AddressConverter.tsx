import { useState } from "react";
import { bech32 } from "bech32";
import { ethers } from "ethers";
import QRCode from "react-qr-code";
import { convertAddress } from "../AddressConverter.utils";

export const AddressConverter = () => {
  const [address, setAddress] = useState("");
  const [convertedAddress, setConvertedAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isChecksumAddress, setIsChecksumAddress] = useState(false);

  // Check if the address is valid (ignoring checksum)
  const isValidAddress = (address: string) => {
    try {
      if (address.startsWith("0x")) {
        // Validate Ethereum address without considering checksum
        return ethers.utils.isAddress(address.toLowerCase());
      } else {
        const decoded = bech32.decode(address);
        return decoded.prefix === "zeta";
      }
    } catch (error) {
      return false;
    }
  };

  const handleConversion = () => {
    setErrorMessage(""); // Reset error message

    if (!isValidAddress(address)) {
      setErrorMessage("Invalid address format.");
      return;
    }

    try {
      // Convert address if the address is valid
      let converted = convertAddress(address);
      setConvertedAddress(converted);

      // If it's an Ethereum address, check if it's checksummed
      if (address.startsWith("0x")) {
        // Handle non-checksummed addresses without throwing errors
        try {
          setIsChecksumAddress(address === ethers.utils.getAddress(address));
        } catch (error) {
          setIsChecksumAddress(false); // Non-checksummed address
        }
      } else {
        setIsChecksumAddress(false); // Not applicable for ZetaChain addresses
      }

      setErrorMessage(""); // Clear error if conversion succeeds
    } catch (error) {
      setErrorMessage("Conversion failed, but the address is valid.");
      console.error("Conversion error:", error);
    }
  };

  const copyToClipboard = () => {
    if (convertedAddress) {
      navigator.clipboard.writeText(convertedAddress);
      alert("Address copied to clipboard!");
    }
  };

  const handleAddressChange = (event) => {
    const newAddress = event.target.value;
    setAddress(newAddress);
    setErrorMessage(""); // Reset error message when input changes
    setConvertedAddress(""); // Reset converted address

    // Check checksum status for Ethereum addresses
    if (newAddress.startsWith("0x") && isValidAddress(newAddress)) {
      try {
        setIsChecksumAddress(newAddress === ethers.utils.getAddress(newAddress));
      } catch (error) {
        setIsChecksumAddress(false); // Handle non-checksummed addresses gracefully
      }
    } else {
      setIsChecksumAddress(false);
    }
  };

  const getButtonStatus = () => {
    if (!address) return "Enter an address";
    if (!isValidAddress(address)) return "Invalid address";
    return "Convert";
  };

  return (
    <div className="mt-8 first:mt-0">
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
          onClick={handleConversion}
          disabled={!address || !isValidAddress(address)}
          className="whitespace-nowrap border border-grey-200 dark:border-grey-500 rounded p-3 hover:border-green-100 hover:dark:border-green-100 transition-[border-color] disabled:opacity-50 disabled:cursor-not-allowed min-w-[170px]"
        >
          {getButtonStatus()}
        </button>
      </div>

      {errorMessage && <p className="text-red-500 mb-3">{errorMessage}</p>}

      {/* Only show checksum status for valid Ethereum addresses */}
      {address.startsWith("0x") && isValidAddress(address) && (
        <p style={{ marginBottom: "1rem" }}>
          {isChecksumAddress ? (
            "This address is checksummed."
          ) : (
            <>
              This address is{" "}
              <a
                href="https://docs.alchemy.com/docs/how-to-handle-checksum-addresses"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                not checksummed
              </a>
              .
            </>
          )}
        </p>
      )}

      {convertedAddress && <p style={{ marginBottom: "1rem" }}>Converted address: {convertedAddress}</p>}

      {convertedAddress && (
        <button
          onClick={copyToClipboard}
          className="border border-grey-200 dark:border-grey-500 rounded p-3 hover:border-green-100 hover:dark:border-green-100 transition-[border-color] mb-3"
        >
          Copy to Clipboard
        </button>
      )}

      {convertedAddress && (
        <div className="mt-3 flex">
          <div className="border border-8 border-white rounded-md">
            <QRCode value={convertedAddress} size={128} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressConverter;
