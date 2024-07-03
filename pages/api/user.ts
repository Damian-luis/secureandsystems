import { UserInfo } from "@/interfaces/userInterface";

export const userDataService = async (): Promise<UserInfo> => {
  try {
    const response = {
        name:"Damián",
        lastname:"Duran",
        description:"Hola! Mi nombre es Damián Duran, soy desarrollador de software con mas de 2 años de experiencia, me encuentro viviendo en argentina y amo el futbol. Mi club favorito es River Plate. Si te gustaría contactarte conmigo puedes hacerlo en el botón de abajo, mientras tanto saludos! ;)",
        interests:["descansar","dormir"]
    }
    if (!response) {
      throw new Error('Network response was not ok');
    }
    return response;
  } catch (error) {
    throw new Error('Failed to fetch home data: ');
  }
};
