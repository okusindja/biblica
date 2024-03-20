import { gql } from '@apollo/client';

export const GET_STUDENTS = gql`
  query GetStudents {
    students {
      name
      birthdate
      denomination
      yearsBeingChristian
      knowledgeLevel
      photo {
        url
      }
    }
  }
`;

export const GET_STUDENT_BY_AUTH_ID = gql`
  query getStudent($authId: String!) {
    student(where: { authId: $authId }) {
      authId
      name
      birthdate
      denomination
      yearsBeingChristian
      knowledgeLevel
      photo {
        url
      }
    }
  }
`;
