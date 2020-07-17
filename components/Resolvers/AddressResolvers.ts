import gql from "graphql-tag";

export const SellerAddresses = gql`
  query SellerAddresses($id: String!) {
    AllAddress(where: { sellerId: { equals: $id } }) {
      id
      name
      address
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
  }
`;
export const UserAddresses = gql`
  query UserAddresses($id: String!) {
    AllAddress(where: { userId: { equals: $id } }) {
      id
      name
      address
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
  }
`;
export const UpdateAddress = gql`
  mutation UpdateAddress(
    $id: String!
    $name: String!
    $address: String!
    $country: String!
    $state: String!
    $city: String!
    $streetAddress1: String
    $streetAddress2: String
    $zipCode: String!
    $company: String
    $message: String
    $additionalInfo: String
    $MaincontactNubmer: String!
    $OthercontactNubmers: AddressUpdateOthercontactNubmersInput
    $Lat: Float
    $Lng: Float
  ) {
    updateOneAddress(
      data: {
        name: $name
        address: $address
        country: $country
        state: $state
        city: $city
        streetAddress1: $streetAddress1
        streetAddress2: $streetAddress2
        zipCode: $zipCode
        company: $company
        message: $message
        additionalInfo: $additionalInfo
        MaincontactNubmer: $MaincontactNubmer
        OthercontactNubmers: $OthercontactNubmers
        Lat: $Lat
        Lng: $Lng
      }
      where: { id: $id }
    ) {
      id
    }
  }
`;
export const CreateAddress = gql`
  mutation CreateAddress(
    $name: String!
    $address: String!
    $MaincontactNubmer: String!
    $country: String!
    $state: String!
    $city: String!
    $streetAddress1: String
    $streetAddress2: String
    $zipCode: String
    $company: String
    $message: String
    $additionalInfo: String
    $OthercontactNubmers: [String!]
    $Lat: Float
    $Lng: Float
  ) {
    CreateAddress(
      name: $name
      address: $address
      MaincontactNubmer: $MaincontactNubmer
      country: $country
      state: $state
      city: $city
      streetAddress1: $streetAddress1
      streetAddress2: $streetAddress2
      zipCode: $zipCode
      company: $company
      message: $message
      additionalInfo: $additionalInfo
      OthercontactNubmers: $OthercontactNubmers
      Lat: $Lat
      Lng: $Lng
    ) {
      id
    }
  }
`;
export const DeleteAddress = gql`
  mutation DeleteAddress($id: String!) {
    deleteOneAddress(where: { id: $id }) {
      id
    }
  }
`;
export const TogglePrimaryAddress = gql`
  mutation TogglePrimaryAddress($addressId: String!) {
    TogglePrimaryAddress(addressId: $addressId) {
      id
    }
  }
`;
export const SingleAddress = gql`
  query SingleAddress($id: String!) {
    SingleAddress(where: { id: $id }) {
      id
      name
      address
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
    }
  }
`;
