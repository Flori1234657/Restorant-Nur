export type ReviewsObj = {
  profileImg: string;
  review: string;
  order?: true;
  fontSize?: string;
};

export const arrOfreviwes: ReviewsObj[] = [
  {
    profileImg: "1.webp",
    review: `"Lorem ipsum dolor sit amet consectetur. Fames malesuada id magna enim
    faucibus eu turpis"`,
    fontSize: "0.95rem",
  },
  {
    profileImg: "2.webp",
    review: `"Lorem ipsum dolor sit amet consectetur. Fames malesuada id magna enim
    faucibus eu turpis"`,
    order: true,
    fontSize: "1rem",
  },
  {
    profileImg: "3.webp",
    review: `"Lorem ipsum dolor sit amet consectetur. Fames malesuada id magna enim
    faucibus eu turpis"`,
    fontSize: "0.95rem",
  },
];
