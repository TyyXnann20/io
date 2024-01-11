var loopImg = [
    "https://plus.unsplash.com/premium_photo-1680293892001-760e1d4cba5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1564934304075-d24ebbbde6f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://plus.unsplash.com/premium_photo-1677087121017-b779a16ff921?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    "https://images.unsplash.com/photo-1681795966788-f2428e0c2c3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1681766864796-f29d9bbad741?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1948&q=80",
  ];

  var imageno = 1;
  displayimg(imageno);
  function nextimg(n) {
    displayimg((imageno += n));
  }
  function displayimg(n) {
    var image = document.getElementsByClassName("image");
    for (let i = 0; i < loopImg.length; i++) {
      document.getElementById("con").innerHTML += ` 
      <div class="image">
        <img src="${loopImg[i]}" alt="">
    </div>`;
    }
    
    if (n > image.length) {
      imageno = 1;
    }

    if (n < 1) {
      imageno = image.length;
    }

    for (i = 0; i < image.length; i++) {
      image[i].style.display = "none";
    }
    image[imageno - 1].style.display = "block";
  }