const getSubChapterPath = (name: string, basePath: string): string => {
  console.log(`${basePath}/${normalizePathName(name)}`);
  return `${basePath}/${normalizePathName(name)}`;
};

const normalizePathName = (pathname: string) => {
  return pathname.toLowerCase().replace(/ /g, "-");
};

// 1st layer determines the chapter.
// 2nd layer determines the subchapter.
// 3rd layer determines the section within a subchapter.

// A course is comprised of a number of chapters.
export type Course = {
  baseURI: string;
  chapters: Chapter[];
};

// A chapter consists of a number of subchapters and it doesn't have a particular page,
// chapter is just used as part of the path in the final URI.
export type Chapter = { id: string; name: string; children: SubChapters };

// A subchapter forms a page and it contains a number of sections.
export type SubChapters = {
  id: string;
  name: string;
  path: string;
  children?: Section[];
}[];

// A section lives within a subchapter page, it has an anchor link that allows the user
// to jump to this particular section.
type Section = {
  id: string;
  name: string;
};

const useCourse = (course: Course): Course => {
  console.log("===== useCourse =====");
  return {
    ...course,
    chapters: course.chapters.map((chapter) => {
      const chapterPath =
        "/courses/" + course.baseURI + normalizePathName(chapter.name);
      return {
        ...chapter,
        id: chapterPath,
        children: configureSubChapters(chapter.children, chapterPath),
      };
    }),
  };
};

const configureSubChapters = (
  subChapter: SubChapters,
  basePath: string
): SubChapters => {
  return subChapter.map((subChapter) => {
    if (!!subChapter.children) {
      subChapter.path = getSubChapterPath(subChapter.name, basePath);
      return {
        ...subChapter,
        id: getSubChapterPath(subChapter.name, basePath),
        children: configureSections(subChapter.path, subChapter.children),
      };
    }
    return {
      ...subChapter,
      id: getSubChapterPath(subChapter.name, basePath),
      path: getSubChapterPath(subChapter.name, basePath),
    };
  });
};

const configureSections = (
  basePath: string,
  sections: Section[]
): Section[] => {
  return sections.map((section) => {
    // {"id":"/courses/blockchain/introduction/introduction-of-blockchain#smart-contract","name":"Smart Contract"}
    return { ...section, id: `${basePath}#${normalizePathName(section.name)}` };
  });
};

export { useCourse as default, normalizePathName };
