import { Center, Container, Image } from "@mantine/core";
import "../index.css";
import { sections } from "./data.temp";

const HomePage = () => {
  return (
    <>
      {sections.map((section) => (
        <Container className="scrolltarget" id={section?.id} size="sm" mb="lg">
          <Center>
            <Image
              src={section.img}
              alt={section.id}
              fit="fill"
              radius="md"
              style={{
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              }}
            />
          </Center>
        </Container>
      ))}
    </>
  );
};

export default HomePage;
