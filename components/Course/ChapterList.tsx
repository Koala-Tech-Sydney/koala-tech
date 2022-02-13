import Link from "next/link";
import { SubChapters } from "../../hooks/useCourse";

import styles from "./ChapterList.module.scss";

type Props = {
  title: string;
  subChapters: SubChapters;
};

const ChapterList: React.FC<Props> = ({ title, subChapters }) => {
  return (
    <section className={styles.container}>
      <div className={styles.title}>{title}</div>
      <ol className={styles.list}>
        {subChapters.map((subChapter) => {
          return (
            <div key={subChapter.name}>
              <li className={styles.item}>
                <Link href={subChapter.path}>
                  <a className={styles.chapterLink}>{subChapter.name}</a>
                </Link>
              </li>
              <ul>
                {subChapter.children?.map((section) => {
                  return (
                    <li key={section.id} className={styles.item}>
                      <Link href={section.id}>
                        <a className={styles.chapterLink}>{section.name}</a>
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
