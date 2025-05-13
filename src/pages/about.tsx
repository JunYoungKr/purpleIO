"use client";

import styled from "styled-components";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Section>
          <Title>About This Project</Title>
          <p style={{ color: "#4b5563" }}>
            이 프로젝트는 맛집 정보를 정리해서 보여주는 간단한 예제입니다.
            <br />
            프로젝트를 진행하며 아쉬웠던 점, 고민했던 점, 배운 점에 대해
            간단하게 서술해 보았습니다.
          </p>
        </Section>

        <Section>
          <SubTitle>아쉬웠던 점</SubTitle>
          <List>
            <li>
              json-server를 사용하다 보니 데이터 구조가 단순해서 확장성이
              부족했습니다.
            </li>
            <li>
              tailwind 설정이 잘못되어 일부 tailwind 사용이 불가했습니다. <br />
              때문에 평소 익숙했던 styled-components를 사용하게 되었습니다.
            </li>
            <li>
              무슨 이유에선지는 모르겠지만 가끔 페이지 이동 또는 새로고침 시
              스타일이 초기화되는 버그가 발생했습니다. <br />
              npm run dev 명령어를 통해 서버 재실행 시 정상적으로 돌아왔지만
              해결하지 못한 점이 아쉽습니다.
            </li>
          </List>
        </Section>

        <Section>
          <SubTitle>프로젝트를 진행하며 고민했던 점</SubTitle>
          <List>
            <li>
              평소 shadcn ui 사용을 즐겨하지만 Material-UI와 같은 다른 CSS
              프레임워크에 관심을 갖고 있었기에 사용을 할까 고민했지만
              <br />
              NextJS와 호환이 좋은 shadcn을 CSS 라이브러리로 채택하게
              되었습니다.
            </li>
            <li>
              db.json에 있는 이미지를 그대로 사용하려고 했더니 오류가
              발생했습니다. <br />
              찾아본 결과 따로 도메인을 설정해주어야 사용할 수 있다는 것을 알게
              되었습니다.
              <br />
              next.config.ts에 images - domains 설정을 해 사용했습니다.
            </li>
          </List>
        </Section>

        <Section>
          <SubTitle>배운 점</SubTitle>
          <List>
            <li>
              Next.js의 기본적인 라우팅과 API 연동 구조를 익힐 수 있었습니다.
            </li>
            <li>
              평소에 v14만 사용하다 Next.js v15를 처음 사용해보는데 처음
              프로젝트 생성 시 App Router을 추천하지 않는다는 것이
              인상적이었습니다.
            </li>
          </List>
        </Section>
      </Main>
      <Footer />
    </Container>
  );
};

export default AboutPage;

const Container = styled.div`
  background-color: white;
  @media (min-width: 768px) {
    height: 100%;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 40px;
  background-color: white;

  @media (max-width: 640px) {
    height: 100%;
  }
`;

const Section = styled.section``;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: black;
`;

const SubTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: black;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 1rem;
  color: #4b5563;
  & > li {
    margin-bottom: 0.25rem;
  }
`;
