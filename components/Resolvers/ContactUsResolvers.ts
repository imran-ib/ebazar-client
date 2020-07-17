import gql from "graphql-tag";

export const ContactUs = gql`
  mutation ContactUs($email: String!, $subject: String!, $message: String!) {
    ContactUs(email: $email, subject: $subject, message: $message)
  }
`;
