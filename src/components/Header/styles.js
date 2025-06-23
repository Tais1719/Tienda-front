import styled, { keyframes } from "styled-components"
import { Link } from "react-router-dom"
import { Star } from '@phosphor-icons/react'

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StoreTitleContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 10px;  /* mudou de right para left */
 

  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 2.4rem;
  color: ${(props) => props.theme.charcoal};
  text-transform: uppercase;
  letter-spacing: 5px;
  text-shadow:
    2px 2px 4px rgba(0, 0, 0, 0.4),
    0 0 8px ${(props) => props.theme.taupe};
  animation: ${fadeInDown} 0.7s ease forwards;
  user-select: none;
  z-index: 10000;
`


// Container do Header
export const Container = styled.div`
  background-color: ${(props) => props.theme.darkWhite};
  width: 100%;
  height: 15%;
  padding: 0 96px;
  position: fixed;
  top: 0;
  z-index: 9999;
`

export const Content = styled.div`
  display: flex; 
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1580px;
`

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 162px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 90px;
  }
`

export const HeaderLink = styled(Link)`
  color: ${(props) =>
    props.$isActive ? props.theme.emerald : props.theme.deepForest};
  border-bottom: ${(props) =>
    props.$isActive ? `1px solid ${props.theme.mainBlack}` : 'none'};
  padding-bottom: 5px;
  font-weight:560;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  text-decoration: none;
  font-size: 16px;
  transition: color 200ms;

  &:hover {
    color: ${(props) => props.theme.emerald};
  }
`

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 105px;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 14px;

  p {
    color: black;
    line-height: 90%;
    font-weight: 300;
  }

  span {
    font-weight: 700;
    color:#1e3a8a;
  }
`

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const LogoutButton = styled.button`
  color:black;
  text-decoration: none;
  font-weight: 700;
  background-color: transparent;
  border: none;
`

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  padding: 4px 8px;

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: lightBlue;
    }
  }
`
