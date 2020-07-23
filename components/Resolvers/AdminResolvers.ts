import gql from "graphql-tag";

export const IsAdmin = gql`
  query isAdmin {
    isAdmin
  }
`;
export const AllUsers = gql`
  query AllUser {
    AllUsers(first: 100) {
      edges {
        cursor
        node {
          id
          name
          email
          avatar
          role
          permissions
          likesCount
          reviewCount
          cart {
            id
            quantity
            itemId
            userId
            item {
              id
              title
              price
              eagerImages
            }
          }

          likes {
            userId
            itemId
            item {
              id
              title
              likesCount
              eagerImages
              price
              dimensions
              description
            }
          }

          address {
            id
            name
            address
            isPrimary
            country
            state
            city
            streetAddress1
            streetAddress2
            zipCode
            company
            message
            additionalInfo
            MaincontactNubmer
            OthercontactNubmers
            Lat
            Lng
          }
          __typename
        }
      }
    }
  }
`;
export const AllSellers = gql`
  query AllSeller {
    AllSeller(first: 100) {
      edges {
        cursor
        node {
          id
          name
          email
          storeName
          sellerNationality
          sellerIdentification
          EmailIsVerified
          SellerItemsCout
          role
          phone
          PickupLocations {
            address
          }
          Brand
          permissions
          items {
            id
          }
        }
      }
    }
  }
`;
export const AllItems = gql`
  query AllItems {
    AllItems(first: 100) {
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
      pageInfo {
        hasNextPage
      }
    }
  }
`;
export const UpdateRole = gql`
  mutation UpdateRole($userId: String, $sellerId: String, $role: Role) {
    UpdateRole(userId: $userId, sellerId: $sellerId, role: $role)
  }
`;
