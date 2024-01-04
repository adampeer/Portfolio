import styled from "styled-components"
import { isMobile } from "../utils/isMobile"
import data from "../data"

const Section = styled.section`
  height: auto;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  ${isMobile() ? `margin: 0;` : `margin-top: 10.5vh;`}
`

const Wrapper = styled.div`
  height: min(200vh,100%);
  display: flex;
  ${isMobile() ? `width: 90vw;` : `width: max(80vw,1000px);`}
  ${isMobile() ? `flex-direction: column;` : `flex-direction: row;`}
`

const LeftContainer = styled.div`
  flex: 1;
`

const RightContainer = styled.div`
  flex: 1;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${isMobile() ? `padding-top: 2rem;` : `padding: 1rem;`}
`

const Title = styled.h1`
  ${isMobile() ? `font-size: 4rem;` : `font-size: clamp(3rem,7.5vw,8rem);`}
  color: #fff;
  text-transform: uppercase;
`

const Subtitle = styled.h2`
  ${isMobile() ? `font-size: 1rem;` : `font-size: 3vh;`}
  color: #fff;
  letter-spacing: 0.1px;
  line-height: 2.1;
  ${isMobile() ? `font-size: 1rem;` : `font-size: clamp(1rem,1.5vw,3rem);`}
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${isMobile() ? `justify-content: center;` : ``}
  ${isMobile() ? `padding: 1rem 0.1rem;` : `padding: 1rem;`}
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: rem;
  border-radius: 10px;
`

const FormLabel = styled.label`
  color: #ffffff;
  font-family: "GeneralSans-Medium";
  ${isMobile() ? `padding: 1rem 0;` : `padding: 1vh 0;`}
  ${isMobile() ? `font-size: 1.2rem;` : `font-size: clamp(2rem,1.5vw,3rem);`}
`

const FormInput = styled.input`
  color: #ffffff;
  font-family: "GeneralSans-Medium";
  border: none;
  border-bottom: 1px solid #ffffff5e;
  background-color: #000000;
  ${isMobile() ? `padding: 1rem 0;` : `padding: 4vh 0;`}
  ${isMobile() ? `font-size: 1.2rem;` : `font-size: clamp(2rem,1.5vw,3rem);`}
  &:focus {
    outline: none;
    border-bottom: 1px solid #ffffff;
    background-color: #000000;
    color: #ffffff;
  }
`

const FormButton = styled.button`
  color: #ffffff;
  background-color: #000;
  font-family: "GeneralSans-Medium";
  border: 1px solid #ffffff;
  border-radius: 5rem;
  padding: 1rem;
  ${isMobile() ? `margin: 3rem 0;` : `margin: 5vh 0;`}
  ${isMobile() ? `font-size: 1.2rem;` : `font-size: clamp(2rem,2vw,3rem);`}
  &:hover {
    background-color: #ffffff;
    color: #000;
    border: 1px solid #000;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
`

const Contact = () => {
  return (
    <Section>
      <Wrapper>
        <LeftContainer>
          <TitleContainer id="contact">
            <Title> Let&apos;s Connect</Title>
            <Subtitle>{data.contact}</Subtitle>
          </TitleContainer>
        </LeftContainer>
        <RightContainer>
          <FormContainer>
            <Form action="https://send.pageclip.co/0eSwRTo6f76VKJ4ZwKojHEtunx1v8GfZ" method="POST" className="pageclip-form">
              <FormLabel>Name</FormLabel>
              <FormInput type="text" name="name" placeholder="John Doe" required />
              <FormLabel>Email</FormLabel>
              <FormInput type="email" name="email" placeholder="johndoe@email.com" required />
              <FormLabel>Message</FormLabel>
              <FormInput type="text" name="message" placeholder="Say hello" required />
              <FormButton type="submit" className="pageclip-form__submit">Send</FormButton>
            </Form>
          </FormContainer>
        </RightContainer>
      </Wrapper>
    </Section>
  )
}

export default Contact