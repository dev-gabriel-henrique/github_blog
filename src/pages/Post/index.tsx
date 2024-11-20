import axios from "axios";
import Markdown from "react-markdown";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatCircle,
} from "phosphor-react";

import { MarkdownContainer, PostContainer, PostHeader } from "./styles";
import github from "../../assets/github-icon.svg";
import { IUserData } from "../Home";
import dayjs from "dayjs";
import remarkGfm from "remark-gfm";
import { CardContainer, CardTitle } from "../../components/Cards/Cards";

interface IPostProps {
  number: string;
  title: string;
  body: string;
  user: IUserData;
  html_url: string;
  comments: number;
  created_at: string;
}

export function Post() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState<IPostProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const fetchIssueById = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/dev-gabriel-henrique/github_blog/issues/${id}`,
          {
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
            },
          }
        );

        if (response.data) {
          setPost(response.data);
        } else {
          setHasError(true);
        }
      } catch (error) {
        console.log("Erro ao buscar os posts do Github", error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchIssueById();
  }, []);

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
    navigate("/erro-404");
    return;
  }

  return (
    <PostContainer>
      {post ? (
        <>
          <PostHeader>
            <div>
              <NavLink to={"/"} title="Página Inicial">
                <CaretLeft weight="bold" size={14} />
                Voltar
              </NavLink>

              <NavLink to={post!.html_url} title="Ver no Github" target="blank">
                Ver no Github
                <ArrowSquareOut size={14} />
              </NavLink>
            </div>

            <h2>{post.title}</h2>

            <ul>
              <ul role="list">
                <li>
                  <img src={github} alt="Username" />
                  {post?.user.login}
                </li>
                <li>
                  <Calendar weight="fill" size={18} />
                  {dayjs(post?.created_at).fromNow()}
                </li>
                <li>
                  <ChatCircle weight="fill" size={18} />
                  {`${post.comments} comentários`}
                </li>
              </ul>
            </ul>
          </PostHeader>

          <MarkdownContainer>
            <Markdown remarkPlugins={[remarkGfm]}>{post?.body}</Markdown>
          </MarkdownContainer>
        </>
      ) : (
        ""
      )}
    </PostContainer>
  );
}
