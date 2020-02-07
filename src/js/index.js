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
import search from "../assets/search.png";

const headerTemplate = require("../views/header.handlebars");
const menuTemplate = require("../views/menu.handlebars");
const timerTemplate = require("../views/timer.handlebars");
const headerContentTemplate = require("../views/header-content.handlebars");
const withoutTimerTemplate = require("../views/without-timer.handlebars");
const contentTemplate = require("../views/content.handlebars");
const contentMenuTemplate = require("../views/content-menu.handlebars");

const header_obj = {
  header_image: landing_logo,
  chat_image: landing_chat
};
const menu_obj = {
  links: [
    {
      address: "#unlock",
      text: "Flash and Unlock"
    },
    {
      address: "#base",
      text: "Cell Phone Parts"
    },
    {
      address: "#contact",
      text: "Car Electronics"
    },
    {
      address: "#blog",
      text: "Repair Equipment"
    },
    {
      address: "#custom",
      text: "Parts and Component"
    },
    {
      address: "#support",
      text: "STEM Toys & Hobbies"
    },
    {
      address: "#tools",
      text: "Engry Saving"
    },
    {
      address: "#tools",
      text: "Go to Chart"
    },
    {
      address: "#tools",
      text: "Log In"
    }
  ],
  search_img: search
};
const header_content_obj = {
  title: "BLACK FRIDAY",
  title_desc: "EXCLUSIVE DISCOUNTS",
  discount: 27,
  messages: [
    {
      message:
        "Заходите к нам на сайт 25 ноября! В самую незабываемую С пятницу в интернет-магазине GsmServer стартует самая безудержная распродажа."
    },
    {
      message: "Окунитесь в мир невероятных скидок на все товары GSM-тематики."
    }
  ]
};
const content_menu_obj = {
  elements: [
    {
      address: "#unlock",
      img_src: friday_unlock,
      value: "Flash and Unlock"
    },
    {
      address: "",
      img_src: friday_car,
      value: " Car Electronics"
    },
    {
      address: "",
      img_src: friday_energy,
      value: " Engry Saving"
    },
    {
      address: "#lamps",
      img_src: friday_lamp,
      value: " Table Lamps"
    },
    {
      address: "",
      img_src: friday_stem,
      value: " STEM Toys & Hobbies"
    }
  ]
};
const content_obj = {
  section: [
    {
      id: "unlock",
      title: "FLASH & UNLOCK",
      discount: 27,
      cards: [
        {
          card_title:
            "Octoplus Box Samsung + LG + JTAG Activated with Optimus Cable Set + JIG Set",
          card_text:
            "Octoplus Box is a groundbreaking phone servicing solution that combines unibox and JTAG interfaces and supports over 530 Samsung, 900 LG and 460 by JTAG mobile devices.",
          before_price: "328.00",
          after_price: "318.50",
          image_src: octoplus318
        },
        {
          card_title: "Octopus Box Samsung + LG Edition with Optimus Cable Set",
          card_text:
            "Octopus Samsung + LG Edition lets you perform Flash / Unlock / Repair operations with LG & Samsung cell phones with Octopus Box service tool.",
          before_price: "229.00",
          after_price: "219.99",
          image_src: octopus220
        },
        {
          card_title: "Octopus Box Samsung Edition with Optimus Cable Set",
          card_text:
            "Octopus Samsung Edition lets you perform Flash / Unlock / Repair operations with Samsung cell phones using Octopus Box service tool.",
          before_price: "167.00",
          after_price: "150.00",
          image_src: octopus150
        }
      ],
      arrow_img: arrow
    },
    {
      id: "lamps",
      title: "TABLE LAMPS",
      discount: 11,
      cards: [
        {
          card_title: "BST Dongle with Cable Set",
          card_text:
            "BST Dongle allows user to perform flash, unlock, remove screen lock, repair IMEI, NVM / EFS, root procedures in HTC and Samsung Android smartphones.",
          before_price: "79.00",
          after_price: "60.50",
          image_src: bst
        },
        {
          card_title: "CS-Tool Dongle",
          card_text:
            "CS-Tool Dongle (Chinese phone service tool) revolutionary phone servicing solution, which is supports MTK and SPD-based devices.",
          before_price: "59.00",
          after_price: "50.00",
          image_src: cs
        },
        {
          card_title:
            "Furious Gold USB Key Activated with Packs 1, 2, 3, 4, 5, 6, 7, 8, 11",
          card_text:
            "Furious Gold USB Key pre-activated with Furious Gold Packs 1, 2, 3, 4, 5, 6, 7, 8 & 11 is the latest device form Furious Team developed for mobile phones unlock and repair.",
          before_price: "149.00",
          after_price: "139.00",
          image_src: furious
        }
      ],
      arrow_img: arrow
    }
  ]
};

const without_timer_obj = {
  messages: [
    { value: "THE BLACK" },
    { value: "FRIDAY PROMO" },
    { value: "IS OVER" }
  ],
  arrow_img: arrow,
  text_link: "TRY TO FIND SOME INTERESTING OFFERS HERE"
};
const draw_array_with_timer = [
  { selector: "#header", template: headerTemplate, object: header_obj },
  { selector: "#menu", template: menuTemplate, object: menu_obj },
  {
    selector: "#header-content",
    template: headerContentTemplate,
    object: header_content_obj
  },
  {
    selector: "#content-menu",
    template: contentMenuTemplate,
    object: content_menu_obj
  },
  { selector: "#content", template: contentTemplate, object: content_obj }
];

const draw_array_without_timer = [
  { selector: "#header", template: headerTemplate, object: header_obj },
  // {selector: "#menu", template: menuTemplate, object:menu_obj},
  {
    selector: "#header-content",
    template: withoutTimerTemplate,
    object: without_timer_obj
  }
];

const myTimer = new MyTimer(
  0,
  timerTemplate,
  draw_array_with_timer,
  draw_array_without_timer,
  "#timer"
);

const menu = new Menu();
window.onload = () => {
  myTimer.createTimer();

  document
    .querySelector(".mh-header-primary")
    .addEventListener("click", menu.open);
  document
    .querySelector(".mh-menu-closed")
    .addEventListener("click", menu.close);
  const screenService = new ScreenService();
  screenService.resize();
  document.querySelector("body").onresize = screenService.resize;
};
