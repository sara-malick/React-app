
function Song() { 
 
    const bird1 = new Audio( 
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/%22Fanfare_and_Anchors_Aweigh%22%2C_performed_by_the_U.S._Naval_Academy_Band_in_1969.mp3" 
    ); 
   
    const bird2 = new Audio( 
      "https://upload.wikimedia.org/wikipedia/commons/b/b8/%22Ethiopia_Rag%22_%281909%29%2C_by_Joseph_F._Lamb.mp3" 
    ); 
   
    function toggle1() { 
      if (bird1.paused) { 
        bird1.play(); 
      } else { 
        bird1.pause(); 
      } 
    }; 
   
    function toggle2() { 
      if (bird2.paused) { 
        bird2.play(); 
      } else { 
        bird2.pause(); 
      } 
    }; 
   
    return ( 
      <div> 
        <button onClick={toggle1}>Song 1</button> 
        <button onClick={toggle2}>Song 2</button> 
      </div> 
    ); 
  } 
   
  export default Song;