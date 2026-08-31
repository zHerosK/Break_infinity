# Break Infinity

This is a TurboWarp extension made for [elementarygraduate](https://scratch.mit.edu/users/elementarygraduate/) on Scratch.

It allows working with very large numbers using an extended scientific notation, such as `1e8` or `2ee9`.

MIT licensed, so you are free to use, modify and redistribute the code. No credit is required.

## Scientific notation

The rules for the notation, as well as the original idea behind this extension, come from [elementarygraduate](https://scratch.mit.edu/users/elementarygraduate/). The JavaScript code was written by [zHerosK](https://scratch.mit.edu/users/zHerosK/).

The notation is based on normal scientific notation, but the exponent can itself be another number written in the same notation.

For example, `3e2` means `3 × 10²`, while `3e2e100` means `3 × 10^(2 × 10^100)`.

The notation can be nested:

- `1e8` = `10^8`
- `1ee8` = `10^(10^8)`
- `1eee8` = `10^(10^(10^8))`

An `e` can also have an implicit `1` before it, so `ee8` is the same as `1ee8`.

The notation is recursive, which is what allows it to represent numbers much larger than JavaScript's normal `Number` type can handle.

## How it works

The system used to be based on levels, mainly counting how many `e`s a number had. I didn't find that approach very reliable, so I rewrote this part using recursion.

Numbers are represented internally as a sign, a mantissa and an exponent. The exponent is itself another Break Infinity number.

For example, `2e100` is roughly represented as a mantissa of `2` and an exponent of `100`. `1ee8` has a mantissa of `1` and an exponent of `1e8`.

Numbers are normalized before calculations. This also means that equivalent forms such as `1e1e8` and `1ee8` are converted to the same representation.

Numbers are kept in this custom representation instead of being stored directly as JavaScript numbers, since JavaScript does not have a native type for values this large.

## Tetration

[Tetration](https://en.wikipedia.org/wiki/Tetration) is repeated exponentiation. It is the hyperoperation after exponentiation, and is usually written as `a ↑↑ n` using [Knuth's up-arrow notation](https://en.wikipedia.org/wiki/Knuth%27s_up-arrow_notation).

It can be defined recursively as:

`a ↑↑ 0 = 1`

`a ↑↑ (n + 1) = a^(a ↑↑ n)`

For example:

`3 ↑↑ 1 = 3`

`3 ↑↑ 2 = 3^3 = 27`

`3 ↑↑ 3 = 3^(3^3)`

`3 ↑↑ 4 = 3^(3^(3^3))`

So tetration basically creates a power tower.

### Tetration in Break Infinity

The extension currently has a `10 tetrate [HEIGHT]` block. It performs tetration with a base of 10.

For example:

- `10 ↑↑ 0 = 1`
- `10 ↑↑ 1 = 10`
- `10 ↑↑ 2 = 10^10`
- `10 ↑↑ 3 = 10^(10^10)`
- `10 ↑↑ 4 = 10^(10^(10^10))`

This matches the `e` notation used by the extension:

- `10 = 10 ↑↑ 1`
- `1e10 = 10 ↑↑ 2`
- `1ee10 = 10 ↑↑ 3`
- `1eee10 = 10 ↑↑ 4`

This is also why adding more `e`s makes the numbers grow so quickly.

The tetration block currently accepts integer heights from `0` to `1000`.

## Available blocks

The extension currently provides blocks for:

- Addition
- Subtraction
- Multiplication
- Division
- Exponentiation
- Powers of 10
- `log10`
- Comparisons
- Equality
- Absolute value
- Negation
- Tetration

## TurboWarp

This extension is made for [TurboWarp](https://turbowarp.org/).

More information about TurboWarp extensions can be found in the [official documentation](https://docs.turbowarp.org/development/extensions/introduction).

## License

MIT License.

You can use, modify and redistribute this code freely. No credit is required.
