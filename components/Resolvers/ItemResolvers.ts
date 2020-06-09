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
