import { useDisclosure } from "@mantine/hooks";
import myrotiplace from "../assets/logo/my-roti-place.png";
import mydosaplace from "../assets/logo/my-dosa-place.png";
import { AppShell, Burger, Group, Image } from "@mantine/core";
import {
  ScrollRestoration,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import DrawerMenu from "../components/DrawerMenu";

const MainLayout = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (sectionId: string) => {
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
            <Burger opened={opened} onClick={toggle} size="xl" />
          </Group>
        </AppShell.Header>

        {/* MAIN CONTENT */}
        <AppShell.Main bg="#f0f1f2">
          <Outlet />
        </AppShell.Main>
      </AppShell>

      {/* DRAWER NAVBAR */}
      <DrawerMenu
        opened={opened}
        close={close}
        handleMenuClick={handleMenuClick}
      />
    </>
  );
};

export default MainLayout;
