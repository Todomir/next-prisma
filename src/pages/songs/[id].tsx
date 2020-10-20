import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import NextLink from 'next/link'

import { PrismaClient } from '@prisma/client'
import { Container } from '../../styles/pages/Home'
import { Button, Iframe, Main } from '../../styles/pages/Song'

interface AppProps {
  song: {
    artist: {
      id: number
      name: string
    }
    artistId: number
    youtubeID: string
    albumCoverUrl: string
    id: number
    name: string
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const prisma = new PrismaClient()

  const song = await prisma.song.findOne({
    include: { artist: true },
    where: { id: Number(params?.id) }
  })

  return {
    props: { song }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prisma = new PrismaClient()
  const songs = await prisma.song.findMany()

  return {
    paths: songs.map(song => ({
      params: {
        id: song.id.toString()
      }
    })),
    fallback: false
  }
}

export default function SongPage({ song }: AppProps): JSX.Element {
  return (
    <Container>
      <Head>
        <title>
          {song.name} - {song.artist.name}
        </title>
      </Head>

      <Main>
        <Iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${song.youtubeID}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <section>
          <NextLink href="/" passHref>
            <Button>Voltar</Button>
          </NextLink>
          <div>
            <h2>{song.name}</h2>
            <h5>{song.artist.name}</h5>
          </div>
        </section>
      </Main>
    </Container>
  )
}
