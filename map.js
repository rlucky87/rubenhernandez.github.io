document.addEventListener("DOMContentLoaded", (event) => {

  setTimeout(() => {

    document.querySelector("#load-iframe-map").innerHTML = `
    <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" style="border:0;"  loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8803.714302220522!2d55.55109275250155!3d-20.90217414066861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sfr!4v1698288705161!5m2!1ses!2sfr"></iframe>`;

  }, 500);

});
