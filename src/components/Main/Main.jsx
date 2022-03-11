import React from "react"
import "./Main.css"
import nftImage from "../images/mainNftImage.svg"

const Main = () => {
  return (
    <section className="text-light text-center text-sm-start main p-2">
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between text-left">
          <div>
            <h1 className="mb-2">Nfty</h1>
            <p className="lead mb-2">limited edition nfts created by ai</p>
            <a href="#showcase">
              <button className="btn btn-primary btn-lg  mb-4">
                Watch Spring Collection
              </button>
            </a>
          </div>
          <img className="img-fluid" src={nftImage} alt="nft-illustration" />
        </div>
      </div>
    </section>
  )
}

export default Main
