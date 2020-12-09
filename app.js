var pronoun = ['the','our'];
  var adj = ['great', 'big' ];
  var noun = ['jogger','racoon'];
  var dom = [ ".com" , ".es"]

  for ( let k in pronoun){
      for(let Y in adj){
          for( let x in noun){
              for(let z in dom){
                  console.log(pronoun[k] + adj[Y] + noun[x] + dom[z])
              }
          }
      }
  }