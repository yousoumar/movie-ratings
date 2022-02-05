export interface movieInterface {
  id: string;
  title: string;
  resume: string;
  rate: number;
}

const data: movieInterface[] = [
  {
    id: "1",
    title: "Lorem ipsum",
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
    title: "Lorem ipsum",
    resume:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequivoluptatum commodi praesentium nobis debitis asperiores;",
    rate: 5,
  },
];
export default data;
