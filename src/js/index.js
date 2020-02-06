import "./barrel";
import HandelbarHelper from "./handlebarsHelper";
import ScreenService from "./screenService";
import MyTimer from "./timer";
import Menu from "./menu";
// images
import landing_logo from "../assets/landing_logo.png";
import landing_chat from "../assets/landing_chat.png";
import friday_car from "../assets/friday_car.png";
import friday_energy from "../assets/friday_energy.png";
import friday_lamp from "../assets/friday_lamp.png";
import friday_stem from "../assets/friday_stem.png";
import friday_unlock from "../assets/friday_unlock.png";
import octoplus318 from "../assets/octoplus_sumsung318.png";
import octopus220 from "../assets/octopus_sumsung220.png";
import octopus150 from "../assets/octopus_sumsung150.png";
import bst from "../assets/bst_dongle.png";
import cs from "../assets/cs_tool_dongle.png";
import furious from "../assets/furious_fold_usb.png";
import arrow from "../assets/goto_arrow.png";
// import see_more_red from "../assets/see_more_red.png";

let footer = require("./");

import labe from "../assets/labe.png";

const hh = new HandelbarHelper();

hh.setImage(landing_logo, ".blog-header-logo");
hh.setImage(landing_chat, ".chat-header-logo");

hh.setImage(friday_unlock, "#friday-unlock");
hh.setSpanValue("Flash and Unlock", "#friday-unlock");

hh.setImage(friday_car, "#friday-car");
hh.setSpanValue("Car Electronics", "#friday-car");

hh.setImage(friday_energy, "#friday-energy");
hh.setSpanValue("Engry Saving", "#friday-energy");

hh.setImage(friday_lamp, "#friday-lamp");
hh.setSpanValue("Table Lamps", "#friday-lamp");

hh.setImage(friday_stem, "#friday-stem");
hh.setSpanValue("STEM Toys & Hobbies", "#friday-stem");

hh.setValue("-27%", "#unlock .discount-image");
hh.setValue("-11%", "#lamps .discount-image");


hh.setImage(octoplus318, "#octoplus");
hh.setImage(octopus220, "#octopusfirst");
hh.setImage(octopus150, "#octopussecond");

hh.setImage(bst, "#bst");
hh.setImage(cs, "#cs");
hh.setImage(furious, "#furious");

hh.setImage(arrow, "#gotocat .btn");

const timerDom = ["days", "hours", "minutes", "seconds"];

const myTimer = new MyTimer(14);
myTimer.createTimer(timerDom);

const menu = new Menu("#myDropdown");
document
  .querySelector(".mh-header-primary")
  .addEventListener("click", menu.open);
document.querySelector(".mh-menu-closed").addEventListener("click", menu.close);

const screenService = new ScreenService();
screenService.resize();
document.querySelector("body").onresize = screenService.resize;