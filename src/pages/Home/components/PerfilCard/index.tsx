import { NavLink } from "react-router-dom";
import { ArrowSquareOut, Users } from "phosphor-react";

import avatar from '../../../../assets/avatar.png'
import github from '../../../../assets/github-icon.svg'
import building from '../../../../assets/building-icon.svg'

import { PerfilContainer, PerfilInfos } from "./styles";

export function PerfilCard() {
  return (
    <PerfilContainer>
      <img src={avatar} alt="Foto de perfil!" />
      <PerfilInfos>
        <h2>Cameron Williamson</h2>
        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

        <ul role="list">
          <li>
            <img src={github} alt="Username" /> 
            cameronwll
          </li>
          <li>
            <img src={building} />
            Rocketseat
          </li>
          <li>
            <Users weight="fill" size={18} />
            32 seguidores
          </li>
        </ul>
      </PerfilInfos>
      
      <NavLink to="#">
        Github 
        <ArrowSquareOut size={14} />
        </NavLink>
    </PerfilContainer>
  )
}