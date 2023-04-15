import React, {useState} from 'react';
import {Tab} from "semantic-ui-react";
import { RegisterForm } from "../../../components/Admin/Auth";
import { Icon } from "../../../assets";
import "./Auth.scss";
export  function Auth() {

  const [activeIndex, setActiveIndex] = useState(0);

  const openLogin = () => setActiveIndex(0);

  const panels = [
    {
      menuItem: "Entrar",
      render: () => (
        <Tab.Pane>
          <h2>Login FORM</h2>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Nuevo usuario",
      render: () => (
        <Tab.Pane>
          <RegisterForm openLogin={openLogin}/>
        </Tab.Pane>
      ),
    },
  ]
  return (
    <div className="auth">
      <Icon.LogoWhite className='logo' />
      <Tab panes={panels} className="auth_forms" activeIndex={activeIndex} onTabChange={(_,data) => setActiveIndex(data.activeIndex)} />
    </div>
  )
}
