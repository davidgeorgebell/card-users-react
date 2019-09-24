import React from 'react'

import Card from './Card';

import styled from 'styled-components';

 const CardList = props => (
     <CardListWrapper>
        {
            props.monsters.map(monster => (
                <Card key={monster.id} monster={monster} />
            )
          )
        }
    </CardListWrapper>
 )
            

export default CardList;

const CardListWrapper = styled.div`
      width: 85vw;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 20px;
`;