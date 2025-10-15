

export class Experience {
  private constructor(readonly value: number) {}

  static of(value: number): Experience {
    if (!Number.isInteger(value) || value < 0) {
      throw new Error('Experience must be a positive integer');
    }
    return new Experience(value);
  }

  add(other: Experience): Experience {
    return new Experience(this.value + other.value);
  }

  equals(other: Experience): boolean {
    return this.value === other.value;
  }

  greaterThan(other: Experience): boolean {
    return this.value > other.value;
  }

  greaterThanOrEqual(other: Experience): boolean {
    return this.value >= other.value;
  }

  lessThan(other: Experience): boolean {
    return this.value < other.value;
  }

  lessThanOrEqual(other: Experience): boolean {
    return this.value <= other.value;
  }

  toPrimitive(): number {
    return this.value;
  }

  toString(): string {
    return `Experience ${this.value}`;
  }
}
