export type ReviewsObj = {
  profileImg: string;
  review: string;
  order?: true;
  fontSize?: string;
};

export const arrOfreviwes: ReviewsObj[] = [
  {
    profileImg: "1",
    review: `“This fish restaurant is without a doubt the best IN Ksamil! Also I found it to be halal.” `,
    fontSize: "0.95rem",
  },
  {
    profileImg: "2",
    review: `“Wonderful view from this near the sea restaurant! Excellent sea food here!”`,
    order: true,
    fontSize: "1rem",
  },
  {
    profileImg: "3",
    review: `"“If you are searching for halal restaurant In Ksamil I recommend you come here!”"`,
    fontSize: "0.95rem",
  },
];
