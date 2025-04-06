let angleY = 0;
let scaleFactor = 1;
let cuboX = 150;
let shearX = 0;
let brilho = 100;
let forma3D = 'box'; // ou 'sphere'

let planoX = -200;
let planoScale = 1;
let planoBrilho = 100;
let planoAngle = 0;
let forma2D = 'plane'; // ou 'ellipse'

let controlarCubo = true;
let overlay;

function setup() {
  createCanvas(800, 500, WEBGL);
  angleMode(DEGREES);

  // Camada 2D para texto
  overlay = createGraphics(800, 500);
  overlay.textSize(16);
  overlay.textAlign(LEFT, TOP);
  overlay.fill(255);

  let btnToggle = createButton('Alternar Controle (2D / 3D)');
  btnToggle.position(20, height + 20); // abaixo do canvas
  btnToggle.mousePressed(() => {
    controlarCubo = !controlarCubo;
    console.log(controlarCubo ? "Controlando: Cubo 3D" : "Plano 2D");
  });
}

function draw() {
  background(50);
  ambientLight(80);
  pointLight(255, 255, 255, 0, -200, 200);

  // Figura 2D com controle
  push();
  translate(planoX, 0, 0);
  scale(planoScale);
  rotateZ(planoAngle);
  noStroke();
  fill(0, planoBrilho, 255);
  if (forma2D === 'plane') {
    plane(100, 100);
  } else {
    ellipse(0, 0, 100, 100); // simulando 2D dentro do WEBGL
  }
  pop();

  // Figura 3D com transformações
  push();
  translate(cuboX, 0, 0);
  rotateY(angleY);
  scale(scaleFactor);
  applyMatrix(1, shearX, 0, 0,
              0, 1,      0, 0,
              0, 0,      1, 0,
              0, 0,      0, 1);
  specularMaterial(255, 100, 0);
  shininess(brilho);
  if (forma3D === 'box') {
    box(100);
  } else {
    sphere(60);
  }
  pop();

  // Mostra texto com controle atual
  overlay.clear();
  overlay.text("Figura em controle: " + (controlarCubo ? "CUBO 3D" : "PLANO 2D"), 10, 10);
  overlay.text("Tecla [R] = Reset | [F] = Trocar Forma", 10, 30);
  image(overlay, -width / 2, -height / 2);
}

function keyPressed() {
  if (key === 'R' || key === 'r') {
    // Reset total
    angleY = 0;
    scaleFactor = 1;
    cuboX = 150;
    shearX = 0;
    brilho = 100;
    planoX = -200;
    planoScale = 1;
    planoBrilho = 100;
    planoAngle = 0;
  } else if (key === 'F' || key === 'f') {
    // Troca de forma
    if (controlarCubo) {
      forma3D = forma3D === 'box' ? 'sphere' : 'box';
    } else {
      forma2D = forma2D === 'plane' ? 'ellipse' : 'plane';
    }
  }

  if (controlarCubo) {
    if (keyCode === LEFT_ARROW) cuboX -= 20;
    else if (keyCode === RIGHT_ARROW) cuboX += 20;
    else if (key === 'T' || key === 't') angleY += 15;
    else if (key === '+') scaleFactor += 0.1;
    else if (key === '-') scaleFactor = max(0.1, scaleFactor - 0.1);
    else if (key === 'C' || key === 'c') shearX += 0.1;
    else if (key === 'B' || key === 'b') brilho = min(255, brilho + 30);
  } else {
    if (keyCode === LEFT_ARROW) planoX -= 20;
    else if (keyCode === RIGHT_ARROW) planoX += 20;
    else if (key === '+') planoScale += 0.1;
    else if (key === '-') planoScale = max(0.1, planoScale - 0.1);
    else if (key === 'B' || key === 'b') planoBrilho = min(255, planoBrilho + 30);
    else if (key === 'T' || key === 't') planoAngle += 15;
  }
}
