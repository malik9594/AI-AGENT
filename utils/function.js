
// export const tools = [
//   {
//     name: "getWeather",
//     description: "Get weather for a given city",
//     parameters: {
//       type: "object",
//       properties: {
//         city: {
//           type: "string",
//           description: "Name of the city",
//         },
//       },
//       required: ["city"],
//     },
//   },
//   {
//     name: "summarizeText",
//     description: "Summarize a given text",
//     parameters: {
//       type: "object",
//       properties: {
//         text: {
//           type: "string",
//           description: "Text to summarize",
//         },
//       },
//       required: ["text"],
//     },
//   }
// ];

// export async function callFunction(name, args) {
//   if (name === "getWeather") {
//     return `It's sunny in ${args.city}.`; 
//   }
//   if (name === "summarizeText") {
//     return `Summary: ${args.text.slice(0, 50)}...`;
//   }
//   return "Unknown function";
// }
