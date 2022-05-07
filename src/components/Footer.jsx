import React from "react";
import styled from "styled-components";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  color: teal;
`;

const LogoSVG = styled.svg`
  width: 150px;
  height: 45px;
  fill: teal;
  ${mobile({ width: "130px", height: "35px" })};
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
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
          <g id="clipPath" clipPath="url(#cp1)">
            <g id="Layer">
              <path
                id="Layer"
                className="s0"
                d="m149.9 32.9l17-0.8c0 0-38.8 62.2-40 61.7-1.2-0.5 22.6-51.5 22.6-51.5l-21 3 38.4-44.6z"
              />
            </g>
          </g>
          <g id="Layer">
            <g id="Layer">
              <g id="Layer">
                <path
                  id="Layer"
                  className="s0"
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
                  fillRule="evenodd"
                  className="s0"
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
                  className="s0"
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
                  className="s0"
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
                  className="s0"
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
                  className="s0"
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
                  fillRule="evenodd"
                  className="s0"
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
                  className="s0"
                  d="m295.4 33.1h7.4v34.8h-7l-16.7-22.7v22.7h-7.4v-34.8h6.9l16.8 22.9z"
                />
              </g>
            </g>
          </g>
        </LogoSVG>{" "}
        <Desc>
          DON'T MISS OUT. Our collections will rotate every seasons, some of the
          collections might not be available ever again. Buy them while they
          last.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="e60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>

          <ListItem>Man Fashion</ListItem>

          <ListItem>Woman Fashion</ListItem>

          <ListItem>Accessories</ListItem>

          <ListItem>My Account</ListItem>

          <ListItem>Order Tracking</ListItem>

          <ListItem>Wishlist</ListItem>

          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          1234 Street Name
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +1 123 456 7890
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          contact@email.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
