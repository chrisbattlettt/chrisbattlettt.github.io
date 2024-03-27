const imageUrls = [
    "/src/img/face.png",
    "/src/img/dagger.png",
    "/src/img/rose.png",
    "/src/img/face.png",
    "/src/img/dagger.png",
    "/src/img/rose.png",
    "/src/img/face.png",
    "/src/img/dagger.png",
    "/src/img/rose.png",
    "/src/img/face.png",
  ];


const container = document.getElementById("image-container");

// Define the number of columns
const numColumns = 5;

// Calculate the number of images per column
const imagesPerColumn = Math.ceil((imageUrls.length) / numColumns);

// Create columns dynamically
for (let i = 0; i < numColumns; i++) {
  const column = document.createElement("div");
  column.classList.add("column"); // Add the "column" class
  container.appendChild(column);

  // Populate each column with images
  for (let j = i * imagesPerColumn; j < (i + 1) * imagesPerColumn; j++) {
    if (j < imageUrls.length) {
      const img = document.createElement("img");
      img.src = imageUrls[j];
      img.style.width = "100%";
      column.appendChild(img);
    }
  }
}