// Course -> Unit -> Chapter -> SubChapter
// A course is comprised of a number of units.
export type Course = {
  landingPageURI: string,
  baseURI: string;
  name: string;
  units: Unit[];
  description: string;
};

// A unit consists of a number of chapters and it doesn't have a particular page,
// Unit is just used as part of the path in the final URI.
export type Unit = { id: string; name: string; children: Chapter[] };

// A chapter forms a page and it contains a number of subchapters.
export type Chapter = {
  id: string;
  name: string;
  path: string;
  children?: SubChapter[];
  min: number;
};

// A subchapter lives within a chapter page, it has an anchor link that allows the user
// to jump to this particular subchapter.
type SubChapter = {
  id: string;
  name: string;
  path: string;
};

const useCourse = (course: Course): Course => {
  console.log("===== useCourse =====");
  return {
    ...course,
    units: course.units.map((unit) => {
      const unitPath =
        "/courses/" + course.baseURI + normalizePathName(unit.name);
      return {
        ...unit,
        id: unitPath,
        children: configureChapters(unit.children, unitPath),
      };
    }),
  };
};

const configureChapters = (
  chapters: Chapter[],
  basePath: string
): Chapter[] => {
  return chapters.map((chapter) => {
    if (!!chapter.children) {
      chapter.path = getChapterPath(chapter.name, basePath);
      return {
        ...chapter,
        id: getChapterPath(chapter.name, basePath),
        children: configureSubChapters(chapter.path, chapter.children),
      };
    }
    return {
      ...chapter,
      id: getChapterPath(chapter.name, basePath),
      path: getChapterPath(chapter.name, basePath),
    };
  });
};

const configureSubChapters = (
  basePath: string,
  subchapters: SubChapter[]
): SubChapter[] => {
  return subchapters.map((chapter) => {
    // {"id":"/courses/blockchain/introduction/what-is-a-blockchain#smart-contract","name":"Smart Contract"}
    const pathToSubChapter = `${basePath}#${normalizePathName(chapter.name)}`;
    return { ...chapter, id: pathToSubChapter, path: pathToSubChapter };
  });
};

const getChapterPath = (name: string, basePath: string): string => {
  return `${basePath}/${normalizePathName(name)}`;
};

const normalizePathName = (pathname: string) => {
  return pathname.toLowerCase().replace(/ /g, "-");
};

export { useCourse as default, normalizePathName };
