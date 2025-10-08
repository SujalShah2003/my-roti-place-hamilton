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

      <AppShell header={{ height: 70 }} bg="black">
        {/* HEADER */}
        <AppShell.Header
          bg="#e3e6ed"
          withBorder={true}
          style={{
            borderBottom: "1px solid #a7adbb",
          }}
        >
          <Group h="100%" px="xl" justify="space-between">
            <Group>
              <Image src={myrotiplace} alt="my-roti-place" w={60} h={60} />
              <Image src={mydosaplace} alt="my-roti-place" w={60} h={60} />
            </Group>
            <Burger opened={opened} onClick={toggle} size="sm" />
          </Group>
        </AppShell.Header>

        {/* MAIN CONTENT */}
        <AppShell.Main bg="#e3e6ed">
          <Outlet />
        </AppShell.Main>
      </AppShell>

      {/* DRAWER NAVBAR */}
      <Drawer
        opened={opened}
        onClose={close}
        // title="Menu"
        padding="md"
        size="md"
        position="right"
        bg='gray'
        overlayProps={{ backgroundOpacity: 0.4, blur: 2 }}
      >
        <Stack gap="sm">
          {MENU_ITEMS.map((item) => (
            <UnstyledButton
              key={item.id}
              onClick={() => handleMenuClick(item.id)}
              style={{
                textAlign: "left",
                fontSize: "1.05rem",
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
