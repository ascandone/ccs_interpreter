import { expect, test } from "vitest";
import { unsafeParse } from "./parser";

test("no statements", () => {
  expect(unsafeParse("")).toMatchInlineSnapshot(`[]`);
});

test("nil program", () => {
  expect(
    unsafeParse(`
      Main = 0
    `),
  ).toMatchInlineSnapshot(`
    [
      {
        "name": "Main",
        "params": [],
        "process": {
          "type": "empty",
        },
      },
    ]
  `);
});

test("id", () => {
  expect(
    unsafeParse(`
      X = Y
    `),
  ).toMatchInlineSnapshot(`
    [
      {
        "name": "X",
        "params": [],
        "process": {
          "args": [],
          "name": "Y",
          "type": "ident",
        },
      },
    ]
  `);
});

test("choice", () => {
  expect(
    unsafeParse(`
      Main = Left|Right
    `),
  ).toMatchInlineSnapshot(`
    [
      {
        "name": "Main",
        "params": [],
        "process": {
          "left": {
            "args": [],
            "name": "Left",
            "type": "ident",
          },
          "right": {
            "args": [],
            "name": "Right",
            "type": "ident",
          },
          "type": "par",
        },
      },
    ]
  `);
});

test("restriction", () => {
  expect(
    unsafeParse(String.raw`
      Main = Left\x
    `),
  ).toMatchInlineSnapshot(`
    [
      {
        "name": "Main",
        "params": [],
        "process": {
          "label": "x",
          "process": {
            "args": [],
            "name": "Left",
            "type": "ident",
          },
          "type": "restriction",
        },
      },
    ]
  `);
});

test("choice (unary)", () => {
  expect(
    unsafeParse(String.raw`
      Z = x?.P
    `),
  ).toMatchInlineSnapshot(`
    [
      {
        "name": "Z",
        "params": [],
        "process": {
          "clauses": [
            {
              "after": {
                "args": [],
                "name": "P",
                "type": "ident",
              },
              "evt": "x",
              "type": "receive",
            },
          ],
          "type": "choice",
        },
      },
    ]
  `);
});

test("choice (multiple)", () => {
  expect(
    unsafeParse(String.raw`
      Z =
        x?.P +
        y!.Q +
        z?.R
    `),
  ).toMatchInlineSnapshot(`
    [
      {
        "name": "Z",
        "params": [],
        "process": {
          "clauses": [
            {
              "after": {
                "args": [],
                "name": "P",
                "type": "ident",
              },
              "evt": "x",
              "type": "receive",
            },
            {
              "after": {
                "args": [],
                "name": "Q",
                "type": "ident",
              },
              "evt": "y",
              "type": "send",
            },
            {
              "after": {
                "args": [],
                "name": "R",
                "type": "ident",
              },
              "evt": "z",
              "type": "receive",
            },
          ],
          "type": "choice",
        },
      },
    ]
  `);
});

test("choice/par prec (explicit parens)", () => {
  expect(
    unsafeParse(String.raw`
      Main = (x!.0) | (x?.0)
    `),
  ).toMatchInlineSnapshot(`
    [
      {
        "name": "Main",
        "params": [],
        "process": {
          "left": {
            "clauses": [
              {
                "after": {
                  "type": "empty",
                },
                "evt": "x",
                "type": "send",
              },
            ],
            "type": "choice",
          },
          "right": {
            "clauses": [
              {
                "after": {
                  "type": "empty",
                },
                "evt": "x",
                "type": "receive",
              },
            ],
            "type": "choice",
          },
          "type": "par",
        },
      },
    ]
  `);
});

test("choice/par prec", () => {
  expect(
    unsafeParse(String.raw`
      Main = x!.0 | x?.0
    `),
  ).toMatchInlineSnapshot(`
    [
      {
        "name": "Main",
        "params": [],
        "process": {
          "left": {
            "clauses": [
              {
                "after": {
                  "type": "empty",
                },
                "evt": "x",
                "type": "send",
              },
            ],
            "type": "choice",
          },
          "right": {
            "clauses": [
              {
                "after": {
                  "type": "empty",
                },
                "evt": "x",
                "type": "receive",
              },
            ],
            "type": "choice",
          },
          "type": "par",
        },
      },
    ]
  `);
});

test("choice/par prec (nested)", () => {
  expect(
    unsafeParse(String.raw`
      Main = a!.0 | b!.0 | c!.0
    `),
  ).toEqual(
    unsafeParse(String.raw`
      Main = (a!.0) | ((b!.0) | (c!.0))
    `),
  );
});

test("restriction", () => {
  expect(
    unsafeParse(String.raw`
      Main = 0\a
    `),
  ).toMatchInlineSnapshot(`
    [
      {
        "name": "Main",
        "params": [],
        "process": {
          "label": "a",
          "process": {
            "type": "empty",
          },
          "type": "restriction",
        },
      },
    ]
  `);
});

test("restriction of choice", () => {
  expect(
    unsafeParse(String.raw`
      Main = (x?.0)\a
    `),
  ).toMatchInlineSnapshot(`
    [
      {
        "name": "Main",
        "params": [],
        "process": {
          "label": "a",
          "process": {
            "clauses": [
              {
                "after": {
                  "type": "empty",
                },
                "evt": "x",
                "type": "receive",
              },
            ],
            "type": "choice",
          },
          "type": "restriction",
        },
      },
    ]
  `);
});

test("def params", () => {
  expect(
    unsafeParse(String.raw`
      NoArgs() = 0
      SingleArg(a, b) = 0
      TwoArgs(a, b) = 0
    `),
  ).toMatchInlineSnapshot(`
    [
      {
        "name": "NoArgs",
        "params": [],
        "process": {
          "type": "empty",
        },
      },
      {
        "name": "SingleArg",
        "params": [
          "a",
          "b",
        ],
        "process": {
          "type": "empty",
        },
      },
      {
        "name": "TwoArgs",
        "params": [
          "a",
          "b",
        ],
        "process": {
          "type": "empty",
        },
      },
    ]
  `);
});

test("ident params", () => {
  expect(
    unsafeParse(String.raw`
      Main = NoArgs()
      Main = SingleArg(x)
      Main = ManyArgs(a, b, c)
    `),
  ).toMatchInlineSnapshot(`
    [
      {
        "name": "Main",
        "params": [],
        "process": {
          "args": [],
          "name": "NoArgs",
          "type": "ident",
        },
      },
      {
        "name": "Main",
        "params": [],
        "process": {
          "args": [
            "x",
          ],
          "name": "SingleArg",
          "type": "ident",
        },
      },
      {
        "name": "Main",
        "params": [],
        "process": {
          "args": [
            "a",
            "b",
            "c",
          ],
          "name": "ManyArgs",
          "type": "ident",
        },
      },
    ]
  `);
});

test("restriction sugar", () => {
  expect(unsafeParse(String.raw`Example = Proc\{x, y, z}`)).toEqual(
    unsafeParse(String.raw`Example = Proc\x\y\z`),
  );
});
