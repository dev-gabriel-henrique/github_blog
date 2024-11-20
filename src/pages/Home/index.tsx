import { FetchContainer, HomeContainer, PubContainer } from "./styles";
import { PerfilCard } from "./components/PerfilCard";
import { Cards } from "../../components/Cards";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export function Home() {
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

  return (
    <HomeContainer>
      <PerfilCard />
      <FetchContainer>
        <div>
          <h3>Publicações</h3>
          <span></span>
        </div>

        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register("search")}
        />
      </FetchContainer>
      )
      <PubContainer>
        <Cards searchPost={debouncedSearch} />
      </PubContainer>
    </HomeContainer>
  );
}
