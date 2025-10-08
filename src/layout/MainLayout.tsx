import { useDisclosure } from "@mantine/hooks";
import myrotiplace from "../assets/logo/my-roti-place.png";
import mydosaplace from "../assets/logo/my-dosa-place.png";
import {
  AppShell,
  Burger,
  Drawer,
  Group,
  UnstyledButton,
  Stack,
  Image,
  Menu,
} from "@mantine/core";
import {
  ScrollRestoration,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { MENU_ITEMS } from "../routes/redirect";

const MainLayout = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick  = (sectionId: string) => {
    // If not on homepage, go to "/" first, then scroll
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
    close();
  };

  return (
    <>
      <ScrollRestoration />

      <AppShell header={{ height: 150 }} bg="black">
        {/* HEADER */}
        <AppShell.Header
          bg="#f0f1f2"
          withBorder={true}
          style={{
            borderBottom: "1px solid #a7adbb",
          }}
        >
          <Group h="100%" px={100} justify="space-between">
            <Group>
              <Image src={myrotiplace} alt="my-roti-place" w={120} h={120} />
              <Image src={mydosaplace} alt="my-roti-place" w={120} h={120} />
            </Group>
            <Burger opened={opened} onClick={toggle} size="lg" />
          </Group>
        </AppShell.Header>

        {/* MAIN CONTENT */}
        <AppShell.Main bg="#f0f1f2">
          <Outlet />
        </AppShell.Main>
      </AppShell>

      {/* DRAWER NAVBAR */}
      <Drawer
        opened={opened}
        onClose={close}
        // title="Menu"
        padding="md"
        size="xl"
        position="right"
        bg='gray'
        overlayProps={{ backgroundOpacity: 0.4, blur: 2 }}
      >
        <Stack gap="lg">
          <Menu>
            
          </Menu>
          {MENU_ITEMS.map((item) => (
            <UnstyledButton
              key={item.id}
              onClick={() => handleMenuClick(item.id)}
              style={{
                textAlign: "left",
                fontSize: "2.50rem",
                fontWeight: 500,
                padding: "6px 0",
              }}
            >
              {item.label}
            </UnstyledButton>
          ))}
        </Stack>
      </Drawer>
    </>
  );
};

export default MainLayout;
