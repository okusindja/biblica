import { gql } from '@apollo/client';

export const CREATE_STUDENT = gql`
  mutation createStudent(
    $name: String!
    $birthdate: DateTime
    $yearsBeingChristian: Int
    $denomination: String
    $email: String
  ) {
    createStudent(
      data: {
        name: $name
        birthdate: $birthdate
        yearsBeingChristian: $yearsBeingChristian
        denomination: $denomination
        email: $email
      }
    ) {
      id
    }
    publishStudent(where: { email: $email }) {
      id
    }
  }
`;
