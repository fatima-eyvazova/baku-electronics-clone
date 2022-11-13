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
import baki from "../../public/images/bakii.png"

// icons
import { BiPhoneCall, BiUser, BiHeart } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscSearch } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
// forms
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import { Divide as Hamburger } from "hamburger-react"
import { useSelector } from "react-redux";

const schema = yup
  .object({
    name: yup.string().min(2).required("Ad tələb olunur").matches(/^[a-z]+$/, 'Ad yalnız hərflərdən ibarət olmalıdır'),
    email: yup
      .string()
      .email("Bu e-poçt olmalıdır")
      .required("E-poçt tələb olunur"),
    password: yup
      .string()
      .required("Parol tələb olunur")
      .min(6, "Parol 6 simvoldan ibarət olmalıdır"),
  })
  .required();

const Header = ({ setShow, size }) => {

  const [showLinks, setShowLinks] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [linkIsSent, setLinkIsSent] = useState(false);
  const favs = useSelector(state => state.favorites.favoriteProducts);
  const basketProducts = useSelector(state => state.basket.basketProducts);

  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: ""
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    console.log(values);
    setLinkIsSent(true);
  };

  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [openAuthDrawer, setOpenAuthDrawer] = useState(false)
  const [burgerMenu, setBurgerMenu] = useState(false)

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setSideMenuOpen(open);
  };

  const toggleDrawe = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenAuthDrawer(open);
  };

  const toggleMenu = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setBurgerMenu(open);
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
  const lists = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawe(false)}
      onKeyDown={toggleDrawe(false)}
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
    <div className={`header ${showLinks ? "show-header" : "hide-header"} `}>
      <div className="header-left">
        <div className="burger-menu" onClick={handleShowLinks}>
          <button onClick={() => setBurgerMenu(prev => !prev)} toggled={isOpen} rounded toggle={setOpen} size="40" >
            <Hamburger />
          </button>
        </div>
        <div className="logo">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <div className="logo-baku">
          <Link href="/">
            <Image src={baki}
              alt="logo"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <div className="call-contact">
          <Link href="/call">143</Link>
          <BiPhoneCall />
        </div>

      </div>
      <div className="header-right">
        <div className="holder">
          <div className="icon">
            <input placeholder="Axtarış"
            />
            <VscSearch />
          </div>
          <ul>
            <li className="compaigns">
              <Link href="/campaigns">Kampaniyalar</Link>
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
            <li className="user">
              <button onClick={toggleDrawe(true)}>
                <BiUser />
              </button>
            </li>
            <li className="favori">
              <Link href="/favorites">
                <button style={{ position: 'relative' }}>
                  <BiHeart />
                  <div className="badge">
                    <span>{favs?.length || 0}</span>
                  </div>
                </button>
              </Link>
            </li>
            <li className="search">
              <button>
                <VscSearch />
              </button>
            </li>
            <li className="cart">
              <Link href="/cart">
                <button style={{ position: 'relative' }}>
                  <AiOutlineShoppingCart />
                  <div className="badge">
                    <span>{basketProducts?.length || 0}</span>
                  </div>
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
          <div className="other-right">
            <div className="other-right-child">
              <strong>Məlumat</strong>
              <ul className="other-content">
                <li><Link href="/campaigns">Kampaniyalar</Link></li>
                <li><Link href="/cart">Müştəri kartı</Link></li>
                <li><Link href="/bendler">Brendlər</Link></li>
                <li><Link href="/blog">Bloq</Link></li>
              </ul>
            </div>
            <div className="other-right-child">
              <strong>Şirkət</strong>
              <ul className="other-content">
                <li><Link href="/haqqqinda">Şirkət haqqında</Link></li>
                <li><Link href="/shops">Mağazalar</Link></li>
                <li><Link href="/vakansiyalar">Vakansiyalar</Link></li>
                <li><Link href="/satislar">Korporativ satışlar</Link></li>
              </ul>
            </div>
            <div className="other-right-child">
              <strong>Alıcılara</strong>
              <ul className="other-content">
                <li><Link href="/catdirilma">Çatdırılma və ödəniş</Link></li>
                <li><Link href="/zemanet">Zәmanәt</Link></li>
                <li><Link href="/Servis">Servis mərkəzləri</Link></li>
              </ul>
            </div>
          </div>
        </Drawer>
      )}


      {openAuthDrawer && (
        <Drawer

          anchor="right"
          open={openAuthDrawer}
          onClose={toggleDrawe(false)}
        >
          <div className="modal-right-box">
            <div className="modal-inner-box">
              <div className="register-icon">
                {!linkIsSent ? (
                  <div className="register-childe">
                    <Typography
                      className="mt-32 text-4xl font-extrabold tracking-tight leading-tight text-center"
                      mb={5}
                    >
                      Qeydiyyat
                    </Typography>
                    <form
                      name="registerForm"
                      className="flex flex-col justify-center w-full mt-32"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <TextField
                        className="mb-24"
                        id="standard-start-adornment"
                        label="Ad"
                        required
                        fullWidth
                        mb={2}
                        error={errors.name}
                        {...register("name")}
                      />
                      {!!errors.name?.message && <p style={{ color: 'red' }}>{errors.name?.message}</p>}
                      <TextField
                        className="mb-24"
                        id="standard-start-adornment"
                        label="Email"
                        variant="outlined"
                        required
                        fullWidth
                        error={errors.email}
                        {...register("email")}
                      />
                      {!!errors.email?.message && <p style={{ color: 'red' }}>{errors.email?.message}</p>}
                      <TextField
                        className="mb-24"
                        id="standard-start-adornment"
                        label="Password"
                        type="password"
                        variant="outlined"
                        required
                        fullWidth
                        error={errors.password}
                        {...register("password")}
                      />
                      {!!errors.password?.message && <p style={{ color: 'red' }}>{errors.password?.message}</p>}
                      <Button
                        variant="contained"
                        color="secondary"
                        className=" w-full mt-24"
                        aria-label="Register"
                        type="submit"
                        size="large"
                        style={{ opacity: !isValid ? 0.5 : 1 }}
                        disabled={!isValid}
                      >
                        Qeydiyyatdan keçmək
                      </Button>
                    </form>
                  </div>
                ) : (

                  <div className="message-link"><p >Link e-mail ünvanınıza göndərilib.</p></div>

                )}
              </div>
            </div>
          </div>
        </Drawer>
      )}


      {burgerMenu && (
        <div className="drawer">
          <Drawer
            anchor="left"
            open={burgerMenu}
            onClose={() => setBurgerMenu(false)}
          >
            <div className="menu-left">
              <div className="users">
                <ul>
                  <li className="user">
                    <button onClick={toggleDrawe(true)}>
                      <BiUser />
                    </button>
                  </li>
                  <li className="favori">
                    <Link href="/favorites">
                      <button>
                        <BiHeart />
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="menu-rigth">
                <div className="menu-right-child">
                  <strong className="title-menu">Məlumat</strong>
                  <ul className="menu-content">
                    <li><Link href="/campaigns">Kampaniyalar</Link></li>
                    <li><Link href="/cart">Müştəri kartı</Link></li>
                    <li><Link href="/bendler">Brendlər</Link></li>
                    <li><Link href="/blog">Bloq</Link></li>
                  </ul>
                </div>
                <div className="menu-right-child">
                  <strong className="title-menu">Şirkət</strong>
                  <ul className="menu-content">
                    <li><Link href="/haqqqinda">Şirkət haqqında</Link></li>
                    <li><Link href="/shops">Mağazalar</Link></li>
                    <li><Link href="/vakansiyalar">Vakansiyalar</Link></li>
                    <li><Link href="/satislar">Korporativ satışlar</Link></li>
                  </ul>
                </div>
                <div className="menu-right-child">
                  <strong className="title-menu">Alıcılara</strong>
                  <ul className="menu-content">
                    <li><Link href="/catdirilma">Çatdırılma və ödəniş</Link></li>
                    <li><Link href="/zemanet">Zәmanәt</Link></li>
                    <li><Link href="/Servis">Servis mərkəzləri</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </Drawer>
        </div>

      )}
    </div >
  );
};

export default Header;
