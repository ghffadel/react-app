import styled from "styled-components/native";

const StyledButton = styled.Button`
  width: 50vw;
`;

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  padding: 1vh;
`;

const StyledText = styled.Text`
  color: red;
`;

const StyledTitle = styled.Text`
    font-size: large;
`

const Intro = ({ navigation }) => {
  return (
    <Container>
      <StyledTitle>O que é o React Native?</StyledTitle>
      <StyledText>
        O React Native é um framework baseado no já aclamado React, desenvolvido
        pela equipe do Facebook, que possibilita o desenvolvimento de aplicações
        mobile, tanto para Android, como para iOS, utilizando apenas Javascript.
      </StyledText>
      <StyledButton
        title="Próximo"
        onPress={() => navigation.navigate("História")}
      />
    </Container>
  );
};

export default Intro;
