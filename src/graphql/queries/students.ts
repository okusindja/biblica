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

export const GET_STUDENT_BY_AUTH_EMAIL = gql`
  query getStudent($email: String!) {
    student(where: { email: $email }) {
      email
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
