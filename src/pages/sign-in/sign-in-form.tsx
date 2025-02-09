import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Box, Typography } from "@mui/material";

type FormValues = {
    email: string;
    password: string;
};

export default function SignInForm() {
    const { control, handleSubmit } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        console.log("Login Data:", data);
    };

    return (
        <Box
            sx={{
                maxWidth: 400,
                mx: "auto",
                mt: 5,
                p: 3,
                boxShadow: 3,
                borderRadius: 2,
            }}
        >
            <Typography
                variant='h5'
                textAlign='center'
                gutterBottom
            >
                Login
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Email Input */}
                <Controller
                    name='email'
                    control={control}
                    defaultValue=''
                    rules={{
                        required: "Email is required",
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email format",
                        },
                    }}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            label='Email'
                            fullWidth
                            margin='normal'
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                        />
                    )}
                />

                {/* Password Input */}
                <Controller
                    name='password'
                    control={control}
                    defaultValue=''
                    rules={{
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "At least 6 characters",
                        },
                    }}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            label='Password'
                            type='password'
                            fullWidth
                            margin='normal'
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                        />
                    )}
                />

                {/* Submit Button */}
                <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    fullWidth
                    sx={{ mt: 2 }}
                >
                    Login
                </Button>
            </form>
        </Box>
    );
}
