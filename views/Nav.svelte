<nav>
   <form action="/about" method="post">
      <div class="input-group">
         <input type="text" class="form-control" name="loginInput" placeholder="login" aria-label="Recipient's username" aria-describedby="basic-addon2">
         <input type="text" class="form-control" name="passwordInput" placeholder="password" aria-label="Recipient's username" aria-describedby="basic-addon2">
         <div class="input-group-append">
              <button class="btn btn-outline-secondary" id="searchBTN" type="submit"><i class="fas fa-cart-plus mr-2"></i>Sign in</button>
       </div>
    </div>
   </form>
</nav>
<script>
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.post('/about', function(req, res) {
    var item = req.body.loginInput;
    console.log(item);
});
 //console.log(root.querySelector('.authorize_btn').toString);
 //console.log(root.toString());
  /* global.document= new JSDOM('http://[::1]:3000/').window.document;
const { JSDOM } = jsdom;
d
let login = document.querySelector('.login');*/
/*let authorize_btn= document.querySelector('.authorize_btn');

authorize_btn.addEventListener('click',() =>{
   console.log("soemvalue");
});*/
//console.log("hello");
</script>
