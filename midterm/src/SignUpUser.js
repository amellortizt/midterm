import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const SignUpUser = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data, null, 2));
        console.log(data);
    };

    return (
        <div>
            <h2>Midterm part 2</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>First Name</label>
                    <Controller
                        name="firstName"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <input {...field} />}
                    />
                    {errors.firstName && <p>Please complete. This field is required!</p>}
                </div>
                <div>
                    <label>Last Name</label>
                    <Controller
                        name="lastName"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <input {...field} />}
                    />
                    {errors.lastName && <p>Please complete. This field is required!</p>}
                </div>
                <div>
                    <label>Username</label>
                    <Controller
                        name="userName"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <input {...field} />}
                    />
                    {errors.userName && <p>Please complete. This field is required!</p>}
                </div>
                <div>
                    <label>Email</label>
                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: true,
                            pattern: /^\S+@\S+$/i,
                        }}
                        render={({ field }) => <input {...field} />}
                    />
                    {errors.email && errors.email.type === 'required' && (
                        <p>Please complete. This field is required!</p>
                    )}
                    {errors.email && errors.email.type === 'pattern' && (
                        <p>Please write a valid email format.</p>
                    )}
                </div>
                <div>
                    <label>Password</label>
                    <Controller
                        name="password"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <input type="password" {...field} />}
                    />
                    {errors.password && <p>Please complete. This field is required!</p>}
                </div>
                <div>
                    <label>Confirm Password</label>
                    <Controller
                        name="confirmPassword"
                        control={control}
                        rules={{
                            required: true,
                            validate: (value) =>
                                value === control.getValues().password ||
                                'Passwords do not match',
                        }}
                        render={({ field }) => <input type="password" {...field} />}
                    />
                    {errors.confirmPassword && errors.confirmPassword.type === 'required' && (
                        <p>Please complete. This field is required!</p>
                    )}
                    {errors.confirmPassword && errors.confirmPassword.type === 'validate' && (
                        <p>{errors.confirmPassword.message}</p>
                    )}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
export default SignUpUser;