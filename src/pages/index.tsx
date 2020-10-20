import { GetStaticProps } from 'next'
import Head from 'next/head'

import { PrismaClient } from '@prisma/client'

import { Container } from '../styles/pages/Home'

interface AppProps {
  songs: [
    {
      artist: {
        id: number
        name: string
      }
      artistId: number
      id: number
      name: string
    }
  ]
}

export const getStaticProps: GetStaticProps = async () => {
  const prisma = new PrismaClient()
  const songs = await prisma.song.findMany({
    include: { artist: true }
  })
  return {
    props: { songs }
  }
}

export default function Home({ songs }: AppProps): JSX.Element {
  return (
    <Container>
      <Head>
        <title>Next App Boilerplate</title>
      </Head>

      <main>
        <ul>
          {songs.map(song => (
            <li key={song.id}>{song.name}</li>
          ))}
        </ul>
      </main>
    </Container>
  )
}
