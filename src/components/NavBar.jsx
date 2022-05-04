import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "0px;" })}
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Logo = styled.div`
  margin-left: 10px;
  font-weight: bold;
  ${
    "" /* width: 150px;
  height: 45px; */
  }
  ${mobile({ fontSize: "24px" })};
`;

const LogoSVG = styled.svg`
  width: 150px;
  height: 45px;
  fill: teal;
  ${mobile({ width: "130px", height: "35px" })};
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "5px" })}
`;

const NavBar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  console.log(quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <StyledLink to="/">
            <Logo>
              <LogoSVG
                version="1.2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 303 93"
                // width="150"
                // height="45"

                // fill="teal"
              >
                <title>TechT b-svg</title>
                <defs>
                  <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
                    <path d="m126 0.62h40.92v93.38h-40.92z" />
                  </clipPath>
                </defs>
                {/* <style>
		.s0 { fill: #000000 } 
	</style> */}
                <g id="Clip-Path" clip-path="url(#cp1)">
                  <g id="Layer">
                    <path
                      id="Layer"
                      class="s0"
                      d="m149.9 32.9l17-0.8c0 0-38.8 62.2-40 61.7-1.2-0.5 22.6-51.5 22.6-51.5l-21 3 38.4-44.6z"
                    />
                  </g>
                </g>
                <g id="Layer">
                  <g id="Layer">
                    <g id="Layer">
                      <path
                        id="Layer"
                        class="s0"
                        d="m2.1 33.1h21.8v6.8h-14.3v6.3h12.6v6.7h-12.6v15h-7.5z"
                      />
                    </g>
                  </g>
                </g>
                <g id="Layer">
                  <g id="Layer">
                    <g id="Layer">
                      <path
                        id="Layer"
                        fill-rule="evenodd"
                        class="s0"
                        d="m51.6 33.1l14.5 34.8h-8l-3.1-7.5h-14.8l-3.1 7.5h-8.1l14.5-34.8zm0.6 20.6l-4.6-11-4.5 11z"
                      />
                    </g>
                  </g>
                </g>
                <g id="Layer">
                  <g id="Layer">
                    <g id="Layer">
                      <path
                        id="Layer"
                        class="s0"
                        d="m95.1 50q2 1.2 3.1 3.1 1.1 1.9 1.1 4.4 0 2.4-1.2 4.4-1.1 2.1-3.1 3.6-1.9 1.4-4.3 2.2-2.4 0.8-5 0.8-2.7 0-5.1-0.7-2.4-0.8-4.2-2.2-2.8-2.1-3.8-5.1l6.8-3.2q0 0.5 0.4 1.2 0.3 0.8 1 1.4 0.8 0.7 2 1.2 1.1 0.5 2.8 0.5 1.4 0 2.5-0.4 1-0.3 1.7-0.8 0.7-0.5 1.1-1.2 0.4-0.6 0.4-1.3 0-0.8-0.5-1.5-0.5-0.7-1.6-1.1-2-0.7-4.2-1.1-2.2-0.5-4.2-1.2-2.1-0.7-3.8-1.9-1.8-1.2-2.8-3.3-1-1.8-1-4 0-2.3 1.1-4.5 1.2-2.2 3.1-3.7 1.8-1.5 4-2.2 2.3-0.8 4.8-0.8 2.5 0 4.8 0.8 2.3 0.7 4.1 2.1 1.7 1.3 2.8 3.1l-5.6 3.8q-1.1-1.4-2.6-2.2-1.6-0.9-3.5-0.9-2.6 0-4.1 1.2-1.4 1.1-1.4 3.1 0 0.8 0.8 1.5 0.8 0.7 2.1 1.3 1.3 0.5 2.9 0.9 1.6 0.4 3.2 0.8 1.6 0.5 3.1 0.9 1.4 0.4 2.3 1z"
                      />
                    </g>
                  </g>
                </g>
                <g id="Layer">
                  <g id="Layer">
                    <g id="Layer">
                      <path
                        id="Layer"
                        class="s0"
                        d="m105.4 33.1h25.2v6.8h-8.9v28h-7.4v-28h-8.9z"
                      />
                    </g>
                  </g>
                </g>
                <g id="Layer">
                  <g id="Layer">
                    <g id="Layer"></g>
                  </g>
                </g>
                <g id="Layer">
                  <g id="Layer">
                    <g id="Layer"></g>
                  </g>
                </g>
                <g id="Layer">
                  <g id="Layer">
                    <g id="Layer">
                      <path
                        id="Layer"
                        class="s0"
                        d="m194.6 33.1h7.4v34.8h-7.4v-15h-16v15h-7.4v-34.8h7.4v13.1h16z"
                      />
                    </g>
                  </g>
                </g>
                <g id="Layer">
                  <g id="Layer">
                    <g id="Layer">
                      <path
                        id="Layer"
                        class="s0"
                        d="m222.7 33.1v6.3h-2.6v22.2h2.6v6.3h-12.6v-6.3h2.6v-22.2h-2.6v-6.3z"
                      />
                    </g>
                  </g>
                </g>
                <g id="Layer">
                  <g id="Layer">
                    <g id="Layer">
                      <path
                        id="Layer"
                        fill-rule="evenodd"
                        class="s0"
                        d="m247.2 32.6q3.5 0 6.6 1.4 3.1 1.5 5.5 3.9 2.3 2.5 3.7 5.7 1.3 3.2 1.3 6.9 0 3.6-1.3 6.9-1.4 3.3-3.7 5.8-2.4 2.4-5.5 3.9-3.1 1.4-6.6 1.4-3.6 0-6.7-1.4-3.2-1.5-5.5-3.9-2.3-2.5-3.6-5.8-1.4-3.3-1.4-6.9 0-3.7 1.4-6.9 1.3-3.2 3.6-5.7 2.3-2.4 5.5-3.9 3.1-1.4 6.7-1.4zm0 28.5q2 0 3.7-0.8 1.8-0.9 3.1-2.3 1.3-1.5 2.1-3.4 0.8-1.9 0.8-4.1 0-2.2-0.8-4.1-0.8-2-2.1-3.4-1.3-1.5-3.1-2.3-1.7-0.8-3.7-0.8-2.1 0-3.8 0.8-1.8 0.8-3.1 2.3-1.3 1.4-2.1 3.4-0.8 1.9-0.8 4.1 0 2.2 0.8 4.1 0.8 1.9 2.1 3.4 1.3 1.4 3.1 2.3 1.7 0.8 3.8 0.8z"
                      />
                    </g>
                  </g>
                </g>
                <g id="Layer">
                  <g id="Layer">
                    <g id="Layer">
                      <path
                        id="Layer"
                        class="s0"
                        d="m295.4 33.1h7.4v34.8h-7l-16.7-22.7v22.7h-7.4v-34.8h6.9l16.8 22.9z"
                      />
                    </g>
                  </g>
                </g>
              </LogoSVG>{" "}
            </Logo>
          </StyledLink>
        </Center>
        <Right>
          <StyledLink to="/register">
            <MenuItem>REGISTER</MenuItem>
          </StyledLink>
          <StyledLink to="/login">
            <MenuItem>SIGN IN</MenuItem>
          </StyledLink>
          <StyledLink to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </StyledLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
