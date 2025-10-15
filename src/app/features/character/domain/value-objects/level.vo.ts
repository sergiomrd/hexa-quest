export class Level {
  static readonly MAX_LEVEL = 100;
  static readonly MIN_LEVEL = 1;

  private constructor(readonly value: number) {}

  static of(value: number): Level {
    if (!Number.isInteger(value) || value < this.MIN_LEVEL) {
      throw new Error('Level must be a positive integer');
    }
    if (value > this.MAX_LEVEL) {
      throw new Error('Level must be less than 100');
    }
    return new Level(value);
  }
  increment(): Level {
    const next = this.value + 1;
    if (next > Level.MAX_LEVEL) {
      throw new Error(`Level must be less than ${Level.MAX_LEVEL}`);
    }
    return new Level(next);
  }

  equals(other: Level): boolean {
    return this.value === other.value;
  }

  greaterThan(other: Level): boolean {
    return this.value > other.value;
  }

  greaterThanOrEqual(other: Level): boolean {
    return this.value >= other.value;
  }

  lessThan(other: Level): boolean {
    return this.value < other.value;
  }

  lessThanOrEqual(other: Level): boolean {
    return this.value <= other.value;
  }

  expRequiredForNext(): number {
    return Math.floor(50 * Math.pow(this.value, 2));
  }

  progressPercent(totalExp: number): number {
    const prevThreshold = this.totalExpRequiredForCurrent();
    const nextThreshold = this.totalExpRequiredForNext();
    return Math.min(
      100,
      ((totalExp - prevThreshold) / (nextThreshold - prevThreshold)) * 100
    );
  }

  private totalExpRequiredForCurrent(): number {
    return Math.floor(50 * (this.value - 1) * (this.value - 1));
  }

  private totalExpRequiredForNext(): number {
    return Math.floor(50 * this.value * this.value);
  }

  toPrimitive(): number {
    return this.value;
  }

  toString(): string {
    return `Level ${this.value}`;
  }
}
