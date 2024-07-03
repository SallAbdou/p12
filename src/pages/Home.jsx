import { useEffect } from "react";
import { useParams } from "react-router-dom"

function Home() {

  const { id } = useParams()

  useEffect(() => {
    fetch(`${URL_API}/user/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
    // eslint-disable-next-line no-undef
  }, [])

  return (
    <div>
      <p>Ceci est un texte de bienvenue.</p>
    </div>
  );
}

export default Home;
