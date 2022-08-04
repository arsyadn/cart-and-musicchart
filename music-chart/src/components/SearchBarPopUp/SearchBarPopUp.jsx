import "./SearchBarPopUp.css";
const SearchBarPopUp = ({ data, search, text1}) => {
    const allPopUpData = data
    //eslint-disable-next-line
    ?.filter((item) => {
      if (search === "") {
        return item;
      } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
        return item;
      }
    })
    ?.map((data, id) => (
      <div key={id} className="each-item-search">
        <h5>{data?.name}</h5>
        <h6>{text1}{data?.artist}</h6>
        <p>Jumlah Pendengar : {data?.listeners}</p>
      </div>
    ));
  return (
    <>
      <div className="search-popup-wrapper">{allPopUpData}</div>
    </>
  );
};
export default SearchBarPopUp;
