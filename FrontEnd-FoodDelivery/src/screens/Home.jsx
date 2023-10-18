import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

const host = "http://localhost:5000"


export default function Home() {
  
  const [search, setSearch] = useState("")
  const [foodCat, setFoodCat] = useState([])
  const [foodItem, setFoodItem] = useState([])

  const loadData = async () => {
    let response = await fetch(`${host}/api/foodData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    response = await response.json();
    // console.log(response[0],response[1]);
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  }
  useEffect(() => {
    loadData();
  }, [])

  return (
    <div>

      {/* navbar */}
      <div><Navbar /></div>

      {/* carousel */}
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner" id="carousel">
            <div className='carousel-caption' style={{ zIndex: "10" }} >
             
              <div className="justify-content-center d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
              </div>
            
            </div>
            <div className="carousel-item active">
              <img src="https://source.unsplash.com/random/900×400/?biryani" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="https://source.unsplash.com/random/900×700/?burger" />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900×400/?pizza" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="https://source.unsplash.com/random/900×700/?burger" />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900×400/?burger" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="https://source.unsplash.com/random/900×700/?burger" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* card */}
      <div className='container'>
        {foodCat.length > 0 ? (
          foodCat.map((data) => {
            return <div className='row mb-3'>
              <div className='fs-3 m-3' key={data._id}>
                {data.CategoryName}
              </div>
              <hr />
              {foodItem.length > 0
                ? foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())) ) 
                  .map(filterItems => {
                    return (
                      <div className='col-12 col-md-6 col-lg-3' key={filterItems._id}>
                        <Card foodItem={filterItems}
                          options={filterItems.options[0]}
                          />
                      </div>
                    )
                  })
                : <div>NO Such Data</div>}
            </div>
          })
        ) : (
          ""
        )}
      </div>

      {/* footer */}
      <div><Footer /></div>
    </div>
  )
}
