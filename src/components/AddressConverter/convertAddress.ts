import { bech32 } from "bech32";

export const convertAddress = (address: string) => {
  let converted;
  if (address.startsWith("0x")) {
    const data = Buffer.from(address.substr(2), "hex");
    converted = bech32.encode("zeta", bech32.toWords(data));
  } else {
    const decoded = bech32.decode(address);
    converted =
      "0x" + Buffer.from(bech32.fromWords(decoded.words)).toString("hex");
  }
  return converted;
};
