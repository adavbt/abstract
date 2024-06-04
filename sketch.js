let grayValue = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(180, 180, 179);
  stroke("#000000");
  strokeWeight(4);

  //purple
  fill(grayValue);
  quad(150, 348, 202, 204, 241, 348, 150, 348);

  //red1
  fill("#ee707e");
  quad(185 + mouseX, 49 + mouseX, 123 - mouseX, 49 - mouseX, 121 - mouseX, 169 - mouseX, 189 + mouseX, 169 + mouseX, 185 + mouseX, 49 - mouseX);

  //yellow
  fill("#fbc957");
  quad(129 + mouseY, 255 + mouseY, 129 - mouseY, 162 + mouseY, 177 + mouseY, 162 + mouseY, 197 + mouseY, 298 + mouseY, 177 + mouseY, 308 - mouseY, 129 - mouseY, 255 - mouseY);

  //green
  fill("#59aea3");
  quad(277 + mouseX, 200 + mouseX, 232 + mouseX, 260 + mouseX, 197 + mouseX, 160 + mouseX, 277 + mouseX, 200 + mouseX);

  //red2
  fill("#ee707e");
  quad(193 + mouseX, 288 + mouseX, 205 + mouseX, 158 + mouseX, 242 + mouseX, 270 + mouseX, 193 + mouseX, 288 + mouseX);

  //blue
  fill("#7b75b5");
  quad(284 + mouseY, 201 + mouseY, 181 + mouseY, 176 + mouseY, 184 + mouseY, 60 + mouseY, 279 + mouseY, 76 + mouseY, 256 + mouseY, 149 + mouseY, 286 + mouseY, 181 + mouseY, 284 + mouseY, 201 + mouseY);

  pink(90);
  pinkline(90);

  //pink
}
function pink(a) {
  frameRate(12);
  let x = random(5);
  beginShape();
  fill("#f8c4c4");
  vertex(196 - x, 277 - x);
  vertex(229 - x, 249 - x);
  vertex(266 - x, 284 - x);
  bezierVertex(266 - x, 284 - x, 242 - x, 319 - x, 198 - x, 319 - x);
  bezierVertex(154 - x, 319 - x, 129 - x, 282 - x, 129 - x, 282 - x);
  vertex(164 - x, 254 - x);
  vertex(196 - x, 277 - x);
  endShape();

  //mouth line
}
function pinkline(a) {
  frameRate(12);
  let x = random(5);
  beginShape();
  vertex(129 - x, 282 - x);
  bezierVertex(129 - x, 282 - x, 185 - x, 298 - x, 265 - x, 284 - x);
  endShape();

  //under eye L
  beginShape();
  fill("#ffffff");
  vertex(88, 160);
  bezierVertex(87, 160, 102, 208, 180, 196);
  vertex(182, 162);
  bezierVertex(182, 162, 167, 173, 139, 174);
  bezierVertex(107, 176, 87, 160, 87, 160);
  endShape();

  //nose
  beginShape();
  fill("#90656f");
  strokeWeight(4);
  vertex(174, 245);
  vertex(207, 245);
  vertex(198, 170);
  vertex(197, 117);
  vertex(202, 77);
  vertex(171, 79);
  vertex(178, 167);
  vertex(174, 245);
  endShape();

  //eyelid L
  beginShape();
  fill("#c0ae6b");
  vertex(194, 150);
  bezierVertex(194, 150, 183, 170, 145, 174);
  bezierVertex(108, 178, 87, 160, 87, 160);
  bezierVertex(87, 160, 101, 138, 134, 131);
  bezierVertex(167, 124, 188, 141, 194, 150);
  endShape();

  //eye L
  beginShape();
  fill("#fcfcfc");
  vertex(87, 160);
  bezierVertex(87, 160, 108, 178, 145, 174);
  bezierVertex(183, 170, 194, 150, 194, 150);
  bezierVertex(194, 150, 141, 145, 87, 160);
  endShape();

  //Pupil L
  beginShape();
  fill("#000000");
  vertex(166, 149);
  bezierVertex(166, 149, 140, 171, 116, 154);
  bezierVertex(116, 154, 133, 150, 166, 149);
  endShape();

  lineL(175, 166, 181, 184, 2.5);
  lineL(171, 168, 176, 197, 2.5);
  lineL(168, 169, 173, 197, 2.5);
  lineL(166, 169, 171, 197, 2.5);
  lineL(162, 171, 166, 198, 6);
  lineL(159, 171, 162, 198, 2.5);
  lineL(157, 172, 159, 198, 2.5);
  lineL(150, 173, 152, 198, 2.5);
  lineL(147, 174, 148, 197, 1);
  lineL(144, 174, 144, 197, 2.5);
  lineL(140, 174, 137, 196, 4);
  lineL(137, 175, 133, 195, 2.5);
  lineL(134, 175, 128, 194, 2.5);
  lineL(127, 174, 120, 191, 2.5);
  lineL(124, 174, 117, 190, 7);
  lineL(120, 174, 113, 188, 1);
  lineL(115, 173, 108, 185, 2.5);
  lineL(112, 172, 106, 183, 2.5);
  lineL(109, 171, 103, 181, 10);
  lineL(104, 169, 99, 178, 2.5);
  lineL(101, 168, 97, 175, 1);
  lineL(98, 167, 94, 172, 2.5);
}
function lineL(a, b, c, d, f) {
  frameRate(12);
  let y = random(30);
  strokeWeight(f);
  line(a, b, c, d - y);

  //eyelid R
  beginShape();
  fill("#a27884");
  vertex(316, 146);
  vertex(261, 115);
  vertex(215, 160);
  bezierVertex(215, 160, 242, 175, 269, 173);
  bezierVertex(296, 171, 316, 146, 316, 146);
  vertex(316, 146);
  endShape();

  //eye R
  beginShape();
  fill("#fcfcfc");
  vertex(215, 160);
  bezierVertex(215, 160, 235, 149, 263, 146);
  bezierVertex(292, 143, 316, 146, 316, 146);
  bezierVertex(316, 146, 296, 171, 269, 173);
  bezierVertex(242, 175, 215, 160, 215, 160);
  endShape();

  //undereye R
  beginShape();
  fill("#fcfcfc");
  vertex(218, 160);
  bezierVertex(218, 160, 245, 175, 272, 173);
  bezierVertex(299, 171, 319, 146, 319, 146);
  bezierVertex(319, 146, 316, 183, 277, 185);
  bezierVertex(237, 187, 218, 160, 218, 160);
  endShape();

  lineR(307, 157, 313, 164, 2.5);
  lineR(305, 159, 311, 168, 10);
  lineR(298, 164, 305, 174, 5);
  lineR(295, 166, 301, 177, 2.5);
  lineR(288, 169, 291, 182, 2);
  lineR(285, 170, 288, 183, 2.5);
  lineR(279, 172, 281, 184, 1);
  lineR(276, 172, 276, 185, 8);
  lineR(267, 173, 267, 185, 2.5);
  lineR(264, 173, 264, 185, 7);
  lineR(256, 172, 256, 183, 2.5);
  lineR(253, 172, 253, 183, 2.5);
  lineR(246, 171, 246, 180, 1);
  lineR(243, 170, 242, 179, 2.5);
  lineR(236, 168, 235, 175, 4);
  lineR(232, 166, 231, 172, 7);
}
function lineR(a, b, c, d, f) {
  frameRate(12);
  let y = random(30);
  strokeWeight(f);
  line(a, b, c, d - y);

  //Pupil R
  beginShape();
  fill("#000000");
  strokeWeight(4);
  vertex(265, 147);
  bezierVertex(255, 147, 246, 149, 238, 152);
  bezierVertex(240.09, 154, 241, 155, 244, 156);
  bezierVertex(250, 159, 266, 162, 282, 157);
  bezierVertex(293, 153, 297, 148, 298, 145);
  bezierVertex(289, 145, 278, 145, 265, 147);
  endShape();
}
function mousePressed() {
  grayValue = random(255);
}
