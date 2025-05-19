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
        "agent": {
          "type": "empty",
        },
        "name": "Main",
        "params": [],
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
        "agent": {
          "args": [],
          "name": "Y",
          "type": "ident",
        },
        "name": "X",
        "params": [],
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
        "agent": {
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
        "name": "Main",
        "params": [],
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
        "agent": {
          "agent": {
            "args": [],
            "name": "Left",
            "type": "ident",
          },
          "label": "x",
          "type": "restriction",
        },
        "name": "Main",
        "params": [],
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
        "agent": {
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
        "name": "Z",
        "params": [],
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
        "agent": {
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
        "name": "Z",
        "params": [],
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
        "agent": {
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
        "name": "Main",
        "params": [],
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
        "agent": {
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
        "name": "Main",
        "params": [],
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
        "agent": {
          "agent": {
            "type": "empty",
          },
          "label": "a",
          "type": "restriction",
        },
        "name": "Main",
        "params": [],
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
        "agent": {
          "agent": {
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
          "label": "a",
          "type": "restriction",
        },
        "name": "Main",
        "params": [],
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
        "agent": {
          "type": "empty",
        },
        "name": "NoArgs",
        "params": [],
      },
      {
        "agent": {
          "type": "empty",
        },
        "name": "SingleArg",
        "params": [
          "a",
          "b",
        ],
      },
      {
        "agent": {
          "type": "empty",
        },
        "name": "TwoArgs",
        "params": [
          "a",
          "b",
        ],
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
        "agent": {
          "args": [],
          "name": "NoArgs",
          "type": "ident",
        },
        "name": "Main",
        "params": [],
      },
      {
        "agent": {
          "args": [
            "x",
          ],
          "name": "SingleArg",
          "type": "ident",
        },
        "name": "Main",
        "params": [],
      },
      {
        "agent": {
          "args": [
            "a",
            "b",
            "c",
          ],
          "name": "ManyArgs",
          "type": "ident",
        },
        "name": "Main",
        "params": [],
      },
    ]
  `);
});
