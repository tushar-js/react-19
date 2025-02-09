import { useState } from "react";
import {
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    Container,
    Typography,
    IconButton,
    InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm, Controller } from "react-hook-form";

type FormValues = {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    terms: boolean;
};

export default function SignUpForm() {
    const { handleSubmit, control, watch } = useForm<FormValues>();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const onSubmit = (data: FormValues) => {
        console.log("Form Data:", data);
    };

    return (
        <Container
            maxWidth='xs'
            sx={{
                mt: 5,
                p: 3,
                border: "1px solid #ddd",
                borderRadius: 2,
                boxShadow: 3,
            }}
        >
            <Typography
                variant='h5'
                align='center'
                gutterBottom
            >
                Sign Up
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Full Name */}
                <Controller
                    name='fullName'
                    control={control}
                    defaultValue=''
                    rules={{ required: "Full name is required" }}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            label='Full Name'
                            fullWidth
                            margin='normal'
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                        />
                    )}
                />

                {/* Email */}
                <Controller
                    name='email'
                    control={control}
                    defaultValue=''
                    rules={{
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
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

                {/* Password */}
                <Controller
                    name='password'
                    control={control}
                    defaultValue=''
                    rules={{
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Minimum 6 characters",
                        },
                    }}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            label='Password'
                            type={showPassword ? "text" : "password"}
                            fullWidth
                            margin='normal'
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <IconButton
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            edge='end'
                                        >
                                            {showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    )}
                />

                {/* Confirm Password */}
                <Controller
                    name='confirmPassword'
                    control={control}
                    defaultValue=''
                    rules={{
                        required: "Confirm your password",
                        validate: (value) =>
                            value === watch("password") ||
                            "Passwords do not match",
                    }}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            label='Confirm Password'
                            type={showConfirmPassword ? "text" : "password"}
                            fullWidth
                            margin='normal'
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <IconButton
                                            onClick={() =>
                                                setShowConfirmPassword(
                                                    !showConfirmPassword
                                                )
                                            }
                                            edge='end'
                                        >
                                            {showConfirmPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    )}
                />

                {/* Terms and Conditions */}
                <Controller
                    name='terms'
                    control={control}
                    defaultValue={false}
                    rules={{ required: "You must accept the terms" }}
                    render={({ field, fieldState }) => (
                        <FormControlLabel
                            control={
                                <Checkbox
                                    {...field}
                                    checked={field.value}
                                />
                            }
                            label='I accept the terms and conditions'
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
                    Sign Up
                </Button>
            </form>
        </Container>
    );
}
