import React from "react";
import type { lang } from "~/reducers/langSlice";

interface IMenu{
  props: {
    lang: lang,
    menuItems: 
  }
}


function Menu({lang, menuItems}) {

  return <div>Menu</div>;
}

export default Menu;
