import { useRouter } from "next/router";

const addPaths = (basePath: string, chapters: ContentTree): ContentTree => {
  return chapters.map((chapter) => {
    return {
      ...chapter,
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
  children?: ContentTree;
}[];

const useContentTree = (props: ContentTree): ContentTree => {
  const router = useRouter();
  return props.map((section, index) => {
    return {
      id: `${section.name}-${index}`,
      name: section.name,
      path: "",
      children: !!section.children
        ? addPaths(router.pathname, section.children)
        : undefined,
    };
  });
};

export { useContentTree as default, normalizePathName };
