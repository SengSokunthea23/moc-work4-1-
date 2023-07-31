import React from "react";
function HomeStrap() {
    return (
        <div className="container" style={{height:"650px", marginBottom:"7rem"}}>
            <h2 className="text-center mt-5">Explore by Market</h2>
            <div style={{paddingTop:"2rem"}} className="text-center">
                <div className="d-flex flex-row">
                    <div className="container" style={{ width: "30%" }}>
                        <img className="card-img-top" src="./india.jpg" alt="Card image" style={{ width: "100%"}} />
                        <div className="card-body pb-sm-2 text-color">
                            <h4 className="card-title">India</h4>
                        </div>
                    </div>
                    <div className="container" style={{ width: "30%" }}>
                        <img className="card-img-top" src="./download.jpg" alt="Card image" style={{ width: "100%" }} />
                        <div className="card-body pb-sm-2 text-color">
                            <h4 className="card-title">United Kingdom</h4>
                        </div>
                    </div>
                    <div className="container" style={{ width: "30%" }}>
                        <img className="card-img-top" src="./keyword.jpg" alt="Card image" style={{ width: "100%" }} />
                        <div className="card-body pb-sm-2 text-color">
                            <h4 className="card-title">Indonesia</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{paddingTop:"4rem", marginBottom:"1rem"}} className="text-center">
            <div className="d-flex flex-row">
                    <div className="container" style={{ width: "30%" }}>
                        <a><img className="card-img-top" src="./Isoiledmyself.jpg" alt="Card image" style={{ width: "100%" }} />
                        <div className="card-body pb-sm-2 text-color">
                            <h4 className="card-title">Japan</h4>
                        </div>
                        </a>
                    </div>
                    <div className="container" style={{ width: "30%" }}>
                        <img className="card-img-top" src="./myparentsdigme.jpg" alt="Card image" style={{ width: "100%"}} />
                        <div className="card-body pb-sm-2 text-color">
                            <h4 className="card-title">United States</h4>
                        </div>
                    </div>
                    <div className="container" style={{ width: "30%" }}>
                        <img className="card-img-top" src="./usa.jpg" alt="Card image" style={{ width: "100%" }} />
                        <div className="card-body pb-sm-2 text-color">
                            <h4 className="card-title">John Doe</h4>
                        </div>
                    </div>
                </div>
                <button style={{marginTop:"3rem", borderRadius:"5px"}} className="styleofbutton">Show more markets</button>
            </div>
        </div>
    )
}
export default HomeStrap;