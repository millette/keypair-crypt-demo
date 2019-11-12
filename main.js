import enc from "./enc";
import dec from "./dec";

const $form1 = document.querySelector("form#enc");
const $output1 = document.querySelector("pre#encrypted");

const $form2 = document.querySelector("form#dec");
const $output2 = document.querySelector("pre#decrypted");

Promise.all([enc(), dec()]).then(([x, y]) => {
  $form1.addEventListener("submit", function(ev) {
    ev.preventDefault();
    const msg = new window.FormData(this).get("msg");
    x(msg).then(a => {
      console.log("A", a);
      $output1.innerHTML = a;
    });
  });

  $form2.addEventListener("submit", function(ev) {
    ev.preventDefault();
    const msg = new window.FormData(this).get("msg");
    y(msg)
      .then(a => {
        console.log("A", a);
        $output2.innerHTML = a;
      })
      .catch(e => {
        console.log(e);
        $output2.innerHTML = e.toString();
      });
  });
});
