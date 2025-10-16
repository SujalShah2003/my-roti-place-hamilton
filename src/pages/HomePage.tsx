import { Center, Container, Image, useMantineTheme } from "@mantine/core";
import "../index.css";
import { sections } from "./data.temp";

const HomePage = () => {
  const theme = useMantineTheme();

  return (
    <>
      {sections.map((section) => (
        <Container
          key={section.id}
          className="scrolltarget"
          id={section.id}
          size="xl"
          mb="lg"
          style={{
            [`@media (max-width: ${theme.breakpoints.xl})`]: {
              maxWidth: theme.breakpoints.sm, // smaller container on small screens
            },
          }}
        >
          <Center>
            <Image
              src={section.img}
              alt={section.id}
              fit="fill"
              radius="md"
              style={{
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                width: "100%",
              }}
            />
          </Center>
        </Container>
      ))}
    </>
  );
};

export default HomePage;
