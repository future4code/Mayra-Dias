import axios from "axios"
import { baseURL } from "./baseURL"
 
//a) sim. 

const news = {
  title: "Nova notícia",
  content: "conteúdo",
  date: Date.now()
}
type user = {
	id: string;
	name: string;
	email: string;
}

const createNews = (news: any) => {
  return axios.put(`${baseURL}/news`, news)
  async function createNews(
    title: string,
    content: string,
    date: number
  ): Promise<void> {
    await axios.put(`${baseURL}/news`, {
      title: title,
      content: content, 
      date: date
    });
  }
}


const getAllSubscribers = async (): Promise<user[]> => {
  const response = await axios.get(`${baseURL}/subscribers`);
  return response.data.map((res: any) => {
  
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    };
  });
};

const getSubscribersIds = (subscribers: any) => {
  return axios.get(`${baseURL}/subscribers`)
  .then(res => res.data)
}

const notifyAllSubscribers = (ids: string[]) => {
  const sendNotifications = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
    try {
      for (const user of users) {
        await axios.post(`${baseURL}/notifications`, {
          subscriberId: user.id,
          message
        });
      }
  
      console.log("All notifications sent");
    } catch {
      console.log("Error");
    }
  };
}

 createNews(news)                // criar noticia
   .then(getAllSubscribers)      // buscar assinantes
   .then(getSubscribersIds)      // extrair id's (etapa síncrona)
  .then(notifyAllSubscribers)   // enviar notificacoes