import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        
  <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">HTML</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">CSS</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">JAVASCRIPT</a>
  </li>
</ul>
      </header>
      <body>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="data:image/png;base64,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" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="data:image/png;base64,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" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="data:image/png;base64,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" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  



  <form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom01">First name</label>
      <input type="text" class="form-control" id="validationCustom01" value="Mark" required/>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationCustom02">Last name</label>
      <input type="text" class="form-control" id="validationCustom02" value="Otto" required/>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom03">City</label>
      <input type="text" class="form-control" id="validationCustom03" required/>
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationCustom04">State</label>
      <select class="custom-select" id="validationCustom04" required>
        <option selected disabled value="">Choose...</option>
        <option>...</option>
      </select>
      <div class="invalid-feedback">
        Please select a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationCustom05">Zip</label>
      <input type="text" class="form-control" id="validationCustom05" required/>
      <div class="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>

<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  //'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false)
}
</script>
</div>
      </body>
      <footer>
<span class="copyright">
              © Maher Abderrahmen
</span>
      </footer>
    </div>
  );
}

export default App;
