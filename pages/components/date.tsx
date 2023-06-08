// import { data } from "autoprefixer";
// import { parseISO, format, } from "date-fns";

// import { stringify } from "querystring";

// export default function Date({ dateString }: {dateString: string}) {
//  const date = parseISO(dateString)
//  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
// }

// export default function DateFormat (dateString) {
//   const date = new Date(dateString);

//     return date.toLocaleDateString("default", {
//       month: "long",
//       day: "numeric",
//       year: "numeric",
//     });

// }


export default function DateFormat(dateString: string){
    const date = new Date(dateString)
    const options: {} = {year:"numeric", month:"long", day:"numeric"}
    return date.toLocaleDateString(undefined, options);
}