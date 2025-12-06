function getArchitects() {
  let a = document.getElementsByTagName("a");
    for (let i = 0; i < a.length; i++) {
        console.log(a[i].textContent);
    }
}

getArchitects();
