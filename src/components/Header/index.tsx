import background from '../../assets/Cover.png'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={background} />
    </HeaderContainer>
  )
}