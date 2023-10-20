const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			starships: [],
			favorites: [],
			characterBio: []
		},
		actions: {
			fetchCharacterData: async () => {
				try {
					const response = await fetch("https://swapi.dev/api/people/");
					if (!response.ok) {
						throw new Error("Failed to fetch character data");
					}
					const data = await response.json();

					setStore({ characters: data.results });
				} catch (error) {
					console.error("Error fetching character data:", error);
				}
			},
			fetchPlanetsData: async () => {
				try {
					const response = await fetch("https://swapi.dev/api/planets");
					if (!response.ok) {
						throw Error("Failed to fetch planets data");
					}
					const data = await response.json();

					setStore({ planets: data.results });
				} catch (error) {
					console.error("Error fetching planets data:", error);
				}
			},
			fetchStarShipsData: async () => {
				try {
					const response = await fetch("https://swapi.dev/api/starships");
					if (!response.ok) {
						throw new Error("Failed to fetch starships data");
					}
					const data = await response.json();

					setStore({ starships: data.results });
				} catch (error) {
					console.error("Error fetching starships data:", error);
				}
			},
		
			


			addToFavorites: (item) => {
				const favorites = getStore().favorites;
				favorites.push(item);
				setStore({ favorites: favorites });
			},
			removeFavorites: (index) => {
				let store = getStore();
				let newFavorites = store.favorites.filter((item, idx) => idx !== index);
				setStore({ favorites: newFavorites });
			},
		}
	}
};

	// // const request =await fetch (https://www.swapi/api/people/');
	// const response = await  request .jsn[];
	// const character=response.results.map(character => {
	// 	const charReq=await fetch(character.url);
	// // 	const charReq =await charReq.json()
	// 	const characters=response.results;
	// 	characters.forEach(async(character,idx))
	// 	const charreq

	// })

	export default getState;
