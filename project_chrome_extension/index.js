const requestOptions = {
      method: 'GET',
      headers: {
            'X-RapidAPI-Key': 'fe3ece06d9msh8f0186397832553p11b533jsna986d7080e38',
            'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
      }
};
document.getElementById("btn").addEventListener("click",function(){
      
      let c1=document.getElementById("currency1").value;
      let c2=document.getElementById("currency2").value
      let c3=document.getElementById("amount").value
      if(c1==c2){
            document.getElementById("amt2").value=String(c3)
            return
      }
      if(c3===''){
            document.getElementById("amt2").value="Enter value above"
            return 
      }
      
      fetch(`https://currency-exchange.p.rapidapi.com/exchange?from=${c1}&to=${c2}&q=1`, requestOptions)
      .then( function(response){
            return response.json()
      })
      .then(function(data) {
            let out=data*c3; // Process the response data
            document.getElementById("amt2").value=out
      })
      .catch(function(err){
            document.getElementById("amt2").value="Something went wrong"
      });
      
      // console.log(c1+c2+c3)
})