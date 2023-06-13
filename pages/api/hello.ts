import { NextApiRequest, NextApiResponse } from "next"

export default(_: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({text: 'Hello there'})
}

// Normal way without NextApiRequest and Response
// export default function handler(req, res) {
//     res.status(200).json({text: 'Hello Hel'})
// }