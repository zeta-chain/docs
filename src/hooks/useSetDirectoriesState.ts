import { getAllPages } from "nextra/context";
import { useEffect, useMemo } from "react";

import { useAppDispatch } from "../lib/app.store";
import { setDirectories, setPages } from "../lib/directories/directories.redux";
import { getDirectories } from "../lib/helpers/nextra";

export const useSetDirectoriesState = () => {
  const allPages = getAllPages();

  const { flatDirectories, directoriesByRoute } = useMemo(() => getDirectories(allPages), [allPages]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!allPages.length) return;

    dispatch(setPages(allPages));
  }, [allPages]);

  useEffect(() => {
    if (!flatDirectories.length || !directoriesByRoute) return;

    dispatch(setDirectories({ flatDirectories, directoriesByRoute }));
  }, [flatDirectories, directoriesByRoute]);
};
