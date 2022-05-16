import styled from 'styled-components/native'
import TeamCard from '../components/TeamCard'
const StyledView = styled.View`
    display: flex;
    flex: 1;
    background-color: #00517c;
    align-items: center;
    justify-content: space-evenly;
`

const StyledTitle = styled.Text`
    color: white;
    font-size: 32px;
    font-weight: 600;
`
const Equipe = () => {
  return (
    <StyledView>
      <StyledTitle>Equipe</StyledTitle>
      <TeamCard member='dio' memberName='Diógeles Tamaturgo'/>
      <TeamCard member='fadel' memberName='Gustavo Fadel'/>
      <TeamCard member='luis' memberName='Luís Scantelbury'/>
    </StyledView>
  )
}

export default Equipe