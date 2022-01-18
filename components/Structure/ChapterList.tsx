import Link from "next/link";

import styles from "./ChapterList.module.scss";

type Props = {
  title: string;
  chapters: { name: string; path: string }[];
};

const ChapterList: React.FC<Props> = ({ title, chapters }) => {
  return (
    <section className={styles.container}>
      <div className={styles.title}>{title}</div>
      <ol className={styles.list}>
        {chapters.map((chapter) => {
          return (
            <li className={styles.item} key={chapter.name}>
              <Link href={chapter.path}>
                <a className={styles.chapterLink}>{chapter.name}</a>
              </Link>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default ChapterList;
