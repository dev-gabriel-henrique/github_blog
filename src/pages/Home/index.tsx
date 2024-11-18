import { HomeContainer, PubContainer } from "./styles";
import { FetchInput } from "./components/FetchInput";
import { PerfilCard } from "./components/PerfilCard";
import { Cards } from "../../components/Cards";

export function Home() {
  return (
    <HomeContainer>
      <PerfilCard />
      <FetchInput />

      <PubContainer>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </PubContainer>
    </HomeContainer>
  )
}