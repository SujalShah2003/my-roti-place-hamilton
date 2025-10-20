import { useDisclosure } from "@mantine/hooks";
// import myrotiplace from "../assets/logo/my-roti-place.png";
// import mydosaplace from "../assets/logo/my-dosa-place.png";
import { AppShell, } from "@mantine/core";
import {
  ScrollRestoration,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import DrawerMenu from "../components/DrawerMenu";

const MainLayout = () => {
  const [opened, {  close }] = useDisclosure(false);
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
      }, 2000);
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

      <AppShell header={{ height: 20 }} bg="black">

        {/* HEADER */}
        {/* <AppShell.Header
          bg="#f0f1f2"
          withBorder={true}
          style={{
            borderBottom: "1px solid #a7adbb",
          }}
        >
          <Group h="100%" px={{base:100,md:70}} justify="space-between">
            <Group
              onClick={() => handleMenuClick("/")}
              style={{
                cursor: "pointer",
              }}
            >
              <Image src={myrotiplace} alt="my-roti-place" w={{base:120,md:60}} h={{base:120,md:60}} />
              <Image src={mydosaplace} alt="my-roti-place" w={{base:120,md:60}} h={{base:120,md:60}} />
            </Group>

            <Burger opened={opened} onClick={toggle} size={"lg"} />
          </Group>
        </AppShell.Header> */}

        {/* MAIN CONTENT */}
        <AppShell.Main bg="#02070e" style={{
          overflowX : 'hidden'
        }}>
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
