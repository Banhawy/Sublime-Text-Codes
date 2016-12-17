function factorialize(num) {
  var factorials = [num];
  var mappingFactorials;
  var secondMappingFactorials;

  for (i=0; i<num; i++){
  	mappingFactorials =factorials.map(function(val){
  	return val-1;
  });
  	secondMappingFactorials = mappingFactorials.map(function(val){
  	return val-1;
  });
  };
  console.log(secondMappingFactorials);
  return num;
}

factorialize(5);