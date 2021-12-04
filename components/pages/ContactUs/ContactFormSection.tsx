import { JoButton } from '@components/common/buttons/JoButton';
import { TextBlock } from '@components/common/text/TextBlock';
import { CircularProgress, Slide, SlideProps, Snackbar } from '@mui/material';
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

    const clearFormData = () => {
        setFormData({
            name: '',
            phone: '',
            email: '',
            message: '',
        });
    };

    const [errors, setErrors] = useState({
        name: false,
        phone: false,
        email: false,
        message: false,
    });

    const [spinning, setSpinning] = useState(false);

    const onSubmit = async (e: any) => {
        e.preventDefault();
        setSpinning(true);
        const response = await fetch('/api/submit-contact', {
            method: 'POST',
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        setSpinning(false);
        if (!data.success) {
            setSnackErrorOpen(true);
        } else {
            setSnackOpen(true);
        }

        clearFormData();
        return;
    };

    const [snackOpen, setSnackOpen] = useState(false);
    const [snackErrorOpen, setSnackErrorOpen] = useState(false);

    return (
        <>
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
                    <FormItem
                        type="email"
                        error={errors.email}
                        value={formData.email}
                        onChange={setEmail}
                        label="Email"
                    />
                    <FormMessage error={errors.message} value={formData.message} onChange={setMessage} />
                    <JoButton
                        endIcon={spinning ? <CircularProgress size={24} /> : null}
                        type="submit"
                        fullWidth
                        className="hover:shadow-lg hover:bg-gray-600 hover:text-white"
                        style={{
                            height: '50px',
                            backgroundColor: 'gray',
                            marginTop: '1.25rem',
                            color: "black",
                            fontSize: "1.25rem",
                            lineHeight: "1.75rem",

                        }}
                    >
                        {!spinning ? 'Submit' : 'Submitting...'}
                    </JoButton>
                </form>
            </div>
            <Snackbar
                className="font-semibold text-center"
                style={{ fontFamily: 'Source Sans Pro', textAlign: 'center' }}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                color="success"
                open={snackOpen}
                onClose={() => setSnackOpen(false)}
                TransitionComponent={SlideTransition}
                message={<TextBlock align="center">Message successfully sent!</TextBlock>}
            />
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                color="error"
                open={snackErrorOpen}
                onClose={() => setSnackErrorOpen(false)}
                TransitionComponent={SlideTransition}
            >
                <TextBlock align="center">
                    Appologies! We were not able to send your message at this time. Please try again later
                </TextBlock>
            </Snackbar>
        </>
    );
};

function SlideTransition(props: SlideProps) {
    return <Slide {...props} direction="up" />;
}
