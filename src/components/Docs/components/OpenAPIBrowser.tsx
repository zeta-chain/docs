import "swagger-ui-react/swagger-ui.css";

import { Skeleton } from "@mui/material";
import axios from "axios";
import yaml from "js-yaml";
import { useEffect, useState } from "react";
import SwaggerUI from "swagger-ui-react";
import tw, { styled } from "twin.macro";

import { basePath } from "~/lib/app.constants";
import { NetworkType } from "~/lib/app.types";

const activeStyles = { fontWeight: "bold", textDecoration: "underline" };
const inactiveStyles = { fontWeight: "normal", textDecoration: "none" };

const StyledContainer = styled.div`
  .swagger-ui {
    ${tw`dark:[filter: invert(88%) hue-rotate(180deg);]`}

    table {
      thead tr,
      tbody tr:nth-of-type(even) {
        ${tw`bg-grey-100/60 dark:bg-[transparent]`};
      }

      th,
      td {
        ${tw`!p-2`};
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

export const OpenAPIBrowser = () => {
  const [activeTab, setActiveTab] = useState<NetworkType>("testnet");
  const [swaggerUrl, setSwaggerUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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
            activeTab === "testnet"
              ? "zetachain-athens.blockpi.network/lcd/v1/public"
              : "zetachain.blockpi.network/lcd/v1/public";
          modifiedSwagger.schemes = ["https"];
          modifiedSwagger.info.title = "";

          const blob = new Blob([JSON.stringify(modifiedSwagger)], {
            type: "application/json",
          });

          const url = URL.createObjectURL(blob);

          setSwaggerUrl(url);
        }
      } catch (error) {
        console.error("Error fetching or modifying Swagger file:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSwaggerFile();
  }, [activeTab]);

  return (
    <StyledContainer className="mt-6">
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        <button
          type="button"
          style={activeTab === "testnet" ? activeStyles : inactiveStyles}
          onClick={() => setActiveTab("testnet")}
        >
          Testnet
        </button>

        <button
          type="button"
          style={activeTab === "mainnet" ? activeStyles : inactiveStyles}
          onClick={() => setActiveTab("mainnet")}
        >
          Mainnet Beta
        </button>
      </div>

      {isLoading ? (
        <Skeleton
          variant="rectangular"
          height={100}
          className="rounded mb-5 last-of-type:mb-0 bg-grey-200 dark:bg-grey-600"
        />
      ) : (
        <SwaggerUI url={swaggerUrl} />
      )}
    </StyledContainer>
  );
};
