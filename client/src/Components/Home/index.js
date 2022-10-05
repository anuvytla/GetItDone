import React from 'react'
import Pic1 from "../../Assets/Pic1.png"
import Pic2 from "../../Assets/Pic2.png"

const Home = () => {
  return (
    <div>
      <h1 className='text-center'>Get It Done with us!</h1>
      <div className="card mb-3 flex-row card-no-border"  >
        <div className="row g-0">
          <div className="col-md-8">
            <img src={Pic1} className="rounded-start" style={{maxWidth: '100%'}} alt="Pic1" />
          </div>
          <div className="col-md-4 display-flex align-center">
            <div className="card-body  ">
              <h5 className="card-title ">Know where work stands in real time</h5>
              <p className="card-text">Order you tasks in a manner consistent with your progress to find out the status of each task and to plan out accordingly</p>              
            </div>
          </div>
        </div>
      </div>  

      <br /> 
      <br />

      <div className="card mb-3 flex-row card-no-border">
        <div className="row g-0">          
          <div className="col-md-4 display-flex align-center">
            <div className="card-body">
              <h5 className="card-title">Easily spot bottlenecks and backlogs</h5>
              <p className="card-text">Visual overview of your projects that gives you the information you need to work on and identitifies which tasks need more attention </p>
              
            </div>
          </div>
          <div className="col-md-8 display-flex align-center">
            <img src={Pic2} className="rounded-start" style={{maxWidth: '110%'}} alt="Pic2" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
