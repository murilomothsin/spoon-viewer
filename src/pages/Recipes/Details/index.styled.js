import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { Box } from "reakit"

export const BackBtn = styled(NavLink)`
  position: fixed;
  width: 60px;
  height: 60px;
  top: 40px;
  left: 40px;
  background-color: #0c9;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
`

export const RecipeWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: #b2d8d0;
  height: fit-content;
  border-radius: 10px;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const RecipeDetails = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 15px;
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
