function createEmail(to: string, subject = "No Subject") {}

function add(x: number, y: number, z?: number) {
  let sum: number = x + y;
  return typeof z !== "undefined" ? (sum += z) : sum;
}
