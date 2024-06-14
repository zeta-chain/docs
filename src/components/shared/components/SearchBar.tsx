import styled from "@emotion/styled";
import { SearchIcon } from "lucide-react";
import React from "react";

import { useCommandMenu } from "./Cmdk";

const StyledSearchBar = styled.div``;

export const SearchBar: React.FC<SearchBarProps> = ({ ...props }) => {
  const { setIsOpen } = useCommandMenu();
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className="relative">
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      <input
        ref={inputRef}
        onClick={() => {
          console.log("yes");
          setIsOpen(true);
        }}
        onFocus={() => {
          inputRef.current?.blur();
        }}
        type="text"
        placeholder="Search the docs"
        className="bg-gray-900 text-gray-400 placeholder-gray-400 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
      />
    </div>
  );
};

interface SearchBarProps {}
