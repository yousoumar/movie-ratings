export interface MovieInterface {
  id: string;
  title: string;
  resume: string;
  rate: number;
}

const data: MovieInterface[] = [
  {
    id: "1",
    title: "Spiderman",
    resume:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequivoluptatum commodi praesentium nobis debitis asperiores;",
    rate: 5,
  },

  {
    id: "2",
    title: "Lorem ipsum",
    resume:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequivoluptatum commodi praesentium nobis debitis asperiores;",
    rate: 5,
  },
  {
    id: "3",
    title: "Atypical",
    resume:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequivoluptatum commodi praesentium nobis debitis asperiores;",
    rate: 5,
  },
];

export default data;
