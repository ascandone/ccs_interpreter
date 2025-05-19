export type NonEmptyArr<T> = [T, ...T[]];

export type Agent =
  | { type: "empty" }
  | { type: "choice"; clauses: NonEmptyArr<SelectClause> }
  | { type: "par"; left: Agent; right: Agent }
  | { type: "restriction"; agent: Agent; label: string }
  | { type: "ident"; name: string }; // TODO params

export type SelectClause = {
  type: "receive" | "send";
  evt: string;
  after: Agent;
};

export type Definition = {
  name: string;
  params: string[];
  agent: Agent;
};

export type Program = Definition[];
