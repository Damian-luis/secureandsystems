interface EmailPayload {
    name: string;
    lastname: string;
    message: string;
    mail: string;
}

export const sendEmail = async (payload: EmailPayload): Promise<void> => {
    console.log("intentara hacer el envio")
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/enviar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        console.log(response)
        if (!response.ok) {
            throw new Error('Failed to send email');
        }
    } catch (error) {
        console.log("no se pudo enviar, abajo la razon")
        console.error(error);
        throw error;
    }
};
