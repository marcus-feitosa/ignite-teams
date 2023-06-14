import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from "@components/Input";
import { PlayerCard } from '@components/PlayerCard';
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { EmptyList} from '@components/EmptyList';
import { Button } from '@components/Button';

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

import { useState } from 'react';
import { FlatList } from 'react-native'


export function Players(){
    const [team, setTeam] = useState('Time A')
    const [players, setPlayers] = useState([])

    return(
        <Container>
            <Header showBackButton/>   
            <Highlight title='Nome da turma' subtitle='Adicione a galera e separe os times'/>
            <Form>
                <Input 
                placeholder="Nome da pessoa"
                autoCorrect={false}
                />

                <ButtonIcon 
                icon="add" 
                />
            </Form>

            <HeaderList>
                <FlatList 
                data={['Time A', 'Time B']}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Filter 
                    title={item}
                    isActive={item === team}
                    onPress={() => setTeam(item)}
                    />
                )}
                horizontal
                />

                <NumberOfPlayers>
                {players.length}
                </NumberOfPlayers>
            </HeaderList>


            <FlatList 
                data={players}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                <PlayerCard 
                    name={item} 
                    onRemove={() => {}}
                />
                )}
            

                ListEmptyComponent={() => (
                    <EmptyList message="Não há pessoas nesse time" />
                  )}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
                />
          
                <Button 
                  title="Remover Turma"
                  type="SECONDARY"
                />
            </Container>
            )
        }