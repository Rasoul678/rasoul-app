export function* chunks<T>(arr: T[], n: number): Generator<T[], void> {
  if (!arr) {
    yield [];
  } else {
    for (let i = 0; i < arr.length; i += n) {
      yield arr.slice(i, i + n);
    }
  }
}
