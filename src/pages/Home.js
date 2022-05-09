import { Container, PokemonsList, Pokemon, InputPokemon, Button, Row } from "../components"
// import {APIKey} from '../../config/key'
import ErrorBoundary from "../ErrorBoundary"
import {useState} from 'react'
import {searchPokemon } from '../api';


export const Home = () => {

    const [search, setSearch] = useState()
    const [pokemon, setPokemon] = useState()
    const onChangeHandler = (e) =>{
        setSearch(e.target.value.toLowerCase())
       
    }


    const onButtonHandler = () =>{
        onSearchHandler(search)
        
    }

    const onSearchHandler = async (pokemon) =>{
        const result = await searchPokemon(pokemon)
        setPokemon(result)
        console.log(result)
    }

    return(
        <Container>
            <ErrorBoundary>
            <h1>Lista de Pokemons</h1>
            
        <Row>
        <InputPokemon placeholder="Pesquise o seu pokemon"  onChange={onChangeHandler}/>
        <Button  onClick={onButtonHandler}>Pesquisar</Button>
        </Row>
        <PokemonsList>
                {pokemon ? (
                    <Pokemon >
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                        <h4>Nome: nome </h4>
                        <p>nome</p>
                        <span>{pokemon.name}</span> 
                        <h4>Tipos: </h4>
                        {pokemon.types.map((type, index) => {
                            return(
                                <h3 key={index}>{type.type.name}</h3>
                            )
                        })}
                    </Pokemon>
                ): null}

        </PokemonsList>
            </ErrorBoundary>
        
        </Container>  
    )
};