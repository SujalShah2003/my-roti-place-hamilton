import { Box, Center, Image, Stack } from "@mantine/core";
import "../index.css";
import { sections } from "./data.temp";

const HomePage = () => {
  return (
    <>
      <Box w="100%" h="100%" bg="#02070e" style={{ overflow: "hidden" }}>
        <Center w="98%" h="100%">
          <Stack
            justify="center"
            align="center"
            gap="md"
            w={{ base: "98%", md: "50%" }}
          >
            {sections.map((section) => (
              <Image
                src={section.img}
                alt={section.id}
                fit="fill"
                radius="md"
                w="98%"
              />
            ))}
          </Stack>
        </Center>
      </Box>
    </>
  );
};

export default HomePage;
