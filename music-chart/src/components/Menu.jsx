import {Link} from 'react-router-dom';

const Menu = () => {

  return (
    <>
      <div>
        <div className="content-wrapper container">
          <Link to="/topTrack" className="link-btn">
            <button className="btn">
              Top Tracks
            </button>
          </Link>
          <Link to="/topArtist">
            <button className="btn">
            Top Artists
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Menu;
