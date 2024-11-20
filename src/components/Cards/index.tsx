import dayjs from "dayjs";
import axios from "axios";
import { useEffect, useState } from "react";

import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'

import { CardContainer, CardTitle } from "./Cards";

dayjs.locale("pt-br")
dayjs.extend(relativeTime)

interface IPostCard {
  id: number;
  title: string;
  body: string;
  created_at: string;
}

interface ICardsProps {
  searchPost?: string
}

export function Cards({ searchPost }:ICardsProps) {
  const [issuesList, setIssuesList] = useState<IPostCard[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const fetchIssuesList = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/search/issues",
          {
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
            },
            params: {
              q: searchPost ? `repo:dev-gabriel-henrique/github_blog ${searchPost}` : "repo:dev-gabriel-henrique/github_blog",
            },
          }
        );

        if (response.data) {
          setIssuesList(response.data.items);
        } else {
          setHasError(true);
        }
      } catch (error) {
        console.log("Erro ao buscar os dados do Github", error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchIssuesList();
  }, [searchPost]);

  if (isLoading) {
    return (
    <CardContainer>
      <CardTitle>
      <h3>Carregando dados...</h3>
      </CardTitle>
    </CardContainer>
    )
  }

  if (hasError) {
    return (
      <CardContainer>
      <CardTitle>
      <h3>Erro ao carregar os dados. Tente novamente mais tarde.</h3>
      </CardTitle>
      </CardContainer>
    )
  }

  if (issuesList.length === 0) {
    return (
      <CardContainer>
      <CardTitle>
      <h3>Sem Publicações no momento!</h3>
      </CardTitle>
      </CardContainer>
    )
  }


  return issuesList.map((item) => {
    return (
      <CardContainer key={item?.id}>
        <CardTitle>
          <h3>{item?.title}</h3>
          <span>{dayjs(item.created_at).fromNow()}</span>
        </CardTitle>
        <p>{item?.body}</p>
      </CardContainer>
    );
  });
}
