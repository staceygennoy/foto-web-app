declare const process: {env: { NODE_ENV: string}};

export class Constants {
  public static TIME_OUT = 7500;
  public static IMAGE_PATH = '/api/image/random';

  public static get API_URL() {
    return 'http://retropie.local:3001';
  }
}
