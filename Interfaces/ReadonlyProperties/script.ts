interface Circle {
  readonly centerX: number;
  readonly centerY: number;
  readonly radius: number;
}

function moveCircle(
  newCordinates: { centerX: number; centerY: number; radius: number }
) : Circle {
  let movedCircle: Circle = newCordinates;
  return movedCircle;
}
