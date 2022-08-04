import axios from "axios";
import { useEffect, useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import Header from "../components/Header/Header";
import Menu from "../components/Menu";
import SearchBarPopUp from "../components/SearchBarPopUp/SearchBarPopUp";

const TrackPage = () => {
  const [track, setTrack] = useState();
  const [dataSearch, setDataSearch] = useState("");
  const [search, setSearch] = useState("");

  const getTopTrack = async () => {
    try {
      const { data } = await axios.get(
        "https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=266801434dd4526d82f68150d436c348&format=json"
      );
      const dataTrack = data?.tracks.track;
      setTrack(dataTrack);
    } catch (error) {
      console.log(error);
    }
  };

  const getSearchTrack = async () => {
    try {
      const { data } = await axios.get(
        "https://ws.audioscrobbler.com/2.0/?method=track.search&track=Believe&api_key=3b04244ff906e61e135565e8e0478470&format=json"
      );
      const searchData = data?.results.trackmatches.track;
      console.log(searchData);
      setDataSearch(searchData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSearchTrack();
    getTopTrack();
  }, []);

  return (
    <>
      <Header />
      <Menu />
      <Form className="form">
        <div className="form-wrapper">
          <FormControl
            type="input"
            placeholder="Cari Track di sini ..."
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
              text1="Artist : "
            />
          )}
        </div>
      </Form>
      <div className="container chart-content d-flex flex-column align-items-center">
        {track?.map((data, id) => (
          <div
            key={id}
            className="card d-flex flex-column align-items-center justify-content-center"
          >
            <h3>{data?.name}</h3>
            <h6>{data?.artist.name}</h6>
            <p>Total Pendengar : {data?.listeners}</p>
            <p>Total Diputar : {data?.playcount}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default TrackPage;
