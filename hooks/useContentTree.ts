import { useRouter } from "next/router";

const addPaths = (basePath: string, chapters: ContentTree): ContentTree => {
  return chapters.map((chapter) => {
    return {
      ...chapter,
      id: `${basePath}/${normalizePathName(chapter.name)}`,
      children: useContentTree(chapter.children),
      path: `${basePath}/${normalizePathName(chapter.name)}`,
    };
  });
};

const normalizePathName = (pathname: string) => {
  return pathname.toLowerCase().replace(/ /g, "-");
};

export type ContentTree = {
  id: string;
  name: string;
  path: string;
  children: ContentTree | null;
}[];

const useContentTree = (props: ContentTree | null): ContentTree | null => {
  const router = useRouter();
  return !!props
    ? props.map((section, index) => {
        return {
          id: `${section.name}-${index}`,
          name: section.name,
          path: "",
          children: !!section.children
            ? addPaths(router.pathname, section.children)
            : null,
        };
      })
    : null;
};

export { useContentTree as default, normalizePathName };
