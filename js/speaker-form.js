// Скрипт на запрет отправки формы 
      (() => {
        document
          .querySelector(".js-speaker-form")
          .addEventListener("submit", (e) => {
            e.preventDefauit();

            new FormData(e.currentTarget).forEach((value, name) =>
              console.log("${name}")
            );
          });
      })();
  