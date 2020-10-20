import NextLink from 'next/link'
import { ListItem } from '../styles/pages/Song'

interface AppProps {
  title: string
  artistName: string
  cover: string
  id: number
}

export default function Song({
  title,
  artistName,
  cover,
  id
}: AppProps): JSX.Element {
  return (
    <NextLink href={'/songs/[id]'} as={`/songs/${id}`} passHref>
      <ListItem>
        <img src={cover} alt="cover" />
        <section>
          <h2>{title}</h2>
          <p>{artistName}</p>
        </section>
      </ListItem>
    </NextLink>
  )
}
