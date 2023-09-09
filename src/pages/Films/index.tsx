import { useEffect, useState } from "react";
import { Text, FlatList } from "react-native";
import { Avatar } from "react-native-paper";
import { getFilms } from "@/services/filmService";
import { ContainerItemStyled, ContainerStyled } from './styles'
import { Character } from './types'


function FilmsScreen() {
  const [data, setData] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCharacters();
  }, [page]);

  const fetchCharacters = async () => {
    setLoading(true);
    try {
      const response = await getFilms(page)
      setData((prevData) => [...prevData, ...response]);
    } catch (error) {
      console.error("Erro ao buscar personagens:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (!loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const RenderItem = (item: Character) => {
    return (
      <ContainerItemStyled>
        <Avatar.Image size={70} source={{ uri: item.image }} />
        <Text>{item.name}</Text>
      </ContainerItemStyled>
    );
  };

  return (
    <ContainerStyled>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Rick and Morty API Rest
      </Text>

      <FlatList
        style={{ paddingTop: 50, height: "100%" }}
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => RenderItem(item)}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
      />
      {loading && <Text>Carregando...</Text>}
    </ContainerStyled>
  );
}

export default FilmsScreen;
