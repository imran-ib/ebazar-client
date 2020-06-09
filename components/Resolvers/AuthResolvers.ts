import gql from "graphql-tag";

export const Me = gql`
  query Me {
    CurrentUser {
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
        itemId
      }

      address {
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
  }
`;

export const USER_LOGIN_MUTATION = gql`
  mutation USER_LOGIN_MUTATION($email: String!, $password: String!) {
    UserLogin(email: $email, password: $password)
  }
`;

export const REGISTER_USER_MUTATION = gql`
  mutation REGISTER_USER($name: String!, $email: String!, $password: String!) {
    CreateUser(name: $name, email: $email, password: $password)
  }
`;

export const UserLogout = gql`
  mutation UserLogout {
    UserLogout
  }
`;

export const DeleteUserAccount = gql`
  mutation DeleteUserAccount($userId: String!) {
    DeleteUserAccount(userId: $userId)
  }
`;

export const UserForgotPassword = gql`
  mutation UserForgotPassword($email: String!) {
    UserForgotPasswordRequest(email: $email)
  }
`;

export const UserResetPassword = gql`
  mutation UserResetPassword(
    $token: String!
    $password: String!
    $confirmPassword: String!
  ) {
    ResetUserPassword(
      token: $token
      password: $password
      confirmPassword: $confirmPassword
    )
  }
`;

export const SellerLogin = gql`
  mutation SellerLogin($email: String!, $password: String!) {
    SellerLogin(email: $email, password: $password)
  }
`;

export const CurrentSeller = gql`
  query CurrentSeller {
    CurrentSeller {
      id
      name
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
    }
  }
`;

export const CreateSeller = gql`
  mutation CreateSeller(
    $name: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
    $storeName: String!
    $sellerNationality: String!
    $sellerIdentification: String!
    $Brand: [String!]
    $AddressName: String!
    $AddressAddress: String!
    $AddressCountry: String
    $AddressState: String
    $AddressCity: String
    $AddressZipCode: String
    $AddressMaincontactNubmer: String!
    $AddressStreetAddress1: String
    $AddressStreetAddress2: String
    $AddressCompany: String
  ) {
    CreateSeller(
      name: $name
      email: $email
      password: $password
      confirmPassword: $confirmPassword
      storeName: $storeName
      sellerNationality: $sellerNationality
      sellerIdentification: $sellerIdentification
      Brand: $Brand
      AddressName: $AddressName
      AddressAddress: $AddressAddress
      AddressCountry: $AddressCountry
      AddressState: $AddressState
      AddressCity: $AddressCity
      AddressZipCode: $AddressZipCode
      AddressMaincontactNubmer: $AddressMaincontactNubmer
      AddressStreetAddress1: $AddressStreetAddress1
      AddressStreetAddress2: $AddressStreetAddress2
      AddressCompany: $AddressCompany
    ) {
      id
      name
      email
      storeName
      sellerNationality
      EmailIsVerified
      SellerItemsCout
      role
      phone
      Brand
      items {
        title
        images {
          url
        }
      }
      PickupLocations {
        name
        address
      }
      permissions
    }
  }
`;

export const VerifySeller = gql`
  mutation VerifySeller($SellerVerificationToken: String!) {
    VerifySeller(SellerVerificationToken: $SellerVerificationToken)
  }
`;

export const RequestVerificationToken = gql`
  mutation RequestVerificationToken($email: String!) {
    RequestEmailVerificationToken(email: $email)
  }
`;

export const SellerRequestPasswordReset = gql`
  mutation SellerRequestPasswordReset($email: String!) {
    SellerForgotPasswordRequest(email: $email)
  }
`;

export const SellerResetPassword = gql`
  mutation SellerResetPassword(
    $token: String!
    $password: String!
    $confirmPassword: String!
  ) {
    ResetSellerPassword(
      token: $token
      password: $password
      confirmPassword: $confirmPassword
    )
  }
`;
