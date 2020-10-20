import { GetStaticProps } from 'next'
import Head from 'next/head'

import { PrismaClient } from '@prisma/client'

import { Container } from '../styles/pages/Home'
import Song from '../components/Song'

interface AppProps {
  songs: [
    {
      artist: {
        id: number
        name: string
      }
      artistId: number
      youtubeId: string
      albumCoverUrl: string
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
        <title>Next + Prisma</title>
      </Head>

      <main>
        <ul>
          {songs.map(song => (
            <Song
              key={song.id}
              id={song.id}
              artistName={song.artist.name}
              title={song.name}
              cover={song.albumCoverUrl}
            />
          ))}
        </ul>
      </main>
    </Container>
  )
}
