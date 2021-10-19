import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Logo = styled.h1`

`

const Desc = styled.p`
  margin: 20px 0;
`

const SocialContainer = styled.div`
  display: flex;
`

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
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
`

const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const Payment = styled.img`
  width: 50%;
`

const Footer = () => {
    return (
        <Container>
          <Left>
            <Logo>NK.Store</Logo>
            <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Aliquid architecto dolor quod quas ut eius reiciendis tempore harum, 
              illo dolorum doloribus, 
              exercitationem ad libero, quaerat distinctio eveniet porro officiis
               ducimus.
            </Desc>
            <SocialContainer>
              <SocialIcon color="3B5999">
                <Facebook />
              </SocialIcon>
              <SocialIcon color="E4405F">
                <Instagram />
              </SocialIcon>
              <SocialIcon color="55ACEE">
                <Twitter />
              </SocialIcon>
              <SocialIcon color="E60023">
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
              <ListItem>Wishlist</ListItem>
              <ListItem>Terms</ListItem>
            </List>
          </Center>
          <Right>
            <Title>Contact</Title>
            <ContactItem>
              <Room style={{ marginRight: "10px" }} /> 14, Avenue de l'Amitié, Rohero 1, Bujumbura
            </ContactItem>
            <ContactItem>
              <Phone style={{ marginRight: "10px" }} /> +257 12 34 56 78
            </ContactItem>
            <ContactItem>
              <MailOutline style={{ marginRight: "10px" }} /> contact@nkstore.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Pt1FFsc/paypal-logo.png" />
          </Right>
        </Container>
    )
}

export default Footer