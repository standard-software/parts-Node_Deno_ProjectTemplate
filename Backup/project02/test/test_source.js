import project from '../source/index.js'; // OK

// import { test, test1, test2 } from '../source/index.js'; // NG
// const project = { test, test1, test2 };

console.log(project.test(), project.test1());
