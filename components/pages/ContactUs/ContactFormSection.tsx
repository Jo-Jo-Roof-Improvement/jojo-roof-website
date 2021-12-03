import { JoButton } from '@components/common/buttons/JoButton';
import { useFormControl } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { TitleTextBlock } from '../Home/TitleTextBlock';
import { FormItem } from './FormItem';
import { FormMessage } from './FormMessage';

export const ContactFormSection = () => {
    const setName = (name: string) => {
        setFormData({ ...formData, name });
    };
    const setPhone = (phone: string) => {
        setFormData({ ...formData, phone });
    };
    const setEmail = (email: string) => {
        setFormData({ ...formData, email });
    };
    const setMessage = (message: string) => {
        setFormData({ ...formData, message });
    };

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const emailServerUrl = 'https://d6nkn6t3bk.execute-api.us-east-1.amazonaws.com/prod';
    // const emailServerUrl = 'http://localhost:5603/dev/';
    const value = useFormControl();

    const [errors, setErrors] = useState({
        name: false,
        phone: false,
        email: false,
        message: false,
    });

    const onSubmit = async (e: any) => {
        e.preventDefault();

        const response = await axios.post(emailServerUrl, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            // credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'X-API-key': '0wqjiamF8j6uRL49yxR9B9gUMNKjBm5U2T20NFSp',
            },
            // referrerPolicy: 'no-referrer',
            body: JSON.stringify({
                formData,
            }),
        });
        const data = response.data;
        console.log(data);

        // if (!data.success) {
        //     alert("Appologies, we weren't able to send your message. Please try again later.");
        // }
    };

    return (
        <div className="flex flex-col w-full">
            <TitleTextBlock title="Feel free to reach out!" containerClassName="mb-6" variant="h4" />
            <form onSubmit={onSubmit}>
                <FormItem type="text" error={errors.name} value={formData.name} onChange={setName} label="Name" />
                <FormItem
                    type="tel"
                    error={errors.phone}
                    value={formData.phone}
                    onChange={setPhone}
                    label="Phone"
                    required={false}
                />
                <FormItem type="email" error={errors.email} value={formData.email} onChange={setEmail} label="Email" />
                <FormMessage error={errors.message} value={formData.message} onChange={setMessage} />
                <JoButton
                    type="submit"
                    fullWidth
                    className="bg-gray-300 mt-5 text-black text-xl hover:shadow-lg hover:bg-gray-600 hover:text-white"
                    style={{ height: '50px' }}
                >
                    Submit
                </JoButton>
            </form>
        </div>
    );
};
