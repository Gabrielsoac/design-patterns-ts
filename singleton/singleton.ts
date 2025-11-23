export class Singleton {
  private static instance: Singleton | null = null;

  private constructor() {}

  public static getInstance() {
    if (this.instance === null) {
      this.instance = new Singleton();
      return this.instance;
    }
    return this.instance;
  }

  public logger() {
    console.log(`Yes, I'm instance of singleton`);
  }
}
