import Head from 'next/head'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Next App Boilerplate</title>
      </Head>

      <main>
        <h1>Hello, world!</h1>
        <p>Programmed to work and not to feel...</p>
      </main>
    </Container>
  )
}

export default Home
