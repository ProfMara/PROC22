const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, cenario;
var parado;
var canvas, angle, torre, solo, canhao;
var torreImg;

function preload() {

}

function setup() {

    canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    parado = {
        isStatic: true
    }

    solo = Bodies.rectangle(600, height - 2, width * 2, 2, parado);
    World.add(world, solo);

    torre = Bodies.rectangle(160, 350, 160, 310, parado);
    World.add(world, solo);


}

function draw() {

    Engine.update(engine);

    rect(0, 0, width, height)
    rect(solo.position.x, solo.position.y, width * 2, 2)


    rect( torre.position.x, torre.position.y, 160, 310);



}