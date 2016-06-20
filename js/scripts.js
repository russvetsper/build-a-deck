var deck = [];
var suits = ['Spades','Hearts','Clubs','Diamonds'];
var rank = [2,3,4,5,6,7,8,9,10,'Jack','Queen','King','Ace'];

$(function(){

  deck = suits.forEach(function(suit){
    rank.forEach(function(rank){
      $('body').append('<h6>' + rank + ' of ' + suit + '</h6>');
    });
  })

})
