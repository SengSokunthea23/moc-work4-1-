import React from "react";
function SearchForm(){
    return(
        <div className="container" style={{height:"170px", alignItems:"center"}}>
            <div style={{height:"246px", marginTop:"3rem"}}>
                <button style={{border:"1px solid black", textAlign:"center", width:"6%", height:"18%", margin:"0px 5px 0px 0px"}}>
                    Search</button>
                <button style={{border:"1px solid black", textAlign:"center", width:"12%", height:"18%", margin:"0px 5px 0px 0px"}}>Browse categories</button>
                <button style={{border:"1px solid black", textAlign:"center", width:"8%", height:"18%"}}>Download</button>
            </div>
        </div>
    )
}
export default SearchForm;