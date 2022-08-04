import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Menu from "../components/Menu";
import SearchBarPopUp from "../components/SearchBarPopUp/SearchBarPopUp";
import { Form, FormControl } from "react-bootstrap";

const ArtistPage = () => {
  const [artist, setArtist] = useState();
  const [dataSearch, setDataSearch] = useState("");
  const [search, setSearch] = useState("");
  const getTopArtist = async () => {
    try {
      const { data } = await axios.get(
        "https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=3b04244ff906e61e135565e8e0478470&format=json"
      );
      const dataArtist = data?.artists.artist;
      setArtist(dataArtist);
    } catch (error) {
      console.log(error);
    }
  };
  const getSearchArtist = async () => {
    try {
      const { data } = await axios.get(
        "https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=3b04244ff906e61e135565e8e0478470&format=json"
      );
      const searchData = data?.results.artistmatches.artist;
      console.log(searchData);
      setDataSearch(searchData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearchArtist();
    getTopArtist();
  }, []);

  return (
    <>
      <Header />
      <Menu />
      <Form className="form">
        <div className="form-wrapper">
          <FormControl
            type="input"
            placeholder="Cari Artist di sini ..."
            className="me-2 nav-input"
            aria-label="Search"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          {search === "" ? null : (
            <SearchBarPopUp
              data={dataSearch}
              search={search}
            />
          )}
        </div>
      </Form>
      <div className="container chart-content d-flex flex-column align-items-center">
        {artist?.map((data, id) => (
          <div
            key={id}
            className="card d-flex flex-column align-items-center justify-content-center"
          >
            <h6>{data?.name}</h6>
            <p>Total Pendengar : {data?.listeners}</p>
            <p>Total Diputar : {data?.playcount}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default ArtistPage;
