document.addEventListener('DOMContentLoaded', function() {
  let form = document.getElementById('form');
    form.addEventListener('submit', function(e){
        e.preventDefault();
        let value = e.target.children.code.value
        console.log(code)
    })
}, false);