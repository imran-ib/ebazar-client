import { Item } from "generated/graphql";

export default function AverageReviews(item: Item) {
  if (!item?.itemReview?.length) return 0;
  const TotalReviews = item?.itemReview?.length;
  const SumOfReviews = item?.itemReview?.reduce((tally, next) => {
    return next.rating + tally;
  }, 0);
  const AverageRating = SumOfReviews / TotalReviews;

  return AverageRating;
}
