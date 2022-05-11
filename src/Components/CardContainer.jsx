import React  from 'react'

import Cards from './Cards'


 function CardContainer() {


  // const refContainer = useRef();
  // const [dimensions, setDimensions] = 
  //   useState(0);
  // useEffect(() => {
  //   if (refContainer.current) {
  //     setDimensions({
  //       width: refContainer.current.offsetWidth
  //     });
  //   }
  //  // console.log(dimensions.width);
  // }, [dimensions.width]);
  // const width=dimensions.width;
  // const row = Math.floor(width / (180 + 40));
  
  // const arr=[]
  // for(var i=row;i<10;i+=row){
  //   arr[i]=i;
  // }
  

  return (
    
    <div className='cardContainer'   
    // ref={refContainer} 
    >
     <Cards   />
      
    </div>
  )
}

export default CardContainer