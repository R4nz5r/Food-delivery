import React from 'react'
import burgerImage from '../assets/delicious-burger-with-many-ingredients.jpg';

export default function Card() {
    return (
        <div>
            <div className="card mt-3" style={{ width: "18rem" }}>
                <img src={burgerImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a burger.</p>
                    <div className="container w-100">
                        <select className="m-2 h-100 bg-success">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className="m-2 h-100 bg-success">
                            <option value="half">half</option>
                            <option value="full">full</option>
                        </select>
                        <div className='d-inline h-100 fs-5'>Total price</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
