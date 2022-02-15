import styled from "styled-components";

export const NumberCardStyle = styled.div`
  transition: ${(props) => props.theme.transition};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: white;
  border: 1px solid #dfe0eb;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.primary};

    .number-card__title h3,
    .number-card__number h3 {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  .number-card__title h3 {
    transition: ${(props) => props.theme.transition};
    font-size: ${(props) => props.theme.fontSize.large};
    font-weight: 700;
  }

  .number-card__number h3 {
    transition: ${(props) => props.theme.transition};
    font-size: 40px;
    font-weight: 700;
  }
`;
