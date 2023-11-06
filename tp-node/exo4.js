var fs = require("fs");
const txt = process.argv[3];
const filepath = process.argv[2];

// fs.writeFile("newfile.txt", txt, function (err) {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });
fs.writeFile(filepath, txt, function (err) {
  if (err) throw err;
  console.log("The file has been saved!");
  console.log(txt);
});
