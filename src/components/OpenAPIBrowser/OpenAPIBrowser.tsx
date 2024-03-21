import React, { useState, useEffect } from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import axios from "axios";
import yaml from "js-yaml";

const ZetaChainAPI = () => {
  const { siteConfig } = useDocusaurusContext();
  const [activeTab, setActiveTab] = useState("testnet");
  const [swaggerUrl, setSwaggerUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const active = { fontWeight: "bold", textDecoration: "underline" };
  const inactive = { fontWeight: "normal", textDecoration: "none" };

  useEffect(() => {
    const fetchSwaggerFile = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          siteConfig.baseUrl + "data/openapi.swagger.yaml",
          { responseType: "text" }
        );
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
  }, [activeTab, siteConfig.baseUrl]);

  return (
    <div>
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        <button
          style={activeTab === "testnet" ? active : inactive}
          onClick={() => setActiveTab("testnet")}
        >
          Testnet
        </button>
        <button
          style={activeTab === "mainnet" ? active : inactive}
          onClick={() => setActiveTab("mainnet")}
        >
          Mainnet Beta
        </button>
      </div>
      {isLoading ? <p>Loading...</p> : <SwaggerUI url={swaggerUrl} />}
    </div>
  );
};

export default ZetaChainAPI;
