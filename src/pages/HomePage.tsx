import { Center, Flex, Image, useMantineTheme } from "@mantine/core";
import "../index.css";
import { sections } from "./data.temp";

const HomePage = () => {
  const theme = useMantineTheme();

  return (
    <>
      {sections.map((section) => (
        <Flex
          key={section.id}
          id={section.id}
          direction="column"
          align="center"
          justify="center"
          pb="lg"
          className="scrolltarget"
          mx='auto'
          w={{base:'100%',md:'50%'}}
          
        >
          <Center w="100%">
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
          </Center>
        </Flex>
      ))}
    </>
  );
};

export default HomePage;
