import React from 'react'





function SmallBox(props) {
    const red = {
        fontWeight: "600", backgroundColor: "#f17d7d", fontStyle: "normal", fontSize: "20px", color: "white", display: "flex", WebkitBoxPack: "center", MsFlexPack: "center", justifyContent: "center", WebkitBoxAlign: "center", MsFlexAlign: "center", alignItems: "center", textAlign: "center", marginTop: "20px", marginBottom: "10px"
      };
    let yellow = {
      padding: "8px 12px", fontWeight: "200", backgroundColor: "rgba(255, 230, 0, 0.97)", fontStyle: "normal", fontSize: "10px"
    };
    const blue = {
      fontWeight: "400", marginTop: "10px", marginBottom: "20px", fontStyle: "normal", fontSize: "10px", lineHeight: "12px", display: "flex", WebkitBoxPack: "center", MsFlexPack: "center", justifyContent: "center", WebkitBoxAlign: "center", MsFlexAlign: "center", alignItems: "center", textAlign: "center", backgroundColor: "#46eec6"
    };
    let innerText = props.innerText;
    const ellipsizedCss = {
      overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis"
    }
    const centerCss = {
      display: "flex", WebkitBoxAlign: "center", MsFlexAlign: "center", alignItems: "center"
    };
    
     if(props.box10yellow==='center'){
         yellow = { ...yellow, ...centerCss}
     }

    if(props.ellipsize==='yes') {
        yellow.padding = "14px 12px"
        yellow = { ...yellow, ...ellipsizedCss }
    }
    
    
  return (
    <>
    <div className = 'parts' style={props.innerbox === 'red' ? red : props.innerbox === 'yellow' ? yellow : blue } >
     {innerText} 
    </div>
    
    
    
    </>
  )
}

export default SmallBox