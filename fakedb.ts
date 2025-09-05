// fakedb.ts
type ContWatch = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  rank: number;
};

type User = {
  username: string;
  email: string;
  continueWatching: ContWatch[];
};

const users: User[] = [
  {
    username: "test1",
    email: "test1@ice.fake",
    continueWatching: [
      { title: "One Piece", imageSrc: "/luffy.jpg", imageAlt: "Luffy", rank: 1 },
      { title: "Naruto", imageSrc: "/naruto.jpg", imageAlt: "Naruto Uzumaki", rank: 2 },
      { title: "Dragon Ball Z", imageSrc: "/dragon_ball_z.jpg", imageAlt: "Goku", rank: 3 },
      { title: "Attack on Titan", imageSrc: "/attack_on_titan.jpg", imageAlt: "Eren Yeager", rank: 4 },
    ],
  },
  {
    username: "test2",
    email: "test2@ice.fake",
    continueWatching: [
      { title: "Demon Slayer", imageSrc: "/demon_slayer.jpg", imageAlt: "Tanjiro", rank: 1 },
      { title: "Jujutsu Kaisen", imageSrc: "/jujutsu_kaisen.jpg", imageAlt: "Yuji Itadori", rank: 2 },
    ],
  },
  {
    username: "test3",
    email: "test3@ice.fake",
    continueWatching: [
      { title: "Fullmetal Alchemist", imageSrc: "/fma.jpg", imageAlt: "Edward Elric", rank: 1 },
      { title: "Death Note", imageSrc: "/death_note.jpg", imageAlt: "Light Yagami", rank: 2 },
      { title: "Bleach", imageSrc: "/bleach.png", imageAlt: "Ichigo Kurosaki", rank: 3 },
    ],
  },
  { username: "test4", email: "test4@ice.fake", continueWatching: [] },
  { username: "test5", email: "test5@ice.fake", continueWatching: [] },
  { username: "test6", email: "test6@ice.fake", continueWatching: [] },
  { username: "test7", email: "test7@ice.fake", continueWatching: [] },
  { username: "test8", email: "test8@ice.fake", continueWatching: [] },
  { username: "test9", email: "test9@ice.fake", continueWatching: [] },
  { username: "test10", email: "test10@ice.fake", continueWatching: [] },
];

export { users };
export type { ContWatch, User };

