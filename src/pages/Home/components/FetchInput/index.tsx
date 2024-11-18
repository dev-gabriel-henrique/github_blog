import { FetchContainer } from "./styles";

export function FetchInput() {
  return (
    <FetchContainer>
      <div>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </div>

      <form>
        <input 
        type="text" 
        placeholder="Buscar conteúdo" 
        />
      </form>
    </FetchContainer>
  )
}