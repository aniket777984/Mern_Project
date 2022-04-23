import React , {useState} from "react";
import "./Recommended.css";
import { recommended } from "../../data";
import Pagination from "react-js-pagination";
import {Link} from "react-router-dom";

const Recommended = () => {
 
    const [currentPage, setCurrentPage] = useState(1);
    const setCurrentPageNo = (e) => {
        setCurrentPage(e)
      };
    const resultPerPage = 4;
    const productsCount = 6;


  return (
    <div class="container">
      <h1 className="title">Recommended Stay</h1>
      <div class="list-container">
        <div class="left-col">
          <p>200+options</p>
          <h1>Recommended Places In San Francisco</h1>
          {recommended &&
            recommended.map((place,index) => {
              return (
                <div class="house" key={index} >
                  <div class="house-img">
                    <Link to ={`/recommendedplaces/${place._id}`} ><img src={place.images[0].url} alt="aniket" /></Link>
                  </div>
                  <div class="house-info">
                    <p>{place.name}</p>
                    <h3>{place.subtitle}</h3>
                    <p>{place.description}</p>
                    <div class="house-price">
                      <p>{place.guest}</p>
                      <h4>
                        ${place.price}
                        <span>/day</span>
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <div class="right-col">
          <div class="sidebar">
            <h2>Select Filter</h2>
            <h3>Property Type</h3>
            <div class="filter">
              <input type="checkbox" />
              <p>House</p> <span>(0)</span>
            </div>
            <div class="filter">
              <input type="checkbox" />
              <p>Hostel</p> <span>(0)</span>
            </div>
            <div class="filter">
              <input type="checkbox" />
              <p>Flat</p> <span>(0)</span>
            </div>
            <div class="filter">
              <input type="checkbox" />
              <p>Villa</p> <span>(0)</span>
            </div>
            <div class="filter">
              <input type="checkbox" />
              <p>Guest Suite</p> <span>(0)</span>
            </div>

            <h3>Amenities</h3>
            <div class="filter">
              <input type="checkbox" />
              <p>Air Conditioning</p> <span>(0)</span>
            </div>
            <div class="filter">
              <input type="checkbox" />
              <p>Wifi</p> <span>(0)</span>
            </div>
            <div class="filter">
              <input type="checkbox" />
              <p>Gym</p> <span>(0)</span>
            </div>
            <div class="filter">
              <input type="checkbox" />
              <p>Pool</p> <span>(0)</span>
            </div>
            <div class="filter">
              <input type="checkbox" />
              <p>Kitchen</p> <span>(0)</span>
            </div>
            <div class="sidebar-link">
              <a href="https://www.youtube.com" target="blank" >View More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="paginationBox">
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={resultPerPage}
          totalItemsCount={productsCount}
          onChange={setCurrentPageNo}
          nextPageText="Next"
          prevPageText="Prev"
          firstPageText="1st"
          lastPageText="Last"
          itemClass="page-item"
          linkClass="page-link"
          activeClass="pageItemActive"
          activeLinkClass="pageLinkActive"
        />
      </div>
    </div>
  );
};

export default Recommended;
