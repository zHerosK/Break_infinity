# Break infinity

Break infinity is a [TurboWarp](https://turbowarp.org/) extension created for [elementarygraduate](https://scratch.mit.edu/users/elementarygraduate/) on Scratch.

It allows calculations with extremely large numbers using an extended form of scientific notation, such as `1e8`, `2ee9`, and beyond.

The project is licensed under the MIT License, so the code is free to use, modify, and redistribute. No credit is required.

## Scientific notation rules

The rules used by this project, as well as the original idea behind this extension and the name (Break Infinity), are entirely the work of [elementarygraduate](https://scratch.mit.edu/users/elementarygraduate/).

The JavaScript implementation was written by [zHerosK](https://scratch.mit.edu/users/zHerosK/).

### Extended scientific notation

The notation used by this extension extends ordinary scientific notation recursively.

In ordinary scientific notation:

`3e2`

means:

`3 × 10² = 300`

In this extension, the exponent can itself be written using the same notation.

For example:

`3e2e100`

means:

`3 × 10^(2 × 10^100)`

The notation can be nested even further. For example:

`1ee8`

means:

`10^(10^8)`

and:

`1eee10`

means:

`10^(10^(10^10))`

This allows the extension to represent numbers that are far beyond the range of JavaScript's native `Number` type.

## System

The system now uses recursion to perform calculations.

Previously, it used a level-based system that counted the number of `e`s. I found that this approach was not sufficiently robust, so I completely rewrote this part of the code and fixed several bugs.

Numbers are normalized before calculations are performed. They are stored and manipulated as strings because JavaScript does not natively support this kind of extended scientific notation.

For example:

`1e1e8 = 1ee8`

These two expressions represent the same value, so the normalization system converts them to a common representation before performing calculations.

The recursive structure of the notation also makes it possible to work with numbers whose exponents are themselves far too large to be represented normally.

## Tetration

[Tetration](https://en.wikipedia.org/wiki/Tetration) is a mathematical operation consisting of repeated exponentiation.

It is the next hyperoperation after exponentiation:

- Addition is repeated successor.
- Multiplication is repeated addition.
- Exponentiation is repeated multiplication.
- Tetration is repeated exponentiation.

Tetration is usually written using [Knuth's up-arrow notation](https://en.wikipedia.org/wiki/Knuth%27s_up-arrow_notation):

`a ↑↑ n`

For a positive integer height `n`, tetration can be defined recursively as:

`a ↑↑ 1 = a`

and:

`a ↑↑ (n + 1) = a^(a ↑↑ n)`

For example:

`3 ↑↑ 1 = 3`

`3 ↑↑ 2 = 3^3 = 27`

`3 ↑↑ 3 = 3^(3^3) = 3^27`

`3 ↑↑ 4 = 3^(3^(3^3))`

The last expression is a power tower containing four `3`s.

Exponentiation is evaluated from the top down (right to left), so:

`3^(3^3)`

means:

`3^27`

and not:

`(3^3)^3`.

### Tetration and huge numbers

Tetration grows dramatically faster than ordinary exponentiation.

For example:

`10^10`

is already a very large number, but:

`10 ↑↑ 3 = 10^(10^10)`

is incomparably larger.

This is closely related to the extended notation used by Break infinity.

For example:

`1ee10`

can be interpreted as:

`10^(10^10)`

which is exactly:

`10 ↑↑ 3`

So, with base `10`, repeated `e`s provide a compact way of describing structures closely related to tetration.

Adding another `e` increases the height of the exponentiation structure even further:

`1eee10 = 10^(10^(10^10))`

which is:

`10 ↑↑ 4`

when interpreted as a power tower of four `10`s.

For more information about tetration, see the [Wikipedia article on tetration](https://en.wikipedia.org/wiki/Tetration) and the [Wikipedia article on hyperoperations](https://en.wikipedia.org/wiki/Hyperoperation).

## TurboWarp

This project is designed for [TurboWarp](https://turbowarp.org/), a Scratch-compatible environment with support for custom JavaScript extensions.

You can learn more about creating and using TurboWarp extensions in the [official TurboWarp documentation](https://docs.turbowarp.org/development/extensions/introduction).

## License

This project is released under the [MIT License](https://opensource.org/license/mit/).

You are free to use, modify, copy, and redistribute the code. No credit is required.
