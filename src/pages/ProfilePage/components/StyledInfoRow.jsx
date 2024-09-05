import styled from "styled-components";
import { breakpoints } from "../../../constants/media";

export const StyledInfoRow = styled.div`
  .info__row-title {
    margin-bottom: 10px;
    h3 {
      color: var(--black-cl);
    }
  }
  .info__row-list {
    .movieitem {
      padding: 20px 0;
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    .movieitem {
      padding: 20px 0;
      &:not(:last-child) {
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
      }
    }
  }
`;
