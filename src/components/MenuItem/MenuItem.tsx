import React, { Dispatch, SetStateAction } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useWindowSize } from 'react-use';

import { MENU_BREAKPOINT, MENU_BREAKPOINT_WITHOUT_PX } from 'constants/menuBreakpoint';
import styled from 'styled-components';
import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter';

interface Props {
  name: string;
  setIsMenu?: Dispatch<SetStateAction<boolean>>;
}

const Link = styled(RouterLink)`
  font-family: ${({ theme }) => theme.fonts.secondary}, sans-serif;
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  margin-right: 24px;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.hoverPrimary};
  }

  @media (max-width: ${MENU_BREAKPOINT}) {
    font-size: 24px;
    margin: 25px 0;
  }
`;

export const MenuItem = ({ name, setIsMenu = () => {} }: Props) => {
  const { width } = useWindowSize();

  const handleMenuItemClick = () => {
    if (width <= MENU_BREAKPOINT_WITHOUT_PX) {
      setIsMenu(false);
    }
  };

  return (
    <Link to={name} onClick={handleMenuItemClick}>
      {capitalizeFirstLetter(name)}
    </Link>
  );
};
