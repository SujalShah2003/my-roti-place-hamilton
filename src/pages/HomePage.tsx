import { Box, Center, Image, Stack } from "@mantine/core";
import "../index.css";
import { sections } from "./data.temp";

const HomePage = () => {
  return (
    <>
      <Box w="100%" h="100%" bg="#02070e">
        <Center w="100%" h="100%">
          <Stack
            justify="center"
            align="center"
            gap="md"
            w={{ base: "100%", md: "50%" }}
          >
            {sections.map((section) => (
              <Image
                src={section.img}
                alt={section.id}
                fit="fill"
                radius="md"
                style={{
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  width: "100%",
                  borderRadius: "12px",
                }}
              />
            ))}
          </Stack>
        </Center>
      </Box>
    </>
  );
};

export default HomePage;
