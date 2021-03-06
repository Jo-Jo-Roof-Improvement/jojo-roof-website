import { NextApiRequest, NextApiResponse } from 'next';

const emailServerUrl =
    'https://puxok6fztb.execute-api.us-east-1.amazonaws.com/prod/Jo-Jo-email-service-prod-Jo-Jo-Email-Function';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = JSON.parse(req.body);

    await fetch(emailServerUrl, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({ formData: data }),
    });
    res.status(200).json({ success: true });
}
