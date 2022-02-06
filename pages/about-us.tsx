import styles from "./about-us.module.scss";

import NameCard from "../components/Card/NameCard";
import TwoSidesMainSection from "../components/Structure/TwoSidesMainSection";

const tutorList = [
  {
    name: "Stephen Fong",
    backgroundImage: {
      uri: "images\\about-us\\sydney.jpg",
      alt: "Sydney Opera House",
    },
    avatarImage: {
      uri: "images\\about-us\\stephenfong.png",
    },
    position: "Full Stack Developer, Blockchain Enthusiast",
    shortDescription: "some descriptions...",
    longDescription: "I go to school by bus everyday, except for Monday",
    socialMedia: [
      {
        name: "Facebook",
        uri: "https://www.facebook.com/fongchinghin.stephen/",
      },
      {
        name: "Twitter",
        uri: "https://facebook.com",
      },
      {
        name: "GitHub",
        uri: "https://github.com/fongchinghinunsw",
      },
    ],
  },
];

const AboutUs = () => {
  console.log(tutorList);
  const nameCards = tutorList.map((tutor) => {
    return <NameCard key={tutor.name} info={tutor} />;
  });

  console.log(nameCards);

  return (
    <TwoSidesMainSection mainSection={nameCards} rightSection={<div></div>} />
  );
};

export default AboutUs;
