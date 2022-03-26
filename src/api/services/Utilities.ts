export class Utilities {
  public static dateToTimestampWithoutTimezone(date: Date) {
    return `${date.getFullYear()}-${this.addZ(date.getMonth() + 1)}-${this.addZ(
      date.getDate()
    )} ${this.addZ(date.getHours())}:${this.addZ(
      date.getMinutes()
    )}:${this.addZ(date.getSeconds())}.${date.getMilliseconds()}`;
  }

  public static addZ(n: number) {
    return n < 10 ? '0' + n : '' + n;
  }
}
