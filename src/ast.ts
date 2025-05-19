export type NonEmptyArr<T> = [T, ...T[]];

export type Process =
  | { type: "empty" }
  | { type: "choice"; clauses: NonEmptyArr<SelectClause> }
  | { type: "par"; left: Process; right: Process }
  | { type: "restriction"; process: Process; label: string }
  | { type: "ident"; name: string; args: string[] };

export type SelectClause = {
  type: "receive" | "send";
  evt: string;
  after: Process;
};

export type Definition = {
  name: string;
  params: string[];
  process: Process;
};

export type Program = Definition[];
