import axios from "axios";
import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { Avatar } from "react-native-paper";

type Character = {
  id: number;
  name: string;
  image: string;
};

function FilmsScreen() {
  const [data, setData] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      setData((prevData) => [...prevData, ...response.data.results]);
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
      <View
        style={{
          width: "50%",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: 20,
        }}
      >
        <Avatar.Image size={70} source={{ uri: item.image }} />
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        paddingTop: 50,
      }}
    >
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
    </View>
  );
}

export default FilmsScreen;
