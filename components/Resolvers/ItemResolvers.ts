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
    $videoLink: String
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
      videoLink: $videoLink
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
export const UpdateItem = gql`
  mutation UpdateItem(
    $id: String!
    $title: String
    $description: String
    $overview: String
    $brand: String
    $weight: String
    $dimensions: String
    $materials: String
    $otherInfo: String
    $videoLink: String
    $price: Float
    $beforeDiscountPrice: Float
    $stock: Int
    $images: [String!]
    $eagerImages: [String!]
    $catagory: [String!]
    $tags: [String!]
    $colors: [String!]
    $otherFeature: [String!]
  ) {
    UpdateItem(
      id: $id
      title: $title
      description: $description
      overview: $overview
      brand: $brand
      weight: $weight
      dimensions: $dimensions
      materials: $materials
      videoLink: $videoLink
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
export const TotalItemsCount = gql`
  query TotalItemsCount {
    itemCount
  }
`;
export const Items = gql`
  query Items(
    $skip: Int
    $first: Int
    $last: Int
    $MinPrice: Float
    $MaxPrice: Float
    $orderBy: ItemOrderByInput
    $searchTerm: String
    $tag: String
    $catagory: String
  ) {
    items(
      skip: $skip
      first: $first
      last: $last

      where: {
        AND: [{ price: { gte: $MinPrice } }, { price: { lte: $MaxPrice } }]
        OR: [
          { title: { contains: $searchTerm } }
          { tags: { some: { text: { contains: $searchTerm } } } }
          { catagory: { some: { text: { contains: $searchTerm } } } }
          { description: { contains: $searchTerm } }
          { overview: { contains: $searchTerm } }
          { brand: { contains: $searchTerm } }
          { otherInfo: { contains: $searchTerm } }
        ]
        tags: { some: { text: { contains: $tag } } }
        catagory: { some: { text: { contains: $catagory } } }
      }
      orderBy: $orderBy
    ) {
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
    DeleteCartItem(cartItemId: $cartItemId) {
      itemId
    }
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
export const CreateOrder = gql`
  mutation CreateOrder($token: String!) {
    CreateOrder(token: $token) {
      id
      itemId
      userId
      charge
      status
      total
    }
  }
`;
export const order = gql`
  query Order($orderId: String!) {
    Order(orderId: $orderId) {
      id
      total
      charge
      itemId
      userId
      status
      user {
        id
        name
        email
        avatar
      }
      Item {
        CartItem {
          quantity
        }
      }

      items {
        images
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
        quantity
      }
      createdAt
    }
  }
`;
export const RemoveAllLikes = gql`
  mutation RemoveAllLikes($userId: String!) {
    RemoveAllLikes(userId: $userId)
  }
`;
export const ItemsConnections = gql`
  query ItemsConnections(
    $first: Int! = 2
    $after: String
    $tag: String
    $category: String
  ) {
    ItemConnections(
      first: $first
      after: $after
      tag: $tag
      category: $category
    ) {
      edges {
        cursor
        node {
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
        __typename
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;
export const SearchTermResults = gql`
  query SearchTermResult($first: Int! = 6, $after: String, $term: String!) {
    SearchTermResults(first: $first, term: $term, after: $after) {
      edges {
        cursor
        node {
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
        __typename
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;
export const SellerItems = gql`
  query SellerItems($SellerId: String) {
    items(
      where: { sellerId: { equals: $SellerId } }
      orderBy: { createdAt: asc }
    ) {
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
