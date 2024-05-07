import { bech32 } from "bech32";

export const convertAddress = (address: string) => {
  let convertedAddress;

  if (address.startsWith("0x")) {
    const data = Buffer.from(address.substr(2), "hex");
    convertedAddress = bech32.encode("zeta", bech32.toWords(data));
  } else {
    const decoded = bech32.decode(address);
    convertedAddress = `0x${Buffer.from(bech32.fromWords(decoded.words)).toString("hex")}`;
  }

  return convertedAddress;
};
