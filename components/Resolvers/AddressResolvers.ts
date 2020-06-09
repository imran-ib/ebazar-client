import gql from "graphql-tag";

export const UserAddresses = gql`
  query Address {
    addresses {
      id
      name
      address
      country
      state
      city
      streetAddress1
      streetAddress2
      isPrimary
      Lat
      Lng
    }
  }
`;
