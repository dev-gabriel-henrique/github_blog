import axios from "axios";
import { useEffect, useState } from "react";

import { HomeContainer } from "./styles";

import { Cards } from "../../components/Cards";
import { PerfilCard } from "./components/PerfilCard";

export interface IUserData {
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

export function Home() {

  // Dados do usuário:
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

  return (
    <HomeContainer>
      <PerfilCard 
        data={userData!}
        hasError={hasError}
        isLoading={isLoading}
      />
        <Cards />
    </HomeContainer>
  );
}
