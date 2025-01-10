let currDate = new Date();
let year = currDate.getFullYear() - 2002;
let month = currDate.getMonth() - 11;
let date = currDate.getDate() - 20;

const givenDate = new Date(2002, 11 - 1, 20);
const birthday = givenDate
  .toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
  .replace(/ /g, "-");

if (month < 0) year -= 1;
else if (month === 0) {
  if (date < 20) year -= 1;
}

const about = {
  name: "Uday Gupta",
  about: "AI-ML Engineer, Full-Stack Developer, Web Designer",
  bio: "I'm a passionate AI-ML engineer, on a journey of learning to understand and evolve with machines",
  longBio:
    "An AI and Machine Learning student at GGSIPU, driven by using coding and machine learning to create impactful solutions. I’m curious about the connections between physics, technology, and ideas, always eager to learn and grow. Beyond academics, I enjoy exploring sci-fi stories, thrilling mysteries, and philosophical ideas that challenge my perspective.",
  birthday,
  city: "Gurugram",
  age: year,
  degree: "B.Tech in AI-ML",
};

export default about;
