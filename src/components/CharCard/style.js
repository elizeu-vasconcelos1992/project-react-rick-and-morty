import styled from "styled-components";

export const Card = styled.li`
  width: 14rem;
  height: 14rem;
  background-color: ${({ status }) =>
    status === "Alive" ? "#90EE90" : "#FA8072"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  gap: 1rem;

  h3 {
    margin: 0;
    max-width: 12ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
  }

  img {
    width: 60%;
  }
`;
