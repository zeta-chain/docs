import { useLockBodyScroll, useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import { DocSidebarDesktop } from "../../DocSidebar";

// another example of docusaurus being awful, the build breaks when using this hook if we don't check for window
const useDocsSidebar =
  typeof window !== "undefined" ? require("@docusaurus/theme-common/internal").useDocsSidebar : () => ({ items: [] });

export default function NavbarMobileSidebar() {
  const mobileSidebar = useNavbarMobileSidebar();
  const docsSidebar = useDocsSidebar();

  useLockBodyScroll(mobileSidebar.shown);

  if (!mobileSidebar.shown) {
    return null;
  }

  return (
    <div className="w-full absolute m-0 top-[60px] p-0 left-0 overflow-y-scroll h-screen bg-white dark:bg-black">
      <DocSidebarDesktop path={window?.location?.pathname || ""} sidebar={docsSidebar.items} />
    </div>
  );
}
