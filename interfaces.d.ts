declare namespace League {
  interface Vector2 {
    x: number
    y: number
    xy: Array2d
  
    at(index: number): number
    reset(): void
    copy(dest?: Vector2): Vector2
    negate(dest?: Vector2): Vector2
    equals(vector: Vector2, threshold?: number): boolean
    length(): number
    squaredLength(): number
    add(vector: Vector2): Vector2
    subtract(vector: Vector2): Vector2
    multiply(vector: Vector2): Vector2
    divide(vector: Vector2): Vector2
    scale(value: number, dest?: Vector2): Vector2
    normalize(dest?: Vector2): Vector2
    toJSON(): Array2d
  }
}