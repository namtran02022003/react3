
import './App.css';

function React3() {
  return (
    <div>
        <div className="header">
          <span className="span-header">
            <i className="fa fa-bars" />
          </span>
          <div className="div-apter" />
          <div className="text-header">
            <h1>PHOTOLIO</h1>
            <h3>A template made by w3.css for photographers.</h3>
            <p>
              <button className="button-header">
                toggle grid padding
              </button>
            </p>
          </div>
        </div>
        <div className="image-content">
          <div className="image">
            <img src="https://www.w3schools.com/w3images/rocks.jpg" width="100%" />
            <img src="https://www.w3schools.com/w3images/sound.jpg" width="100%" />
            <img src="https://www.w3schools.com/w3images/woods.jpg" width="100%" />
            <img src="https://www.w3schools.com/w3images/rock.jpg" width="100%" />
            <img src="https://www.w3schools.com/w3images/nature.jpg" width="100%" />
            <img src="https://www.w3schools.com/w3images/mist.jpg" width="100%" />
          </div>
          <div className="image">
            <img src="https://www.w3schools.com/w3images/coffee.jpg" width="100%" />
            <img src="https://www.w3schools.com/w3images/bridge.jpg" width="100%" />
            <img src="https://www.w3schools.com/w3images/notebook.jpg" width="100%" />
            <img src="https://www.w3schools.com/w3images/london.jpg" width="100%" />
            <img src="https://www.w3schools.com/w3images/rocks.jpg" width="100%" />
            <img src="https://www.w3schools.com/w3images/avatar_g.jpg" width="100%" />
          </div>
          <div className="image">
            <img src="https://www.w3schools.com/w3images/mist.jpg" width="100%" />
            <img src="https://www.w3schools.com/w3images/workbench.jpg" width="100%" />
            <img src="https://www.w3schools.com/w3images/gondol.jpg" width="100%" />
            <img src="https://www.w3schools.com/w3images/skies.jpg" width="100%" />
            <img src="https://www.w3schools.com/w3images/lights.jpg" width="100%" />
            <img src="https://www.w3schools.com/w3images/workshop.jpg" width="100%" />
          </div>
        </div>
        <div className="footer text-header">
          <p className="list-icon">
            <a className="a-header" href="#"> <i className="fa fa-facebook-official" /></a>
            <a className="a-header" href="#"> <i className="fa fa-instagram" /></a>
            <a className="a-header" href="#"> <i className="fa fa-snapchat" /></a>
            <a className="a-header" href="#"> <i className="fa fa-flickr" /></a>
            <a className="a-header" href="#"> <i className="fa fa-twitter" /></a>
            <a className="a-header" href="#"> <i className="fa fa-linkedin" /></a>
          </p>
          <p>tran huy tu nam</p>
        </div>
      </div>

  );
}

export default React3;
