## CCS interpreter
A simple interpreter for CCS.

Syntax:

```
// we need to define a process called Main to run the process
Main = A | B // <- parallel operator

// choice
B = x?.A + y!.B // x? means receive, y! means send

// Empty program
A = 0

// we can also use the restriction operator:
Z = A\x

// And the syntax sugar to restrict many vars
Z = A\{x, y, z}
```
