const copyright = document.querySelector("#copyright");
const currentYear = new Date().getFullYear();

copyright.innerHTML = `Copyright &copy; ${currentYear}. <a href="https://github.com/albetnov" class="contact-link">Albet Novendo</a>.`;
