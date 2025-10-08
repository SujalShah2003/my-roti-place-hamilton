import { Center, Container, Image } from "@mantine/core";
import "../index.css";
import { sections } from "./data.temp";

const HomePage = () => {
  return (
    <>
      {sections.map((section) => (
        <Container className="scrolltarget" id={section?.id} size="sm"  >
          <Center bg="green">
            <Image
              src={section.img}
              alt={section.id}
              fit="fill"
            />
          </Center>
        </Container>
      ))}
    </>
  );
};

export default HomePage;
