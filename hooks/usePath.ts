import { useRouter } from "next/router";

const addPaths = (basePath: string, chapters: { name: string }[]) => {
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

export type usePathProps = {
  sectionName: string;
  subSections: {
    name: string;
    path: string;
  }[];
}[];

const usePath = (props: usePathProps): usePathProps => {
  const router = useRouter();
  return props.map((section) => {
    return {
      sectionName: section.sectionName,
      subSections: (section.subSections = addPaths(
        router.pathname,
        section.subSections
      )),
    };
  });
};

export { usePath as default, normalizePathName };
