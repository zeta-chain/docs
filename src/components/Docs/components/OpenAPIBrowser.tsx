import "swagger-ui-react/swagger-ui.css";

import axios from "axios";
import yaml from "js-yaml";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import tw, { styled } from "twin.macro";

import { LoadingTable, NetworkTypeTabs, networkTypeTabs } from "~/components/shared";
import { basePath } from "~/lib/app.constants";

const StyledContainer = styled.div`
  .swagger-ui {
    ${tw`dark:[filter: invert(88%) hue-rotate(180deg);]`}

    table {
      tbody tr:nth-of-type(even) {
        ${tw`bg-grey-100/60 dark:bg-[transparent]`};
      }

      th,
      td {
        ${tw`!p-2 border border-grey-200 dark:border-grey-600 text-left text-[#3b4151] dark:text-[#3b4151]`};
      }
    }

    .microlight {
      ${tw`dark:[filter: invert(100%) hue-rotate(180deg);]`}
    }

    .opblock-body pre.microlight {
      ${tw`dark:!bg-black`}
    }

    button {
      ${tw`focus:outline-0 focus:shadow-none focus:ring-0 focus:ring-offset-0 shadow-none`}
    }

    .scheme-container {
      ${tw`bg-[transparent] shadow-none p-0`}

      .schemes-title {
        ${tw`mb-1`}
      }
    }
  }
`;

// Dynamically import SwaggerUI to disable server-side rendering
const SwaggerUI = dynamic(() => import("swagger-ui-react"), { ssr: false });

export const OpenAPIBrowser = () => {
  const [activeTab, setActiveTab] = useState(networkTypeTabs[0]);
  const [isLoading, setIsLoading] = useState(true);

  const [mainnetSwaggerUrl, setMainnetSwaggerUrl] = useState("");
  const [testnetSwaggerUrl, setTestnetSwaggerUrl] = useState("");

  useEffect(() => {
    const fetchSwaggerFile = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(`${basePath}/data/openapi.swagger.yaml`, {
          responseType: "text",
        });

        if (response.data) {
          const swaggerJson = yaml.load(response.data) as any;
          const modifiedSwagger = { ...swaggerJson };

          modifiedSwagger.host =
            activeTab.networkType === "testnet"
              ? "zetachain-athens.blockpi.network/lcd/v1/public"
              : "zetachain.blockpi.network/lcd/v1/public";
          modifiedSwagger.schemes = ["https"];
          modifiedSwagger.info.title = "";

          const blob = new Blob([JSON.stringify(modifiedSwagger)], {
            type: "application/json",
          });

          const url = URL.createObjectURL(blob);

          if (activeTab.networkType === "mainnet") setMainnetSwaggerUrl(url);
          if (activeTab.networkType === "testnet") setTestnetSwaggerUrl(url);
        }
      } catch (error) {
        console.error("Error fetching or modifying Swagger file:", error);
        if (activeTab.networkType === "mainnet") setMainnetSwaggerUrl("");
        if (activeTab.networkType === "testnet") setTestnetSwaggerUrl("");
      } finally {
        setIsLoading(false);
      }
    };

    fetchSwaggerFile();
  }, [activeTab.networkType]);

  const swaggerUrl = useMemo(() => {
    return activeTab.networkType === "mainnet" ? mainnetSwaggerUrl : testnetSwaggerUrl;
  }, [activeTab.networkType, mainnetSwaggerUrl, testnetSwaggerUrl]);

  return (
    <StyledContainer className="mt-8 first:mt-0">
      <NetworkTypeTabs activeTab={activeTab} setActiveTab={setActiveTab} layoutIdPrefix="open-api-browser-" />

      {isLoading ? <LoadingTable rowCount={1} /> : <SwaggerUI url={swaggerUrl} />}
    </StyledContainer>
  );
};
