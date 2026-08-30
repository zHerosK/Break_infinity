// Name: Break Infinity
// ID: breakinfinity
// Description: Extension for mathematic notations, with 'e'.
// By: zHerosK
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

        create(sign, mantissa, height, exponent) {
            return {
                sign: sign,
                mantissa: mantissa,
                height: height,
                exponent: exponent
            };
        }

        zero() {
            return this.create(0, 0, 0, 0);
        }

        clone(x) {
            return this.create(
                x.sign,
                x.mantissa,
                x.height,
                x.exponent
            );
        }

        isZero(x) {
            return x.sign === 0 || x.mantissa === 0;
        }

        parse(input) {
            let s = String(input).trim();

            if (s === '') {
                return this.zero();
            }

            let sign = 1;

            if (s[0] === '-') {
                sign = -1;
                s = s.slice(1);
            } else if (s[0] === '+') {
                s = s.slice(1);
            }

            s = s.replace(/E/g, 'e');

            if (s === '' || s === '0') {
                return this.zero();
            }

            const firstE = s.indexOf('e');

            if (firstE === -1) {
                const n = Number(s);

                if (!Number.isFinite(n) || n === 0) {
                    return this.zero();
                }

                return this.normalize({
                    sign: sign * (n < 0 ? -1 : 1),
                    mantissa: Math.abs(n),
                    height: 0,
                    exponent: 0
                });
            }

            const mantissaText = s.slice(0, firstE);
            const rest = s.slice(firstE);

            const mantissa = Number(mantissaText);

            if (!Number.isFinite(mantissa) || mantissa === 0) {
                return this.zero();
            }

            let eCount = 0;

            while (
                eCount < rest.length &&
                rest[eCount] === 'e'
            ) {
                eCount++;
            }

            const exponentText = rest.slice(eCount);

            const exponent = Number(exponentText);

            if (!Number.isFinite(exponent)) {
                return this.zero();
            }

            return this.normalize({
                sign: sign * (mantissa < 0 ? -1 : 1),
                mantissa: Math.abs(mantissa),
                height: eCount,
                exponent: exponent
            });
        }

        normalize(x) {
            if (!x || !Number.isFinite(x.mantissa)) {
                return this.zero();
            }

            if (x.mantissa === 0 || x.sign === 0) {
                return this.zero();
            }

            x.sign = x.sign < 0 ? -1 : 1;
            x.mantissa = Math.abs(x.mantissa);

            if (x.height === 0) {
                return x;
            }

            const shift = Math.floor(
                Math.log10(x.mantissa)
            );

            if (shift !== 0) {
                x.mantissa /= Math.pow(10, shift);

                if (x.height === 1) {
                    x.exponent += shift;
                }
            }

            return x;
        }

        format(x) {
            x = this.clone(x);

            if (this.isZero(x)) {
                return '0';
            }

            const sign =
                x.sign < 0 ? '-' : '';

            if (x.height === 0) {
                let n = x.sign * x.mantissa;

                if (
                    Number.isFinite(n) &&
                    Number.isInteger(n)
                ) {
                    return String(n);
                }

                return String(n);
            }

            let m = Number(
                x.mantissa.toPrecision(15)
            ).toString();

            return (
                sign +
                m +
                'e'.repeat(x.height) +
                String(x.exponent)
            );
        }

        toNumber(x) {
            x = this.parse(x);

            if (this.isZero(x)) {
                return 0;
            }

            if (x.height === 0) {
                return x.sign * x.mantissa;
            }

            if (x.height > 1) {
                return x.sign > 0
                    ? Infinity
                    : -Infinity;
            }

            const e = x.exponent;

            if (e > 308) {
                return x.sign > 0
                    ? Infinity
                    : -Infinity;
            }

            if (e < -324) {
                return 0;
            }

            return (
                x.sign *
                x.mantissa *
                Math.pow(10, e)
            );
        }

        compare(a, b) {
            a = this.parse(a);
            b = this.parse(b);

            if (a.sign !== b.sign) {
                return a.sign > b.sign ? 1 : -1;
            }

            if (a.sign === 0) {
                return 0;
            }

            if (a.height !== b.height) {
                return a.sign *
                    (a.height > b.height ? 1 : -1);
            }

            if (a.height === 0) {
                const av = a.sign * a.mantissa;
                const bv = b.sign * b.mantissa;

                return av === bv
                    ? 0
                    : av > bv
                        ? 1
                        : -1;
            }

            if (a.exponent !== b.exponent) {
                return a.sign *
                    (
                        a.exponent > b.exponent
                            ? 1
                            : -1
                    );
            }

            if (a.mantissa !== b.mantissa) {
                return a.sign *
                    (
                        a.mantissa > b.mantissa
                            ? 1
                            : -1
                    );
            }

            return 0;
        }

        add(a, b) {
            a = this.parse(a);
            b = this.parse(b);

            if (this.isZero(a)) {
                return b;
            }

            if (this.isZero(b)) {
                return a;
            }

            if (
                a.height === 0 &&
                b.height === 0
            ) {
                return this.fromNumber(
                    a.sign * a.mantissa +
                    b.sign * b.mantissa
                );
            }

            if (
                a.height === 1 &&
                b.height === 1 &&
                a.exponent === b.exponent
            ) {
                return this.normalize({
                    sign: a.sign,
                    mantissa:
                        a.mantissa +
                        b.sign *
                        a.sign *
                        b.mantissa,
                    height: 1,
                    exponent: a.exponent
                });
            }

            return this.compare(
                this.format(a),
                this.format(b)
            ) >= 0
                ? a
                : b;
        }

        fromNumber(n) {
            if (!Number.isFinite(n) || n === 0) {
                return this.zero();
            }

            return this.normalize({
                sign: n < 0 ? -1 : 1,
                mantissa: Math.abs(n),
                height: 0,
                exponent: 0
            });
        }

        subtract(a, b) {
            a = this.parse(a);
            b = this.parse(b);

            b.sign *= -1;

            return this.add(
                this.format(a),
                this.format(b)
            );
        }

        multiply(a, b) {
            a = this.parse(a);
            b = this.parse(b);

            if (
                this.isZero(a) ||
                this.isZero(b)
            ) {
                return this.zero();
            }

            if (
                a.height === 0 &&
                b.height === 0
            ) {
                return this.fromNumber(
                    a.sign *
                    b.sign *
                    a.mantissa *
                    b.mantissa
                );
            }

            if (
                a.height === 1 &&
                b.height === 1
            ) {
                let exponent =
                    a.exponent +
                    b.exponent;

                let mantissa =
                    a.mantissa *
                    b.mantissa;

                const shift =
                    Math.floor(
                        Math.log10(
                            mantissa
                        )
                    );

                mantissa /=
                    Math.pow(
                        10,
                        shift
                    );

                exponent += shift;

                return this.normalize({
                    sign:
                        a.sign *
                        b.sign,
                    mantissa,
                    height: 1,
                    exponent
                });
            }

            const cmp =
                this.compare(
                    this.format(a),
                    this.format(b)
                );

            return this.normalize({
                sign:
                    a.sign *
                    b.sign,
                mantissa:
                    a.mantissa *
                    b.mantissa,
                height:
                    Math.max(
                        a.height,
                        b.height
                    ),
                exponent:
                    cmp >= 0
                        ? a.exponent
                        : b.exponent
            });
        }

        divide(a, b) {
            a = this.parse(a);
            b = this.parse(b);

            if (this.isZero(b)) {
                return this.zero();
            }

            if (this.isZero(a)) {
                return this.zero();
            }

            if (
                a.height === 0 &&
                b.height === 0
            ) {
                return this.fromNumber(
                    (
                        a.sign *
                        a.mantissa
                    ) /
                    (
                        b.sign *
                        b.mantissa
                    )
                );
            }

            if (
                a.height === 1 &&
                b.height === 1
            ) {
                let mantissa =
                    a.mantissa /
                    b.mantissa;

                let exponent =
                    a.exponent -
                    b.exponent;

                const shift =
                    Math.floor(
                        Math.log10(
                            Math.abs(
                                mantissa
                            )
                        )
                    );

                mantissa /=
                    Math.pow(
                        10,
                        shift
                    );

                exponent += shift;

                return this.normalize({
                    sign:
                        a.sign *
                        b.sign,
                    mantissa,
                    height: 1,
                    exponent
                });
            }

            return this.normalize({
                sign:
                    a.sign *
                    b.sign,
                mantissa:
                    a.mantissa /
                    b.mantissa,
                height:
                    Math.max(
                        a.height,
                        b.height
                    ),
                exponent:
                    a.exponent -
                    b.exponent
            });
        }

        tenPower(x) {
            x = this.parse(x);

            if (this.isZero(x)) {
                return this.fromNumber(1);
            }

            if (x.height === 0) {
                return this.normalize({
                    sign: 1,
                    mantissa: 1,
                    height: 1,
                    exponent:
                        x.sign *
                        x.mantissa
                });
            }

            return this.normalize({
                sign: 1,
                mantissa: 1,
                height:
                    x.height + 1,
                exponent:
                    x.exponent
            });
        }

        power(a, b) {
            a = this.parse(a);
            b = this.parse(b);

            if (
                b.height === 0 &&
                b.sign > 0 &&
                b.mantissa === 0
            ) {
                return this.fromNumber(1);
            }

            if (
                this.isZero(a) &&
                b.sign > 0
            ) {
                return this.zero();
            }

            if (
                a.sign === 1 &&
                a.height === 0 &&
                a.mantissa === 10
            ) {
                return this.tenPower(
                    this.format(b)
                );
            }

            const av = this.toNumber(a);
            const bv = this.toNumber(b);

            if (
                Number.isFinite(av) &&
                Number.isFinite(bv) &&
                Math.abs(bv) < 100000
            ) {
                const result =
                    Math.pow(av, bv);

                if (
                    Number.isFinite(result)
                ) {
                    return this.fromNumber(result);
                }
            }

            if (
                av > 0 &&
                Number.isFinite(av) &&
                Number.isFinite(bv)
            ) {
                const exponent =
                    bv *
                    Math.log10(av);

                if (
                    Number.isFinite(exponent)
                ) {
                    return this.tenPower(
                        String(exponent)
                    );
                }
            }

            return this.zero();
        }

        log10(x) {
            x = this.parse(x);

            if (this.isZero(x)) {
                return this.zero();
            }

            if (x.height === 0) {
                const n =
                    x.sign *
                    x.mantissa;

                if (n <= 0) {
                    return this.zero();
                }

                return this.fromNumber(
                    Math.log10(n)
                );
            }

            if (x.height === 1) {
                return this.fromNumber(
                    x.exponent
                );
            }

            return this.normalize({
                sign: x.sign,
                mantissa: 1,
                height:
                    x.height - 1,
                exponent:
                    x.exponent
            });
        }

        make(args) {
            return this.format(
                this.parse(args.VALUE)
            );
        }

        addBlock(args) {
            return this.format(
                this.add(args.A, args.B)
            );
        }

        subtractBlock(args) {
            return this.format(
                this.subtract(args.A, args.B)
            );
        }

        multiplyBlock(args) {
            return this.format(
                this.multiply(args.A, args.B)
            );
        }

        divideBlock(args) {
            return this.format(
                this.divide(args.A, args.B)
            );
        }

        powerBlock(args) {
            return this.format(
                this.power(args.A, args.B)
            );
        }

        tenPowerBlock(args) {
            return this.format(
                this.tenPower(args.A)
            );
        }

        log10Block(args) {
            return this.format(
                this.log10(args.A)
            );
        }

        compareBlock(args) {
            const c =
                this.compare(
                    args.A,
                    args.B
                );

            switch (String(args.OP)) {
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
            return this.compare(
                args.A,
                args.B
            ) === 0;
        }

        greater(args) {
            return this.compare(
                args.A,
                args.B
            ) > 0;
        }

        less(args) {
            return this.compare(
                args.A,
                args.B
            ) < 0;
        }

        abs(args) {
            const x =
                this.parse(args.A);

            x.sign =
                Math.abs(x.sign);

            return this.format(x);
        }

        negate(args) {
            const x =
                this.parse(args.A);

            if (!this.isZero(x)) {
                x.sign *= -1;
            }

            return this.format(x);
        }

        tetrate(args) {
            let h =
                Math.floor(
                    Number(args.HEIGHT)
                );

            if (!Number.isFinite(h)) {
                h = 0;
            }

            h =
                Math.max(
                    0,
                    Math.min(h, 1000)
                );

            if (h === 0) {
                return '1';
            }

            let result =
                this.parse('10');

            for (
                let i = 1;
                i < h;
                i++
            ) {
                result =
                    this.tenPower(
                        this.format(result)
                    );
            }

            return this.format(result);
        }
    }

    Scratch.extensions.register(
        new Break_Infinity()
    );

})(Scratch);
