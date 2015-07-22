    var new_random, old_random;

     function random_num() {
       return Math.floor((Math.random() * quotes.length));
     }

     $(document).ready(function() {
       $(".quote-button").click(function() {
           new_random = random_num();
           while (new_random == old_random) {
             new_random = random_num();
           }

           $('#quote-box p').html(quotes[new_random].q);
            old_random = new_random; 
         

       });
     });

     var quotes = [{
       q: 'The Great Man … is colder, harder, less hesitating, and without respect and  without the fear of “opinion”; he lacks the virtues that accompany respect and “respectability”, and altogether everything that is the “virtue of the herd”. If he cannot lead, he goes alone. … He knows he is incommunicable: he finds it tasteless to be familiar. … When not speaking to himself, he wears a mask. There is a solitude within him that is inaccessible to praise or blame. <br> <br> <i>Friedrich Nietzche</i>'
     }, {
       q: 'Power is given only to those who dare to lower themselves and pick it up. Only one thing matters, one thing; to be able to dare!  <br> <br> <i>Fyodor Dostoevsky</i>'
     }, {
       q: 'The more sand has escaped from the hourglass of our life, the clearer we should see through it.  <br> <br> <i>Niccolo Machiavelli</i>'
     }, {
       q: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.  <br> <br> <i>Benjamin Franklin</i>'
     }, {
       q: 'Nothing can stop the man with the right mental attitude from achieving his goal; nothing on earth can help the man with the wrong mental attitude.  <br> <br> <i>Thomas Jefferson</i>'
     }];