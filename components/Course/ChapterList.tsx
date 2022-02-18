import Link from "next/link";
import { Chapter } from "../../hooks/useCourse";

import styles from "./ChapterList.module.scss";

type Props = {
  title: string;
  chapters: Chapter[];
};

const ChapterList: React.FC<Props> = ({ title, chapters }) => {
  return (
    <section className={styles.container}>
      <div className={styles.title}>{title}</div>
      <ol className={styles.list}>
        {chapters.map((chapter) => {
          return (
            <div key={chapter.name}>
              <li className={styles.item}>
                <Link href={chapter.path}>
                  <a className={styles.chapterLink}>{chapter.name}</a>
                </Link>
              </li>
              <ul>
                {chapter.children?.map((subChapter) => {
                  return (
                    <li key={subChapter.id} className={styles.item}>
                      <Link href={subChapter.id}>
                        <a className={styles.chapterLink}>{subChapter.name}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </ol>
    </section>
  );
};

export default ChapterList;
