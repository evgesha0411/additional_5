module.exports = function check(str, bracketsConfig) {
  // your solution
 var arr=[];
  var str1 = [];
  var flag = true;
  var result = [];
  str1 = str.split('');
  if(str.length%2===1){
	  return false;
  }
  for(var i = 0;i < str1.length; i++){
	   for(var j = 0;j < bracketsConfig.length;j++){	
	   
	    if(str1[i] == bracketsConfig[j][0]){
			  arr.push(str1[i]);
			  break;
		  } else if(str1[i] == bracketsConfig[j][1]){
			if(arr.length>0){
			if(arr[arr.length-1] == bracketsConfig[j][0]){
			  result[result.length] = arr.pop();
			  result[result.length] = str1[i];
			  break;} else{
				for(var z = arr.length;z > 0;z--){
					if(arr[z] == bracketsConfig[j][0]){
						if(arr.slice(z+1).length % 2 !== 0){
							return false;
						} else{
						  arr = arr.slice(0,z);
						}
						
					}
				}
			  }
			  } 
		  }
	  }
   
  }
  
   if(arr.length > 0){
   for(var l = 0; l < arr.length;l+=2){
		if(arr[l] !== arr[l+1]){
		return false;
		}
	} 
  }


  var pairs = [];
  var arrOfTrue = [];
	for(var k = 0; k < result.length;k+=2){
		pairs[pairs.length] = result[k] + result[k+1]; 
	}
	for(var x = 0;x < pairs.length;x++){
		for(var y = 0;y < bracketsConfig.length;y++){
			if(pairs[x] === bracketsConfig[y].join('')){
				arrOfTrue[arrOfTrue.length] = 1;
			}
		}
	}
	
  if(arrOfTrue.length == pairs.length){
	  return true;
  } else {
	  return false;
  }
}
