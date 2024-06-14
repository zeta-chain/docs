import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocalStorage } from "react-use";

import { NetworkType } from "~/lib/app.types";

import { lsSelectedNetworkType, NetworkTypeTab, networkTypeTabs } from "../Tabs.constants";
import { NavTabs } from "./NavTabs";

type NetworkTypeTabsProps = {
  activeTab: NetworkTypeTab;
  setActiveTab: (item: NetworkTypeTab) => void;
  className?: string;
  layoutIdPrefix?: string;
};

export const NetworkTypeTabs: React.FC<NetworkTypeTabsProps> = ({
  activeTab,
  setActiveTab,
  className,
  layoutIdPrefix,
}) => {
  const [selectedNetworkType, setSelectedNetworkType] = useLocalStorage<NetworkType>(lsSelectedNetworkType);

  const selectedTab = useMemo(
    () => networkTypeTabs.find((item) => item.networkType === selectedNetworkType) || activeTab,
    [activeTab, selectedNetworkType]
  );

  const [tabToUse, setTabToUse] = useState(activeTab);

  useEffect(() => {
    setTabToUse(selectedTab);
    if (selectedTab.networkType !== activeTab.networkType) setActiveTab(selectedTab);
  }, [selectedTab]);

  const handleSetActiveTab = useCallback(
    (item: NetworkTypeTab) => {
      setActiveTab(item);
      setSelectedNetworkType(item.networkType);
    },
    [setActiveTab, setSelectedNetworkType]
  );

  return (
    <NavTabs
      tabs={networkTypeTabs}
      activeTab={tabToUse}
      setActiveTab={handleSetActiveTab}
      className={className}
      layoutIdPrefix={layoutIdPrefix}
    />
  );
};
