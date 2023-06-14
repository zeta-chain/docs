import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import React, { useState } from "react";

const SearchBar = () => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const { siteConfig } = useDocusaurusContext();

  return (
    <div>
      <input
        type="text"
        placeholder="Need to find something?"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        // className={isFocus ? styles.searchInput : ""}
      />
      {isFocus ? (
        <img
          src={`${siteConfig.baseUrl}img/icons/search-black.png`}
          alt="search"
        />
      ) : (
        <img src={`${siteConfig.baseUrl}img/icons/search.png`} alt="search" />
      )}
    </div>
  );
};

export default SearchBar;
