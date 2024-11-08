type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;

const calculateShapeArea = (param: Shape): number | undefined => {
  let area: number | undefined = undefined;
  if (param.shape === "circle") {
    area = Math.PI * param.radius * param.radius;
  } else if (param.shape === "rectangle") {
    area = param.height * param.width;
  } else {
    return;
  }
  return Number(area.toFixed(2));
};

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);

const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

console.log(rectangleArea);
