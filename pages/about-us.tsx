import styles from "./about-us.module.scss";

import NameCard from "../components/Card/NameCard";
import TwoSidesMainSection from "../components/Structure/TwoSidesMainSection";
import { SmallText } from "../components/Text/Text";

const tutorList = [
  {
    name: "Stephen Fong",
    backgroundImage: {
      uri: "images\\about-us\\sydney.jpg",
      alt: "Sydney Opera House and Sydney Harbour Bridge",
    },
    avatarImage: {
      uri: "images\\about-us\\stephenfong.png",
    },
    position: "Full Stack Developer, Blockchain Enthusiast",
    shortDescription:
      "Don't focus on your goal, instead, focus on the building blocks of your goal.",
    longDescription: (
      <SmallText>
        When I started learning to code - around the age of 17 - I found coding
        hard because understanding those new concepts aren&apos;t easy.
        <br />
        <br />
        However, the more I code, the more I enjoy coding. I love diving into
        complex problems and I think that it&apos;s really an amazing feeling to
        see a website or program to be built from scratch!
        <br />
        <br />
        Four years after I started learning how to code, I have learnt more than
        a dozen languages, and a bunch of frameworks. What I find out is the
        crux of coding is not learning more and more languages or frameworks,
        but to understand the idea behind each language and framework. Each tool
        is built for some purposes, and whenever you learn a language or a
        framework that is built for a different purpose, you unlock a different
        way of thinking. So my suggestion is not to learn a new tool just
        because it looks cool but only if it helps you to complete a task in a
        way that is better than other tools.
        <br />
        <br />
        Since I sometimes found it hard to find high quality, understandable and
        comprehensive learning materials, I decided to create such materials on
        my own and hopefully they can be helpful to people who are struggling to
        find good learning materials on certain topics as well. These materials
        are modularized and they are designed to be suitable for both beginners
        and experienced developers so that beginners can learn starting from the
        very beginning of a course while more experienced developers can jump
        directly into a particular chapter and get the hang of the concepts
        quickly.
      </SmallText>
    ),
    socialMedia: [
      {
        name: "Facebook",
        uri: "https://www.facebook.com/fongchinghin.stephen/",
      },
      {
        name: "Instagram",
        uri: "https://www.instagram.com/fch_stephen/",
      },
      {
        name: "GitHub",
        uri: "https://github.com/fongchinghinunsw",
      },
      {
        name: "LinkedIn",
        uri: "https://www.linkedin.com/in/stephen-fong-173a0715a/",
      },
    ],
  },
];

const AboutUs = () => {
  const nameCards = tutorList.map((tutor) => {
    return <NameCard key={tutor.name} info={tutor} />;
  });

  return (
    <TwoSidesMainSection mainSection={nameCards} rightSection={<div></div>} />
  );
};

export default AboutUs;
