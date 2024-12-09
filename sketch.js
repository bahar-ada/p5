function setup() {
  createCanvas(800, 800);
  background(0);
  //دایره
  ellipse(300,300,150,150)
  rect(50,50,200,200)
  fill(100, 100, 250);
   stroke(100, 100, 250);
   //مثلث
  // triangle(250, 50, 90, 300, 300, 400)
  //خط
  //line(0,0,300,300);

  //fill(255);
  //strokeWeight(20);
  //نقطه
  //point(400,400);

  // stroke(0);
  // strokeWeight(5);
  //چهارضلعی
  // quad(50, 20, 400, 100, 450, 450, 20, 470)

  //ذخیره فایل به صورت فایل JPG
  //save("myFirstFile.jpg")
}

function draw() {
  //background(0);

  //رنگ شکل
  //fill(255);

  //مستطیل
  //rect(mouseX, mouseY, 50, 50)

  //رنگ خط
  stroke(0,255,0);

  //قطر خط و نقطه
  //strokeWeight(5)

  //نقطه چین
  //point(mouseX, mouseY);

  //خط از مرکز
  //line(400, 400, mouseX, mouseY);

  //خط پیوسته
  line(pmouseX, pmouseY, mouseX, mouseY)
  

}
