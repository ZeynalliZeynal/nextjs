import styled from "styled-components";
import { colors } from "@app/_styles/utils";

export const StyledNavbarContainer = styled.nav`
  max-width: 100%;
  padding: 0 1rem;
  color: white;

  .navbar_grid {
    max-width: 1400px;
    height: 4rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 7fr 5fr;
    align-items: center;

    .left_container {
      display: flex;
      gap: 1.5rem;

      .logos {
        color: white;
        display: flex;
        align-items: center;
        gap: 0.25rem;

        .logo_separator {
          color: ${colors["accents-2"]};
        }
      }

      .navLinks_container {
        font-size: 14px;
        color: ${colors["accents-5"]};
        font-weight: 500;

        li {
          & > :first-child {
            margin-left: 1.25rem;
          }

          .nav_link {
            position: relative;

            &--active {
              color: ${colors.success};
            }

            &_goto {
              height: 0.5rem;
              position: absolute;
              top: 0;
              right: -1rem;
            }

            &:hover {
              color: white;
            }
          }
        }
      }
    }
  }
`;
