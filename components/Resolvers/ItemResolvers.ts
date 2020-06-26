import gql from "graphql-tag";

export const UserItems = gql`
  query UsersOrders {
    UserOrder {
      id
      total
      charge
      status
    }
  }
`;

export const CreateItem = gql`
  mutation CreateItem(
    $title: String!
    $description: String!
    $overview: String
    $brand: String
    $weight: String
    $dimensions: String
    $materials: String
    $otherInfo: String
    $price: Float!
    $beforeDiscountPrice: Float!
    $stock: Int
    $images: [String!]
    $eagerImages: [String!]
    $catagory: [String!]
    $tags: [String!]
    $colors: [String!]
    $otherFeature: [String!]!
  ) {
    CreateItem(
      title: $title
      description: $description
      overview: $overview
      brand: $brand
      weight: $weight
      dimensions: $dimensions
      materials: $materials
      otherInfo: $otherInfo
      price: $price
      beforeDiscountPrice: $beforeDiscountPrice
      stock: $stock
      images: $images
      eagerImages: $eagerImages
      catagory: $catagory
      tags: $tags
      colors: $colors
      otherFeature: $otherFeature
    ) {
      id
    }
  }
`;

export const Item = gql`
  query item($id: String!) {
    item(where: { id: $id }) {
      id
      likes {
        id
      }
      likesCount
      itemReview {
        id
        rating
        text
        itemId
        authorId
        author {
          name
          avatar
          reviewCount
        }
        downVoteCount
        upVoteCount
        upVote {
          id
          voteUp
          authorId
          itemId
        }
        downVote {
          id
          voteDown
          authorId
          itemId
        }
      }
      reviewCount
      images
      eagerImages
      catagory {
        id
        text
      }
      tags {
        id
        text
      }
      colors {
        id
        text
      }
      OtherFeatures
      title
      description
      overview
      otherInfo
      videoLink
      brand
      weight
      dimensions
      materials
      price
      beforeDiscountPrice
      stock
    }
  }
`;

export const Items = gql`
  query Items {
    items {
      id
      likes {
        id
      }
      likesCount
      itemReview {
        id
        rating
        text
        itemId
        authorId
        downVoteCount
        upVoteCount
        upVote {
          id
          voteUp
          authorId
          itemId
        }
        downVote {
          id
          voteDown
          authorId
          itemId
        }
      }
      reviewCount
      images
      eagerImages
      catagory {
        text
      }
      tags {
        text
      }
      colors {
        text
      }
      OtherFeatures
      title
      description
      overview
      otherInfo
      videoLink
      brand
      weight
      dimensions
      materials
      price
      beforeDiscountPrice
      stock
    }
  }
`;

export const DeleteItem = gql`
  mutation DeleteItem($itemId: String!) {
    DeleteItem(itemId: $itemId)
  }
`;

export const ToggleLike = gql`
  mutation ToggleLike($itemId: String!) {
    ToggleLikeItem(itemId: $itemId)
  }
`;

export const AddItemToCart = gql`
  mutation AddItemToCart($itemId: String!, $quantity: Int!) {
    AddItemToTheCart(itemId: $itemId, quantity: $quantity)
  }
`;

export const DeleteCartItem = gql`
  mutation DeleteCartItem($cartItemId: String!) {
    DeleteCartItem(cartItemId: $cartItemId)
  }
`;
export const EmptyUserCart = gql`
  mutation EmptyUserCart($userId: String!) {
    EmptyUserCart(userId: $userId)
  }
`;

export const ItemReviews = gql`
  query ItemReviews($itemId: String!) {
    ITemRevives(itemId: $itemId) {
      id
      rating
      text
      itemId
      authorId
      downVoteCount
      upVoteCount
      upVote {
        id
        voteUp
        authorId
        itemId
      }
      downVote {
        id
        voteDown
        authorId
        itemId
      }
    }
  }
`;

export const CreateReview = gql`
  mutation CreateReview($itemId: String!, $text: String!, $rating: Float!) {
    CreateItemReview(itemId: $itemId, text: $text, rating: $rating) {
      id
      text
      rating
      itemId
      authorId
    }
  }
`;

export const ToggleReviewUpVote = gql`
  mutation ToggleReviewUpVote($reviewId: String!, $itemId: String!) {
    ToggleReviewUpVote(reviewId: $reviewId, itemId: $itemId)
  }
`;
export const ToggleReviewDownVote = gql`
  mutation ToggleReviewDownVote($reviewId: String!, $itemId: String!) {
    ToggleReviewDownVote(reviewId: $reviewId, itemId: $itemId)
  }
`;
