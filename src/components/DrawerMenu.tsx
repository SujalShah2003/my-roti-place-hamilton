import {
  Drawer,
  Stack,
  UnstyledButton,
  Text,
  Accordion,
  Box,
} from "@mantine/core";
import { MENU_ITEMS } from "../routes/redirect";
import { contacts } from "../pages/data.temp";

// Props type
interface DrawerMenuProps {
  opened: boolean;
  close: () => void;
  handleMenuClick: (id: string) => void;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({
  opened,
  close,
  handleMenuClick,
}) => {
  return (
    <Drawer
      opened={opened}
      onClose={close}
      padding="xl"
      size="xl"
      position="right"
      closeButtonProps={{
        size: "xl",
      }}
      overlayProps={{ backgroundOpacity: 0.4, blur: 2 }}
    >
      <Stack gap="md" mt="md">
        <Accordion defaultValue="menu" variant="separated" radius="md"  >
          {/* --- Food Menu Accordion --- */}
          <Accordion.Item value="menu" bg="white" >
            <Accordion.Control fz="h1" fw={800}>
              Our Menu
            </Accordion.Control>
            <Accordion.Panel>
              <Stack gap="sm">
                {MENU_ITEMS.map((item) => (
                  <UnstyledButton
                    key={item.id}
                    onClick={() => handleMenuClick(item.id)}
                    fz="h2"
                    c="gray.6"
                    fw={200}
                  >
                    {item.label}
                  </UnstyledButton>
                ))}
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>

          {/* --- Contact Accordion --- */}
          <Accordion.Item value="contact" bg="white">
            <Accordion.Control fz="h1" fw={800}>
              Contact
            </Accordion.Control>
            <Accordion.Panel>
              <Stack gap="sm">
                {contacts.map((item, index) => (
                  <Box mb="md">
                    <Text fz="h2" c="gray.6" key={index}>
                      {item.name}
                    </Text>
                    <Text fz="h2" c="gray.6" key={index}>
                      {item.contact}
                    </Text>
                  </Box>
                ))}
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Stack>
    </Drawer>
  );
};

export default DrawerMenu;
