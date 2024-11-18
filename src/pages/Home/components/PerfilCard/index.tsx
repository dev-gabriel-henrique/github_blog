import { NavLink } from "react-router-dom";
import { ArrowSquareOut, Users } from "phosphor-react";

import github from "../../../../assets/github-icon.svg";
import building from "../../../../assets/building-icon.svg";

import { PerfilContainer, PerfilInfos } from "./styles";
import axios from "axios";
import { useEffect, useState } from "react";

interface IUserData {
  id: number;
  login: string;
  avatar_url: string;
  bio: string;
  followers: number;
  html_url: string;
  company: string;
  name: string;
  public_repos: number;
}

export function PerfilCard() {
  const [userData, setUserData] = useState<IUserData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/dev-gabriel-henrique`,
          {
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
            },
          }
        );

        if (response.data) {
          setUserData(response.data);
        } else {
          setHasError(true);
        }
      } catch (error) {
        console.error("Erro ao buscar os dados do GitHub:", error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (userData?.public_repos === 0 || hasError) {
    return (
      <PerfilContainer>
        <div>
          <img src={userData?.avatar_url} alt="Foto de perfil!" />
          <h2>Usuário não encontrado</h2>
        </div>

        <PerfilInfos>
          <p>Sem descrição disponível</p>
        </PerfilInfos>
      </PerfilContainer>
    );
  }

  return (
    <PerfilContainer key={userData?.id}>
      <div>
        <img src={userData?.avatar_url} alt="Foto de perfil" />
        
        <div>
        <h2>{userData?.name}</h2>
        <PerfilInfos>
          <p>{userData?.bio}</p>

          <ul role="list">
            <li>
              <img src={github} alt="Username" />
              {userData?.login}
            </li>
            <li>
              <img src={building} />
              {userData?.company ? userData?.company : "Student"}
            </li>
            <li>
              <Users weight="fill" size={18} />
              {`${userData?.followers} seguidores`}
            </li>
          </ul>
        </PerfilInfos>
        </div>
      </div>


      <NavLink to={userData?.html_url || "#"} target="_blank">
        Github
        <ArrowSquareOut size={14} />
      </NavLink>
    </PerfilContainer>
  );
}
