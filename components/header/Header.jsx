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
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscSearch } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
// forms
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Xananı boş saxlamayın !")
    .min(6, "Minimum 6 simvol"),
  // surname: yup.string().required("Xananı boş saxlamayın !"),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),

  // mail: yup
  //   .string()
  //   .required("Xananı boş saxlamayın !")
  // .matches(
  //   /^((\+)?994(\s)?)?(5[015]|7[07]|99|10|60)(\s)?([0-9]{3})(\s)?([0-9]{2})(\s)?([0-9]{2})$/,
  //   "Mobil nömrənizi düz qeyd edin !"
  // ),
});

const defaultValues = {
  name: "",
  password: "",
  email: "",
};

const Header = ({ setShow, size }) => {

  const { control, formState, handleSubmit, watch, register, setValue } =
    useForm({
      mode: "onChange",
      defaultValues,
      resolver: yupResolver(schema),
    });
  const { isValid, dirtyFields, errors, setError } = formState;

  function onSubmit({ name, surname, mail }) {
    console.log(name, password, email);
  }


  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [user, setUser] = useState(false)

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

    setUser(open);
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
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <Link href="/">
            <Image src={logo} alt="logo" />
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
            <li>
              <button onClick={toggleDrawe(true)}>
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
              <Link href="/cart">
                <button>
                  <AiOutlineShoppingCart />
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
              <ul>
                <li><Link href="/kampaniyalar">Kampaniyalar</Link></li>
                <li><Link href="/kart">Müştəri kartı</Link></li>
                <li><Link href="/bendler">Brendlər</Link></li>
                <li><Link href="/blog">Bloq</Link></li>
              </ul>
            </div>
            <div className="other-right-child">
              <strong>Şirkət</strong>
              <ul>
                <li><Link href="/haqqqinda">Şirkət haqqında</Link></li>
                <li><Link href="/magazalar">Mağazalar</Link></li>
                <li><Link href="/vakansiyalar">Vakansiyalar</Link></li>
                <li><Link href="/satislar">Korporativ satışlar</Link></li>
              </ul>
            </div>
            <div className="other-right-child">
              <strong>Alıcılara</strong>
              <ul>
                <li><Link href="/catdirilma">Çatdırılma və ödəniş</Link></li>
                <li><Link href="/zemanet">Zәmanәt</Link></li>
                <li><Link href="/Servis">Servis mərkəzləri</Link></li>
              </ul>
            </div>
          </div>
        </Drawer>
      )}
      {user && (
        <Drawer

          anchor="right"
          open={user}
          onClose={toggleDrawe(false)}
        >
          <div className="modal">
            <div className="modal-inner">
              <div className="register">
                <div className="register-childe">
                  <Typography
                    className="mt-32 text-4xl font-extrabold tracking-tight leading-tight text-center"
                    mb={5}
                  >
                    Qeydiyyat

                  </Typography>

                  <form
                    name="registerForm"
                    noValidate
                    className="flex flex-col justify-center w-full mt-32"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <Controller
                      name="name"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          className="mb-24"
                          id="standard-start-adornment"
                          label="Ad"
                          type="name"
                          error={!!errors.name}
                          helperText={errors?.name?.message}
                          variant="outlined"
                          required
                          fullWidth
                          mb={2}
                        />
                      )}
                    />
                    <Controller
                      name="Email"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          className="mb-24"
                          id="standard-start-adornment"
                          label="Email"
                          type="email"
                          error={!!errors.mail}
                          helperText={errors?.mail?.message}
                          variant="outlined"
                          required
                          fullWidth
                          onInput={(e) => {
                            e.target.value = Math.max(0, e.target.value)
                              .toString()
                              .slice(0, 9);
                          }}
                        />
                      )}
                    />

                    <Controller
                      name="password"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          className="mb-24"
                          id="standard-start-adornment"
                          // InputProps={{
                          //   startAdornment: (
                          //     <InputAdornment position="start">+994</InputAdornment>
                          //   ),
                          // }}
                          label="Password"
                          type="password"
                          error={!!errors.password}
                          helperText={errors?.surname?.password}
                          variant="outlined"
                          required
                          fullWidth
                        // onInput={(e) => {
                        //   // eslint-disable-next-line radix
                        //   e.target.value = Math.max(0, e.target.value)
                        //     .toString()
                        //     .slice(0, 9);
                        // }}
                        />
                      )}
                    />

                    <Button
                      variant="contained"
                      color="secondary"
                      className=" w-full mt-24"
                      aria-label="Register"
                      // disabled={_.isEmpty(dirtyFields) || !isValid}
                      type="submit"
                      size="large"
                    >
                      Qeydiyyatdan keçmək
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Drawer>
      )}


    </header>
  );
};

export default Header;
