import Head from 'next/head';
import Button from '../components/ui/Button'
import styled from "styled-components";
export default function Home() {
  return (
    <Wrapper>
      <h2>Centrix Roleplay</h2>
      <Button>Button</Button>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  padding: 4em;
`
