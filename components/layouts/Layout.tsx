import Head from "next/head"
import { FC } from "react"
import { Navbar } from "../ui"

interface Props{
    title?: string
}

const origin = (typeof window === "undefined") ? '' : window.location.origin;


export const Layout: FC<Props> = ({children, title}) => {

  return (
    <>
        <Head>
            <title>{title || 'PokemonApp'}</title>
            <meta name="description" content={`Información sobre el pokemon ${title}`}/>
            <meta name="author" content="Diego Mendoza" />
            <meta name="keydors" content={`${title}, pokemon, pokedex`} />
            <meta property="og:title" content={`Información sobre el pokemon ${title}`} />
            <meta property="og:description" content={`Esta es la pagina sobre ${title}`}/>
            <meta property="og:image" content={`${origin}/img/banner.png`} />
        </Head>

        <Navbar/>

        <main style={{
            padding: '0px 20px'
        }}>
            {children}
        </main>
    </>
  )
}
