import { Singleton } from "./singleton";

function bootstrap() {
  const firstSingleton = Singleton.getInstance();
  const secondSingleton = Singleton.getInstance();

  firstSingleton.logger();
  secondSingleton.logger();

  console.log(firstSingleton === secondSingleton);
}

bootstrap();
