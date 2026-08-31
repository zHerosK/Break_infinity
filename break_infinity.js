// Name: Break Infinity
// ID: breakinfinity
// Description: Extension for handling large numbers using 'e' notation.
// By: zHerosK <https://scratch.mit.edu/users/zHerosK/>
// License: MIT

(function (Scratch) {
    'use strict';

    class Break_Infinity {

        getInfo() {
            return {
                id: 'breakinfinity',
                name: 'Break Infinity',
                color1: '#7B5CFA',
                color2: '#6548D8',
                color3: '#4E36B5',

                blocks: [
                    {
                        opcode: 'make',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'Big E [VALUE]',
                        arguments: {
                            VALUE: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '1ee8'
                            }
                        }
                    },

                    {
                        opcode: 'addBlock',
                        blockType: Scratch.BlockType.REPORTER,
                        text: '[A] + [B]',
                        arguments: {
                            A: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '1e100'
                            },
                            B: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '2e100'
                            }
                        }
                    },

                    {
                        opcode: 'subtractBlock',
                        blockType: Scratch.BlockType.REPORTER,
                        text: '[A] - [B]',
                        arguments: {
                            A: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '5e100'
                            },
                            B: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '2e100'
                            }
                        }
                    },

                    {
                        opcode: 'multiplyBlock',
                        blockType: Scratch.BlockType.REPORTER,
                        text: '[A] × [B]',
                        arguments: {
                            A: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '2e100'
                            },
                            B: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '3e50'
                            }
                        }
                    },

                    {
                        opcode: 'divideBlock',
                        blockType: Scratch.BlockType.REPORTER,
                        text: '[A] ÷ [B]',
                        arguments: {
                            A: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '6e100'
                            },
                            B: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '2e50'
                            }
                        }
                    },

                    {
                        opcode: 'powerBlock',
                        blockType: Scratch.BlockType.REPORTER,
                        text: '[A] ^ [B]',
                        arguments: {
                            A: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '10'
                            },
                            B: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '100'
                            }
                        }
                    },

                    {
                        opcode: 'tenPowerBlock',
                        blockType: Scratch.BlockType.REPORTER,
                        text: '10 ^ [A]',
                        arguments: {
                            A: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '100'
                            }
                        }
                    },

                    {
                        opcode: 'log10Block',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'log10 [A]',
                        arguments: {
                            A: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '1e100'
                            }
                        }
                    },

                    {
                        opcode: 'compareBlock',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'compare [A] [OP] [B]',
                        arguments: {
                            A: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '1ee8'
                            },
                            OP: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'OPS',
                                defaultValue: '>'
                            },
                            B: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '1e100'
                            }
                        }
                    },

                    {
                        opcode: 'equal',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: '[A] = [B] ?',
                        arguments: {
                            A: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '1e100'
                            },
                            B: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '1e100'
                            }
                        }
                    },

                    {
                        opcode: 'greater',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: '[A] > [B] ?',
                        arguments: {
                            A: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '1ee8'
                            },
                            B: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '1e100'
                            }
                        }
                    },

                    {
                        opcode: 'less',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: '[A] < [B] ?',
                        arguments: {
                            A: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '1e100'
                            },
                            B: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '1ee8'
                            }
                        }
                    },

                    {
                        opcode: 'abs',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'abs [A]',
                        arguments: {
                            A: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '-1e100'
                            }
                        }
                    },

                    {
                        opcode: 'negate',
                        blockType: Scratch.BlockType.REPORTER,
                        text: '-[A]',
                        arguments: {
                            A: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '1e100'
                            }
                        }
                    },

                    {
                        opcode: 'tetrate',
                        blockType: Scratch.BlockType.REPORTER,
                        text: '10 tetrate [HEIGHT]',
                        arguments: {
                            HEIGHT: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 3
                            }
                        }
                    }
                ],

                menus: {
                    OPS: {
                        acceptReporters: true,
                        items: ['>', '<', '=', '>=', '<=']
                    }
                }
            };
        }

        /*
         * Representation:
         *
         * sign × mantissa × 10^exponent
         *
         * exponent is itself another Break Infinity number.
         *
         * Examples:
         *
         *  5
         *  2e100
         *  1ee8
         *  2ee100
         *  1e3e8
         */

        create(sign, mantissa, exponent) {
            return {
                sign,
                mantissa,
                exponent
            };
        }

        zero() {
            return this.create(0, 0, null);
        }

        one() {
            return this.create(1, 1, null);
        }

        clone(x) {
            if (!x) return null;

            return this.create(
                x.sign,
                x.mantissa,
                x.exponent === null
                    ? null
                    : this.clone(x.exponent)
            );
        }

        isZero(x) {
            return (
                !x ||
                x.sign === 0 ||
                x.mantissa === 0
            );
        }

        /*
         * ---------------------------------------------------------
         * Parsing
         * ---------------------------------------------------------
         */

        parse(input) {
            if (
                input &&
                typeof input === 'object' &&
                typeof input.sign === 'number'
            ) {
                return this.normalize(
                    this.clone(input)
                );
            }

            let s =
                String(input)
                    .trim()
                    .replace(/E/g, 'e');

            if (!s) {
                return this.zero();
            }

            let sign = 1;

            if (s[0] === '-') {
                sign = -1;
                s = s.slice(1);
            } else if (s[0] === '+') {
                s = s.slice(1);
            }

            if (!s || s === '0') {
                return this.zero();
            }

            return this.parsePositive(
                s,
                sign
            );
        }

        parsePositive(s, sign = 1) {
            const e =
                s.indexOf('e');

            /*
             * No e => ordinary number.
             */
            if (e === -1) {
                const n =
                    Number(s);

                if (
                    !Number.isFinite(n) ||
                    n === 0
                ) {
                    return this.zero();
                }

                return this.fromNumber(
                    sign * n
                );
            }

            /*
             * Everything before the first e is the mantissa.
             */
            let mantissaText =
                s.slice(0, e);

            /*
             * An empty mantissa means 1.
             *
             * Therefore:
             *
             *     ee8
             *
             * is interpreted as:
             *
             *     1e(1e8)
             */
            if (mantissaText === '') {
                mantissaText = '1';
            }

            const mantissa =
                Number(mantissaText);

            if (
                !Number.isFinite(mantissa) ||
                mantissa === 0
            ) {
                return this.zero();
            }

            const rest =
                s.slice(e + 1);

            /*
             * An empty exponent means 1.
             *
             * This makes:
             *
             *     1e
             *
             * equivalent to 1e1.
             *
             * We can alternatively reject it, but accepting it
             * keeps the grammar consistent.
             */
            const exponent =
                rest === ''
                    ? this.one()
                    : this.parseExponent(rest);

            if (!exponent) {
                return this.zero();
            }

            return this.normalize(
                this.create(
                    sign *
                    (mantissa < 0 ? -1 : 1),
                    Math.abs(mantissa),
                    exponent
                )
            );
        }

        parseExponent(s) {
            s =
                String(s)
                    .trim()
                    .replace(/E/g, 'e');

            if (!s) {
                return this.one();
            }

            /*
             * If it begins with e, its mantissa is implicitly 1.
             *
             *     e8
             *
             * means:
             *
             *     1e8
             */
            if (s[0] === 'e') {
                return this.parsePositive(
                    '1' + s,
                    1
                );
            }

            return this.parsePositive(
                s,
                1
            );
        }

        /*
         * ---------------------------------------------------------
         * Conversion
         * ---------------------------------------------------------
         */

        fromNumber(n) {
            if (
                !Number.isFinite(n) ||
                n === 0
            ) {
                return this.zero();
            }

            const sign =
                n < 0 ? -1 : 1;

            const abs =
                Math.abs(n);

            /*
             * Keep normal numbers as normal numbers.
             */
            if (
                abs >= 1e-6 &&
                abs < 1e21
            ) {
                return this.create(
                    sign,
                    abs,
                    null
                );
            }

            const exponent =
                Math.floor(
                    Math.log10(abs)
                );

            const mantissa =
                abs /
                Math.pow(
                    10,
                    exponent
                );

            return this.create(
                sign,
                mantissa,
                this.fromNumber(
                    exponent
                )
            );
        }

        /*
         * ---------------------------------------------------------
         * Normalization
         * ---------------------------------------------------------
         */

        normalize(x) {
            if (!x) {
                return this.zero();
            }

            if (
                x.sign === 0 ||
                x.mantissa === 0 ||
                !Number.isFinite(x.mantissa)
            ) {
                return this.zero();
            }

            x.sign =
                x.sign < 0
                    ? -1
                    : 1;

            x.mantissa =
                Math.abs(x.mantissa);

            /*
             * Normal number.
             */
            if (x.exponent === null) {
                if (
                    x.mantissa >= 1e21 ||
                    x.mantissa < 1e-6
                ) {
                    return this.fromNumber(
                        x.sign *
                        x.mantissa
                    );
                }

                return x;
            }

            x.exponent =
                this.normalize(
                    x.exponent
                );

            /*
             * x × 10^0 = x
             *
             * This fixes:
             *
             *     1e0 -> 1
             *     2e0 -> 2
             */
            if (
                this.isZero(
                    x.exponent
                )
            ) {
                return this.create(
                    x.sign,
                    x.mantissa,
                    null
                );
            }

            /*
             * Normalize mantissa to [1, 10).
             */
            const shift =
                Math.floor(
                    Math.log10(
                        x.mantissa
                    )
                );

            if (shift !== 0) {
                x.mantissa /=
                    Math.pow(
                        10,
                        shift
                    );

                x.exponent =
                    this.add(
                        x.exponent,
                        this.fromNumber(
                            shift
                        )
                    );
            }

            return x;
        }

        /*
         * ---------------------------------------------------------
         * Comparison
         * ---------------------------------------------------------
         */

        compare(a, b) {
            a = this.parse(a);
            b = this.parse(b);

            if (a.sign !== b.sign) {
                return a.sign > b.sign
                    ? 1
                    : -1;
            }

            if (a.sign === 0) {
                return 0;
            }

            const result =
                this.compareAbs(a, b);

            return a.sign > 0
                ? result
                : -result;
        }

        compareAbs(a, b) {
            a = this.normalize(
                this.parse(a)
            );

            b = this.normalize(
                this.parse(b)
            );

            if (this.isZero(a)) {
                return this.isZero(b)
                    ? 0
                    : -1;
            }

            if (this.isZero(b)) {
                return 1;
            }

            /*
             * Both ordinary.
             */
            if (
                a.exponent === null &&
                b.exponent === null
            ) {
                return a.mantissa === b.mantissa
                    ? 0
                    : a.mantissa > b.mantissa
                        ? 1
                        : -1;
            }

            /*
             * Ordinary vs scientific.
             */
            if (
                a.exponent === null
            ) {
                const ec =
                    this.compare(
                        b.exponent,
                        this.zero()
                    );

                return ec > 0
                    ? -1
                    : 1;
            }

            if (
                b.exponent === null
            ) {
                const ec =
                    this.compare(
                        a.exponent,
                        this.zero()
                    );

                return ec > 0
                    ? 1
                    : -1;
            }

            /*
             * The exponent determines the order.
             */
            const ec =
                this.compare(
                    a.exponent,
                    b.exponent
                );

            if (ec !== 0) {
                return ec;
            }

            if (
                a.mantissa ===
                b.mantissa
            ) {
                return 0;
            }

            return a.mantissa >
                b.mantissa
                ? 1
                : -1;
        }

        /*
         * ---------------------------------------------------------
         * Addition
         * ---------------------------------------------------------
         */

        add(a, b) {
            a = this.parse(a);
            b = this.parse(b);

            if (this.isZero(a)) return b;
            if (this.isZero(b)) return a;

            /*
             * Opposite signs.
             */
            if (a.sign !== b.sign) {
                const cmp =
                    this.compareAbs(a, b);

                if (cmp === 0) {
                    return this.zero();
                }

                if (cmp > 0) {
                    const r =
                        this.subtractAbs(
                            a,
                            b
                        );

                    r.sign = a.sign;

                    return this.normalize(r);
                }

                const r =
                    this.subtractAbs(
                        b,
                        a
                    );

                r.sign = b.sign;

                return this.normalize(r);
            }

            const r =
                this.addAbs(a, b);

            r.sign = a.sign;

            return this.normalize(r);
        }

        addAbs(a, b) {
            /*
             * Ordinary.
             */
            if (
                a.exponent === null &&
                b.exponent === null
            ) {
                return this.fromNumber(
                    a.mantissa +
                    b.mantissa
                );
            }

            /*
             * Same exponent.
             */
            if (
                a.exponent !== null &&
                b.exponent !== null &&
                this.compare(
                    a.exponent,
                    b.exponent
                ) === 0
            ) {
                return this.normalize(
                    this.create(
                        1,
                        a.mantissa +
                        b.mantissa,
                        this.clone(
                            a.exponent
                        )
                    )
                );
            }

            /*
             * Different exponents.
             *
             * We do NOT simply take max(height).
             *
             * If the difference is numerically manageable,
             * account for the smaller number.
             */
            const cmp =
                this.compareAbs(a, b);

            const larger =
                cmp >= 0 ? a : b;

            const smaller =
                cmp >= 0 ? b : a;

            if (
                larger.exponent !== null &&
                smaller.exponent !== null
            ) {
                const difference =
                    this.subtract(
                        larger.exponent,
                        smaller.exponent
                    );

                const d =
                    this.toNumber(
                        difference
                    );

                if (
                    Number.isFinite(d) &&
                    d >= 0 &&
                    d <= 20
                ) {
                    const correction =
                        smaller.mantissa *
                        Math.pow(
                            10,
                            -d
                        );

                    return this.normalize(
                        this.create(
                            1,
                            larger.mantissa +
                            correction,
                            this.clone(
                                larger.exponent
                            )
                        )
                    );
                }
            }

            /*
             * Smaller term is below mantissa precision.
             */
            return this.clone(larger);
        }

        subtract(a, b) {
            a = this.parse(a);
            b = this.parse(b);

            b.sign *= -1;

            return this.add(a, b);
        }

        subtractAbs(a, b) {
            const cmp =
                this.compareAbs(a, b);

            if (cmp === 0) {
                return this.zero();
            }

            if (
                a.exponent === null &&
                b.exponent === null
            ) {
                return this.fromNumber(
                    Math.abs(
                        a.mantissa -
                        b.mantissa
                    )
                );
            }

            if (
                a.exponent !== null &&
                b.exponent !== null &&
                this.compare(
                    a.exponent,
                    b.exponent
                ) === 0
            ) {
                return this.normalize(
                    this.create(
                        1,
                        Math.abs(
                            a.mantissa -
                            b.mantissa
                        ),
                        this.clone(
                            a.exponent
                        )
                    )
                );
            }

            const larger =
                cmp > 0 ? a : b;

            const smaller =
                cmp > 0 ? b : a;

            if (
                larger.exponent !== null &&
                smaller.exponent !== null
            ) {
                const difference =
                    this.subtract(
                        larger.exponent,
                        smaller.exponent
                    );

                const d =
                    this.toNumber(
                        difference
                    );

                if (
                    Number.isFinite(d) &&
                    d >= 0 &&
                    d <= 20
                ) {
                    const correction =
                        smaller.mantissa *
                        Math.pow(
                            10,
                            -d
                        );

                    return this.normalize(
                        this.create(
                            1,
                            larger.mantissa -
                            correction,
                            this.clone(
                                larger.exponent
                            )
                        )
                    );
                }
            }

            return this.clone(larger);
        }

        /*
         * ---------------------------------------------------------
         * Multiplication
         * ---------------------------------------------------------
         */

        multiply(a, b) {
            a = this.parse(a);
            b = this.parse(b);

            if (
                this.isZero(a) ||
                this.isZero(b)
            ) {
                return this.zero();
            }

            const sign =
                a.sign * b.sign;

            /*
             * Ordinary × ordinary.
             */
            if (
                a.exponent === null &&
                b.exponent === null
            ) {
                return this.fromNumber(
                    sign *
                    a.mantissa *
                    b.mantissa
                );
            }

            /*
             * Ordinary × scientific.
             */
            if (
                a.exponent === null
            ) {
                return this.normalize(
                    this.create(
                        sign,
                        a.mantissa *
                        b.mantissa,
                        this.clone(
                            b.exponent
                        )
                    )
                );
            }

            if (
                b.exponent === null
            ) {
                return this.normalize(
                    this.create(
                        sign,
                        a.mantissa *
                        b.mantissa,
                        this.clone(
                            a.exponent
                        )
                    )
                );
            }

            /*
             * (a × 10^A)(b × 10^B)
             *
             * = ab × 10^(A+B)
             */
            return this.normalize(
                this.create(
                    sign,
                    a.mantissa *
                    b.mantissa,
                    this.add(
                        a.exponent,
                        b.exponent
                    )
                )
            );
        }

        /*
         * ---------------------------------------------------------
         * Division
         * ---------------------------------------------------------
         */

        divide(a, b) {
            a = this.parse(a);
            b = this.parse(b);

            if (
                this.isZero(b)
            ) {
                return this.zero();
            }

            if (
                this.isZero(a)
            ) {
                return this.zero();
            }

            const sign =
                a.sign * b.sign;

            /*
             * Ordinary / ordinary.
             */
            if (
                a.exponent === null &&
                b.exponent === null
            ) {
                return this.fromNumber(
                    sign *
                    a.mantissa /
                    b.mantissa
                );
            }

            /*
             * Ordinary / scientific.
             */
            if (
                a.exponent === null
            ) {
                return this.normalize(
                    this.create(
                        sign,
                        a.mantissa /
                        b.mantissa,
                        this.negateValue(
                            b.exponent
                        )
                    )
                );
            }

            /*
             * Scientific / ordinary.
             */
            if (
                b.exponent === null
            ) {
                return this.normalize(
                    this.create(
                        sign,
                        a.mantissa /
                        b.mantissa,
                        this.clone(
                            a.exponent
                        )
                    )
                );
            }

            /*
             * (a × 10^A)/(b × 10^B)
             *
             * = a/b × 10^(A-B)
             */
            return this.normalize(
                this.create(
                    sign,
                    a.mantissa /
                    b.mantissa,
                    this.subtract(
                        a.exponent,
                        b.exponent
                    )
                )
            );
        }

        /*
         * ---------------------------------------------------------
         * Powers
         * ---------------------------------------------------------
         */

        tenPower(x) {
            x = this.parse(x);

            if (this.isZero(x)) {
                return this.one();
            }

            /*
             * 10^x = 1eX
             */
            return this.normalize(
                this.create(
                    1,
                    1,
                    this.clone(x)
                )
            );
        }

        power(a, b) {
            a = this.parse(a);
            b = this.parse(b);

            /*
             * x^0 = 1
             */
            if (this.isZero(b)) {
                return this.one();
            }

            /*
             * 0^positive = 0
             */
            if (
                this.isZero(a) &&
                b.sign > 0
            ) {
                return this.zero();
            }

            const av =
                this.toNumber(a);

            const bv =
                this.toNumber(b);

            /*
             * Ordinary finite arithmetic.
             */
            if (
                Number.isFinite(av) &&
                Number.isFinite(bv)
            ) {
                const result =
                    Math.pow(
                        av,
                        bv
                    );

                if (
                    Number.isFinite(result)
                ) {
                    return this.fromNumber(
                        result
                    );
                }
            }

            /*
             * Negative base.
             */
            if (a.sign < 0) {
                if (
                    b.exponent !== null ||
                    !Number.isInteger(
                        b.sign *
                        b.mantissa
                    )
                ) {
                    return this.zero();
                }

                const exponent =
                    b.sign *
                    b.mantissa;

                const positive =
                    this.absValue(a);

                const absoluteExponent =
                    Math.abs(
                        exponent
                    );

                let result =
                    this.power(
                        positive,
                        this.fromNumber(
                            absoluteExponent
                        )
                    );

                if (
                    exponent < 0
                ) {
                    result =
                        this.divide(
                            this.one(),
                            result
                        );
                }

                if (
                    absoluteExponent % 2 !== 0
                ) {
                    result.sign *= -1;
                }

                return result;
            }

            /*
             * a^b = 10^(b × log10(a))
             */
            const exponent =
                this.multiply(
                    b,
                    this.log10(a)
                );

            return this.tenPower(
                exponent
            );
        }

        /*
         * ---------------------------------------------------------
         * Logarithm
         * ---------------------------------------------------------
         */

        log10(x) {
            x = this.parse(x);

            if (
                this.isZero(x) ||
                x.sign < 0
            ) {
                return this.zero();
            }

            if (
                x.exponent === null
            ) {
                return this.fromNumber(
                    Math.log10(
                        x.mantissa
                    )
                );
            }

            /*
             * log10(m × 10^E)
             * =
             * log10(m) + E
             */
            return this.add(
                x.exponent,
                this.fromNumber(
                    Math.log10(
                        x.mantissa
                    )
                )
            );
        }

        /*
         * ---------------------------------------------------------
         * Helpers
         * ---------------------------------------------------------
         */

        absValue(x) {
            x = this.clone(x);

            if (!this.isZero(x)) {
                x.sign = 1;
            }

            return x;
        }

        negateValue(x) {
            x = this.clone(x);

            if (!this.isZero(x)) {
                x.sign *= -1;
            }

            return x;
        }

        toNumber(x) {
            x = this.parse(x);

            if (this.isZero(x)) {
                return 0;
            }

            if (
                x.exponent === null
            ) {
                return (
                    x.sign *
                    x.mantissa
                );
            }

            const exponent =
                this.toNumber(
                    x.exponent
                );

            if (
                !Number.isFinite(
                    exponent
                )
            ) {
                return x.sign > 0
                    ? Infinity
                    : -Infinity;
            }

            if (exponent > 308) {
                return x.sign > 0
                    ? Infinity
                    : -Infinity;
            }

            if (exponent < -324) {
                return 0;
            }

            return (
                x.sign *
                x.mantissa *
                Math.pow(
                    10,
                    exponent
                )
            );
        }

        /*
         * ---------------------------------------------------------
         * Formatting
         * ---------------------------------------------------------
         */

format(x) {
    x = this.normalize(
        this.parse(x)
    );

    if (this.isZero(x)) {
        return '0';
    }

    const sign =
        x.sign < 0 ? '-' : '';

    if (x.exponent === null) {
        return String(
            x.sign * x.mantissa
        );
    }

    let mantissa =
        Number(
            x.mantissa.toPrecision(15)
        ).toString();

    if (mantissa.endsWith('.0')) {
        mantissa =
            mantissa.slice(0, -2);
    }

    return (
        sign +
        mantissa +
        'e' +
        this.formatExponent(x.exponent)
    );
}

formatExponent(x) {
    x = this.normalize(
        this.parse(x)
    );

    if (this.isZero(x)) {
        return '0';
    }

    /*
     * Ordinary exponent.
     *
     * A mantissa of 1 is implicit after an e:
     *
     *     1e1 -> e1
     */
    if (x.exponent === null) {
        if (
            x.sign === 1 &&
            x.mantissa === 1
        ) {
            return '';
        }

        return String(
            x.sign * x.mantissa
        );
    }

    /*
     * Scientific exponent.
     *
     * If its mantissa is 1, it is implicit:
     *
     *     1e8      -> e8
     *     1e1e10   -> ee10
     *     1e1e1e10 -> eee10
     */
    const sign =
        x.sign < 0 ? '-' : '';

    let mantissa =
        Number(
            x.mantissa.toPrecision(15)
        ).toString();

    if (mantissa.endsWith('.0')) {
        mantissa =
            mantissa.slice(0, -2);
    }

    if (
        x.sign === 1 &&
        x.mantissa === 1
    ) {
        return (
            'e' +
            this.formatExponent(x.exponent)
        );
    }

    return (
        sign +
        mantissa +
        'e' +
        this.formatExponent(x.exponent)
    );
}




        /*
         * ---------------------------------------------------------
         * Scratch blocks
         * ---------------------------------------------------------
         */

        make(args) {
            return this.format(
                this.parse(
                    args.VALUE
                )
            );
        }

        addBlock(args) {
            return this.format(
                this.add(
                    args.A,
                    args.B
                )
            );
        }

        subtractBlock(args) {
            return this.format(
                this.subtract(
                    args.A,
                    args.B
                )
            );
        }

        multiplyBlock(args) {
            return this.format(
                this.multiply(
                    args.A,
                    args.B
                )
            );
        }

        divideBlock(args) {
            return this.format(
                this.divide(
                    args.A,
                    args.B
                )
            );
        }

        powerBlock(args) {
            return this.format(
                this.power(
                    args.A,
                    args.B
                )
            );
        }

        tenPowerBlock(args) {
            return this.format(
                this.tenPower(
                    args.A
                )
            );
        }

        log10Block(args) {
            return this.format(
                this.log10(
                    args.A
                )
            );
        }

        compareBlock(args) {
            const c =
                this.compare(
                    args.A,
                    args.B
                );

            switch (
                String(args.OP)
            ) {
                case '>':
                    return c > 0;

                case '<':
                    return c < 0;

                case '=':
                    return c === 0;

                case '>=':
                    return c >= 0;

                case '<=':
                    return c <= 0;

                default:
                    return false;
            }
        }

        equal(args) {
            return (
                this.compare(
                    args.A,
                    args.B
                ) === 0
            );
        }

        greater(args) {
            return (
                this.compare(
                    args.A,
                    args.B
                ) > 0
            );
        }

        less(args) {
            return (
                this.compare(
                    args.A,
                    args.B
                ) < 0
            );
        }

        abs(args) {
            return this.format(
                this.absValue(
                    this.parse(
                        args.A
                    )
                )
            );
        }

        negate(args) {
            return this.format(
                this.negateValue(
                    this.parse(
                        args.A
                    )
                )
            );
        }

        /*
         * ---------------------------------------------------------
         * Tetration
         * ---------------------------------------------------------
         */

        tetrate(args) {
            let h =
                Math.floor(
                    Number(
                        args.HEIGHT
                    )
                );

            if (!Number.isFinite(h)) {
                h = 0;
            }

            h =
                Math.max(
                    0,
                    Math.min(
                        h,
                        1000
                    )
                );

            if (h === 0) {
                return '1';
            }

            let result =
                this.fromNumber(10);

            for (
                let i = 1;
                i < h;
                i++
            ) {
                result =
                    this.tenPower(
                        result
                    );
            }

            return this.format(
                result
            );
        }
    }

    Scratch.extensions.register(
        new Break_Infinity()
    );

})(Scratch);
