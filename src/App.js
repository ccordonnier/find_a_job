import Routes from "./routes";
import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        headers: {

          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
          grant_type: "client_credentials",
          client_id: "PAR_findajob_d42bc98525940c7c58d8eef981d769f0985cd74c6eb59f88db3c4dddfb475932",
          client_secret: "e4dd93de182a6938b4ee1e669e1c54866a6568365844824333aecba105de1b4d",
          scope: "application_PAR_findajob_d42bc98525940c7c58d8eef981d769f0985cd74c6eb59f88db3c4dddfb475932%20api_offresdemploiv2"
        },
        method: "post",
        url: `https://entreprise.pole-emploi.fr/connexion/oauth2/access_token`,
      })
        .then((res) => {
          setToken(res.data)
        })
        .catch((err) => {
          console.log("No token")
        })
    }
    fetchToken();
  }, [token]);


  return (
    <Routes />
  );
}

export default App;
