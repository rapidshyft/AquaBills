import { Container, Heading, List, ListItem } from "@chakra-ui/react";

interface Props {
  items: string[];
  heading: string;
}

const Sidebar = ({ items, heading }: Props) => {
  return (
    <Container maxW={"60"} ml={0} mb={0}>
      <Heading>{heading}</Heading>
      <List spacing={3} pt={3}>
        {items.map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Sidebar;
