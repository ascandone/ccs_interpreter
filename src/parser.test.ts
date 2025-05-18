import { expect, test } from "vitest";
import { unsafeParse } from "./parser";

test("no statements", () => {
  expect(unsafeParse("")).toMatchInlineSnapshot(`[]`);
});

test("nil program", () => {
  expect(
    unsafeParse(`
      Main = 0
    `)
  ).toMatchInlineSnapshot(`
    [
      {
        "agent": {
          "type": "empty",
        },
        "name": "Main",
      },
    ]
  `);
});

test("id", () => {
  expect(
    unsafeParse(`
      X = Y
    `)
  ).toMatchInlineSnapshot(`
    [
      {
        "agent": {
          "name": "Y",
          "type": "ident",
        },
        "name": "X",
      },
    ]
  `);
});

test("choice", () => {
  expect(
    unsafeParse(`
      Main = Left|Right
    `)
  ).toMatchInlineSnapshot(`
    [
      {
        "agent": {
          "left": {
            "name": "Left",
            "type": "ident",
          },
          "right": {
            "name": "Right",
            "type": "ident",
          },
          "type": "par",
        },
        "name": "Main",
      },
    ]
  `);
});

test("restriction", () => {
  expect(
    unsafeParse(String.raw`
      Main = Left\x
    `)
  ).toMatchInlineSnapshot(`
    [
      {
        "agent": {
          "agent": {
            "name": "Left",
            "type": "ident",
          },
          "label": "x",
          "type": "restriction",
        },
        "name": "Main",
      },
    ]
  `);
});

test("choice (unary)", () => {
  expect(
    unsafeParse(String.raw`
      Z = x?.P
    `)
  ).toMatchInlineSnapshot(`
    [
      {
        "agent": {
          "clauses": [
            {
              "after": {
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
    `)
  ).toMatchInlineSnapshot(`
    [
      {
        "agent": {
          "clauses": [
            {
              "after": {
                "name": "P",
                "type": "ident",
              },
              "evt": "x",
              "type": "receive",
            },
            {
              "after": {
                "name": "Q",
                "type": "ident",
              },
              "evt": "y",
              "type": "send",
            },
            {
              "after": {
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
      },
    ]
  `);
});

test("choice/par prec (explicit parens)", () => {
  expect(
    unsafeParse(String.raw`
      Main = (x!.0) | (x?.0)
    `)
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
      },
    ]
  `);
});

test("choice/par prec", () => {
  expect(
    unsafeParse(String.raw`
      Main = x!.0 | x?.0
    `)
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
      },
    ]
  `);
});
