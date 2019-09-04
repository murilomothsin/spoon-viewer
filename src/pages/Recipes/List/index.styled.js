import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { Box } from "reakit"

export const Content = styled(Box)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

export const RecipeWrapper = styled(NavLink)`
  display: flex;
  flex-direction: column;
  float: left;
  width: 30%;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
  background-color: #b2d8d0;
  height: fit-content;
  border-radius: 10px;
  color: initial;
  text-decoration: none;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const RecipeDetails = styled(Box)`
  display: flex;
  flex-direction: column;
`

export const Title = styled(Box)`
  color: #2c2926;
  font-weight: bold;
  font-size: 18px;
`

export const Description = styled(Box)`
  text-align: justify;
  font-size: 14px;
  line-height: 1.5;
`

export const Tag = styled(Box)`
  background-color: #62d8ac;
  font-size: 12px;
  text-transform: uppercase;
  margin: 5px;
  padding: 4px;
  border-radius: 7px;
  box-shadow: 2px 2px #62d8ac26;
`

export const Footer = styled(Box)`
  display: flex;
  justify-content: space-between;
`
