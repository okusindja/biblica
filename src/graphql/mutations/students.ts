import { gql } from '@apollo/client';

export const CREATE_STUDENT = gql`
  mutation createStudent(
    $name: String!
    $birthdate: DateTime
    $yearsBeingChristian: Int
    $denomination: String
    $authId: String
  ) {
    createStudent(
      data: {
        name: $name
        birthdate: $birthdate
        yearsBeingChristian: $yearsBeingChristian
        denomination: $denomination
        authId: $authId
      }
    ) {
      id
    }
    publishStudent(where: { authId: $authId }) {
      id
    }
  }
`;
