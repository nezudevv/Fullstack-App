// import axios from "axios";
// // import { errorMonitor } from "events";
// import addOrUpdateRapper from "./dynamo.js";

// const seedData = async () => {
//   const url = "http://localhost:8000/api";
//   try {
//     const { res: rappers } = await axios.get(url);
//     const rapperPromises = rappers.map(rapper =>
//       addOrUpdateRapper({ ...rapper, id: Date.now() })
//     );
//     await Promise.all(rapperPromises);
//   } catch (error) {
//     console.log("AAHHHHh", error);
//   }
// };

// seedData();
