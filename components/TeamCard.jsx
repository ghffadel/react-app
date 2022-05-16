import styled from "styled-components/native"

const StyledView = styled.View`
    display: flex;
    align-items: center;
`

const StyledImage = styled.Image`
    width: 100;
    height: 100;
    border-radius: 10px;
`

const StyledText = styled.Text`
  color: white;
  font-size: 18;
`
const TeamCard = ({member, memberName = ""}) => {
  return (
      <StyledView>
      <StyledImage source={require(`../assets/${member}.png`)} />
      <StyledText>{memberName}</StyledText>
      </StyledView>
  )
}

export default TeamCard