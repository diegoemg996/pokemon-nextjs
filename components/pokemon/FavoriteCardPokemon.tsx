import { Card, Grid } from '@nextui-org/react'
import { useRouter } from 'next/router';
import React, { FC } from 'react'

interface Props{
    pokemon: number;
}

export const FavoriteCardPokemon: FC<Props> = ({pokemon}) => {

    const router = useRouter();

    const onFavoriteClicked = ()=>{
        router.push(`/pokemon/${pokemon}`)
    }
  return (
        <Grid xs={6} sm={3} md={2} xl={1} key={`${pokemon}`}>
          <Card hoverable clickable css={{padding: 10}} onClick={onFavoriteClicked}>
            <Card.Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon}.svg`}
              width={'100%'}
              height={140}
            />
          </Card>
        </Grid>
  )
}
