declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}

declare module "@zetachain/toolkit/query" {
  type ZetachainNetworkConfig = {
    api: string;
    rpc: string;
  };

  export function getFees(
    params: { gasLimit: number },
    networkConfig: ZetachainNetworkConfig
  ): Promise<unknown>;
}
