import { NavLink } from "react-router-dom";
import { ArrowSquareOut, Users } from "phosphor-react";

import github from "../../../../assets/github-icon.svg";
import building from "../../../../assets/building-icon.svg";

import { PerfilContainer, PerfilInfos } from "./styles";
import { IUserData } from "../..";

interface IPerfilProps {
  data: IUserData;
  isLoading: boolean;
  hasError: boolean
}

export function PerfilCard({ 
  data,
  isLoading,
  hasError
}: IPerfilProps) {
  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (data?.public_repos === 0 || hasError) {
    return (
      <PerfilContainer>
        <div>
          <img src={data?.avatar_url} alt="Foto de perfil!" />
          <h2>Usuário não encontrado</h2>
        </div>

        <PerfilInfos>
          <p>Sem descrição disponível</p>
        </PerfilInfos>
      </PerfilContainer>
    );
  }

  return (
    <PerfilContainer key={data?.id}>
      <div>
        <img src={data?.avatar_url} alt="Foto de perfil" />
        
        <div>
        <h2>{data?.name}</h2>
        <PerfilInfos>
          <p>{data?.bio}</p>

          <ul role="list">
            <li>
              <img src={github} alt="Username" />
              {data?.login}
            </li>
            <li>
              <img src={building} />
              {data?.company ? data?.company : "Student"}
            </li>
            <li>
              <Users weight="fill" size={18} />
              {`${data?.followers} seguidores`}
            </li>
          </ul>
        </PerfilInfos>
        </div>
      </div>


      <NavLink to={data?.html_url || "#"} target="_blank">
        Github
        <ArrowSquareOut size={14} />
      </NavLink>
    </PerfilContainer>
  );
}
