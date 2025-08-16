// filepath: /customer-support-portal/customer-support-portal/src/components/auth/Register.jsx
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Register = () => {
	const { register } = useContext(AuthContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await register(email, password);
			// Redirect or show success message
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<div className='register-container'>
			<h2>Register</h2>
			{error && <p className='error'>{error}</p>}
			<form onSubmit={handleSubmit}>
				<div>
					<label>Email:</label>
					<input
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div>
					<label>Password:</label>
					<input
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<button type='submit'>Register</button>
			</form>
		</div>
	);
};

export default Register;
