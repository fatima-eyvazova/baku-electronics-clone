import { useState } from "react";
import Link from "next/link";

// mui
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import Image from "next/image";
import logo from "../../public/images/logo.svg";
// icons
import { BiPhoneCall, BiUser, BiHeart } from "react-icons/bi";
import { GiScales } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscSearch } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
const Header = ({ setShow, size }) => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setSideMenuOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <Link href="/">
            <Image src={logo} alt="logo" onClick={() => setShow(true)} />

          </Link>
        </div>
      </div>
      <div className="header-right">
        <div className="holder">
          <div className="icon">
            <input placeholder="Axtarış" />
            <VscSearch />
          </div>
          <ul>
            <li className="compaigns">
              <Link href="/companies">Kampaniyalar</Link>
            </li>
            <li>
              <Link href="/shops">Mağazalar</Link>
            </li>
            <li className="other">
              <button onClick={toggleDrawer(true)}>Digər</button>
              <IoIosArrowDown />
            </li>
          </ul>
          <div className="call">
            <Link href="/call">143</Link>
            <BiPhoneCall />
          </div>
        </div>
        <div className="users">
          <ul>
            <li>
              <button>
                <BiUser />
              </button>
            </li>
            <li>
              <Link href="/favorites">
                <button>
                  <BiHeart />
                </button>
              </Link>
            </li>
            <li>
              <Link href="/comparison">
                <button>
                  <GiScales />
                </button>
              </Link>
            </li>
            <li>
              <Link href="/cart">
                <button>
                  <AiOutlineShoppingCart />
                  <span></span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {sideMenuOpen && (
        <Drawer
          anchor="right"
          open={sideMenuOpen}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>
      )}
    </header>
  );
};

export default Header;
