import Styles from "styled-components";
import media from "styled-media-query";

export const PaginationStyles = Styles.div`
.pagiHeadCenter{
  ${media.lessThan("medium")`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  `}
}

a[aria-disabled='true'] {
  color: grey;
  pointer-events: none;
}
`;
