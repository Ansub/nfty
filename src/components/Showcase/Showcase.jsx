import React from "react"
import "./Showcase.css"
import first from "../images/nfts/1.png"
import second from "../images/nfts/2.png"
import third from "../images/nfts/3.png"
import four from "../images/nfts/4.png"
import five from "../images/nfts/5.png"
import six from "../images/nfts/6.png"

const Showcase = () => {
  return (
    <section className="p-5 text-black text-center showcase" id="showcase">
      <h1 className="heading pb-3">Spring Collection</h1>
      <div className="row">
        <div className="col mb-5">
          <div className="card">
            <div className="card-body">
              <img src={first} alt="" className="img-fluid p-3" />
              <h5 className="pb-3">
                money collected from this NFT goes into Ukraine Aid
              </h5>
              <p>
                <span className="fw-bold">Price:</span> ETH 4.00 ($11,211.10)
              </p>
              <button className="btn btn-primary btn-lg mb-4">Start Bid</button>
            </div>
          </div>
        </div>
        <div className="col mb-5">
          <div className="card">
            <div className="card-body">
              <img src={second} alt="" className="img-fluid p-3" />
              <p className="pt-5">
                <span className="fw-bold">Price:</span> ETH 4.00 ($11,211.10)
              </p>
              <button className="btn btn-primary btn-lg m-4">Start Bid</button>
            </div>
          </div>
        </div>
        <div className="col mb-5">
          <div className="card">
            <div className="card-body">
              <img src={third} alt="" className="img-fluid p-3" />
              <p className="pt-5">
                <span className="fw-bold">Price:</span> ETH 4.00 ($11,211.10)
              </p>
              <button className="btn btn-primary btn-lg m-4">Start Bid</button>
            </div>
          </div>
        </div>
        <div className="col mb-5">
          <div className="card">
            <div className="card-body">
              <img src={four} alt="" className="img-fluid p-3" />
              <p className="pt-5">
                <span className="fw-bold">Price:</span> ETH 4.00 ($11,211.10)
              </p>
              <button className="btn btn-primary btn-lg m-4">Start Bid</button>
            </div>
          </div>
        </div>
        <div className="col mb-5">
          <div className="card">
            <div className="card-body">
              <img src={five} alt="" className="img-fluid p-3" />
              <p className="pt-5">
                <span className="fw-bold">Price:</span> ETH 4.00 ($11,211.10)
              </p>
              <button className="btn btn-primary btn-lg m-4">Start Bid</button>
            </div>
          </div>
        </div>
        <div className="col mb-5">
          <div className="card">
            <div className="card-body">
              <img src={six} alt="" className="img-fluid p-3" />
              <p className="pt-5">
                <span className="fw-bold">Price:</span> ETH 4.00 ($11,211.10)
              </p>
              <button className="btn btn-primary btn-lg m-4">Start Bid</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase
