import { Routes } from './routes';


export const sendWebhook = async (data: any) => {
    const response = await fetch(Routes.webhook, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Failed to send webhook');
    }

    return response.json();
};

export const handleWebhook = async (req: any, res: any) => {
    if (req.method === 'POST') {
        const webhookData = req.body;

        console.log('Received webhook data:', webhookData);

        res.status(200).json({ status: 'success', message: 'Webhook received' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};