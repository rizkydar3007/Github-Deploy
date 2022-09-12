import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const BodyNews = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <nav className="navbar bg-danger">
            <div className="container-fluid">
              <span className="navbar-brand text-white mb-0 h1">Tech News App</span>
            </div>
          </nav>
          <div className="row">
            <div className="col-md-8">
              <div className="input-group mt-3">
                <input type="text" className="form-control input-keyword" placeholder="Search News ..." />
                <button className="btn btn-primary search-button" type="button" id="button-addon2">
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="row news-container mt-3"></div>
        </div>
      </div>
    </div>
  );
};

export default BodyNews;
