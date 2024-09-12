import { bech32 } from "bech32";
import { ethers } from "ethers";
import { useState } from "react";
import QRCode from "react-qr-code";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "nextra-theme-docs";

import { convertAddress } from "../AddressConverter.utils";

export const AddressConverter = () => {
  const [address, setAddress] = useState("");
  const [convertedAddress, setConvertedAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isChecksumAddress, setIsChecksumAddress] = useState(false);

  const { theme } = useTheme();

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
    setErrorMessage("");

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
      toast.success("Address copied to clipboard!", {
        theme,
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleAddressChange = (event: any) => {
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
    <div className="mt-8">
      <ToastContainer />
      <div className="h-[16px] mb-4 text-sm text-gray-500">
        {address.startsWith("0x") && isValidAddress(address) && (
          <p>
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
      </div>

      <div className="flex items-center gap-3 mb-3">
        <input
          type="text"
          value={address}
          onChange={handleAddressChange}
          placeholder="0x or zeta address"
          autoComplete="off"
          className="tracking-wide border border-gray-200 dark:border-gray-500 rounded p-3 sm:w-[450px] bg-transparent dark:bg-gray-800 outline-none"
        />
        <button
          type="button"
          onClick={handleConversion}
          disabled={!address || !isValidAddress(address)}
          className="border border-gray-200 dark:border-gray-500 rounded p-3 hover:border-green-100 hover:dark:border-green-100 transition disabled:opacity-50 disabled:cursor-not-allowed min-w-[150px] whitespace-nowrap"
        >
          {getButtonStatus()}
        </button>
      </div>

      {errorMessage && <p className="text-red-500 mb-3">{errorMessage}</p>}

      {convertedAddress && (
        <div className="flex items-center gap-3 mb-3">
          <input
            type="text"
            value={convertedAddress}
            disabled
            className="tracking-wide border border-gray-200 dark:border-gray-500 rounded p-3 sm:w-[450px] bg-transparent dark:bg-gray-800 outline-none"
          />
          <button
            onClick={copyToClipboard}
            className="border border-gray-200 dark:border-gray-500 rounded p-3 hover:border-green-100 hover:dark:border-green-100 transition min-w-[150px] whitespace-nowrap"
          >
            Copy
          </button>
        </div>
      )}

      {convertedAddress && (
        <div className="mt-3 flex">
          <div className="border-8 border-white rounded-md">
            <QRCode value={convertedAddress} size={128} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressConverter;
