// Course -> Unit -> Chapter -> SubChapter
// A course is comprised of a number of units.
export type Course = {
  baseURI: string;
  name: string;
  units: Unit[];
  description: string | JSX.Element;
};

// A unit consists of a number of chapters and it doesn't have a particular page,
// Unit is just used as part of the path in the final URI.
export type Unit = { id: string; name: string; chapters: Chapter[] };

// A chapter forms a page and it contains a number of subchapters.
export type Chapter = {
  id: string;
  name: string;
  path: string;
  subchapters?: SubChapter[];
  requiredReadingTimeInMinute: number;
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
      const unitPath = course.baseURI + normalizePathName(unit.name);
      console.log(`unit: ${unitPath}`);
      return {
        ...unit,
        id: unitPath,
        chapters: configureChapters(unit.chapters, unitPath),
      };
    }),
  };
};

const configureChapters = (
  chapters: Chapter[],
  basePath: string
): Chapter[] => {
  return chapters.map((chapter) => {
    chapter.path = getChapterPath(chapter.name, basePath);
    if (!!chapter.subchapters) {
      console.log(`chapter: ${chapter.path}`);
      return {
        ...chapter,
        id: chapter.path,
        subchapters: configureSubChapters(chapter.path, chapter.subchapters),
      };
    }
    return {
      ...chapter,
      id: chapter.path,
      path: chapter.path,
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
    console.log(`subchapter: ${pathToSubChapter}`);
    return { ...chapter, id: pathToSubChapter, path: pathToSubChapter };
  });
};

const getChapterPath = (name: string, basePath: string): string => {
  return `${basePath}/${normalizePathName(name)}`;
};

const normalizePathName = (pathname: string) => {
  return pathname
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/\?/g, "")
    .replace(/\,/g, "");
};

export { useCourse as default, normalizePathName };
