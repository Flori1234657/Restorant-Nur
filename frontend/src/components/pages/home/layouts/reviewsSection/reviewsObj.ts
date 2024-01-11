export type ReviewsObj = {
  profileImg: string;
  review: string;
  order?: true;
};

export const arrOfreviwes: ReviewsObj[] = [
  {
    profileImg: "1.webp",
    review: `"Lorem ipsum dolor sit amet consectetur. Fames malesuada id magna enim
    faucibus eu turpis"`,
  },
  {
    profileImg: "2.webp",
    review: `"Lorem ipsum dolor sit amet consectetur. Fames malesuada id magna enim
    faucibus eu turpis"`,
    order: true,
  },
  {
    profileImg: "3.webp",
    review: `"Lorem ipsum dolor sit amet consectetur. Fames malesuada id magna enim
    faucibus eu turpis"`,
  },
];
