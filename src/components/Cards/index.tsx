import dayjs from "dayjs";
import axios from "axios";
import { useEffect, useState } from "react";

import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";

import { CardContainer, CardTitle } from "./Cards";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FetchContainer, PubContainer } from "../../pages/Home/styles";

dayjs.locale("pt-br");
dayjs.extend(relativeTime);

interface IPostCard {
  number: number;
  title: string;
  body: string;
  created_at: string;
}

export function Cards() {
  const [issuesList, setIssuesList] = useState<IPostCard[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  const { register, watch } = useForm({
    defaultValues: {
      search: "",
    },
  });

  const search = watch("search");
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(handler);
  }, [search]);

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
              q: debouncedSearch
                ? `repo:dev-gabriel-henrique/github_blog ${debouncedSearch}`
                : "repo:dev-gabriel-henrique/github_blog",
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
  }, [debouncedSearch]);

  if (isLoading) {
    return (
      <CardContainer>
        <CardTitle>
          <h3>Carregando dados...</h3>
        </CardTitle>
      </CardContainer>
    );
  }

  if (hasError) {
    return (
      <CardContainer>
        <CardTitle>
          <h3>Erro ao carregar os dados. Tente novamente mais tarde.</h3>
        </CardTitle>
      </CardContainer>
    );
  }

  if (issuesList.length === 0) {
    return (
      <CardContainer>
        <CardTitle>
          <h3>Sem Publicações no momento!</h3>
        </CardTitle>
      </CardContainer>
    );
  }

  return (
    <>
      <FetchContainer>
        <div>
          <h3>Publicações</h3>
          <span>{issuesList.length} publicações</span>
        </div>

        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register("search")}
        />
      </FetchContainer>

      <PubContainer>
      {issuesList.map((item) => {
        return (
          <NavLink to={`/post/${item.number}`} key={item.number}>
            <CardContainer key={item?.number}>
              <CardTitle>
                <h3>{item?.title}</h3>
                <span>{dayjs(item.created_at).fromNow()}</span>
              </CardTitle>
              <p>{item?.body}</p>
            </CardContainer>
          </NavLink>
        );
      })}
      </PubContainer>
    </>
  );
}
