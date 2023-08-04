fetch('videos.json')
    .then(res => res.json())
    .then((videos) =>
        document.getElementById("videos").innerHTML = videos
            .map(
                (item) =>
                    `<a href="${item.link}">
        <div class="item">
          <img class="image-reset" src="${item.image}" />
          <div>
              <p class="main__title">${item.name}</p>
              <p class="sub__title">${item.title}</p>
          </div>
        </div>
      </a>
      `
            )
            .join("")
    )

