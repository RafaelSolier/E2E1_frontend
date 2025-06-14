import { LoginRequest } from "@interfaces/auth/LoginRequest";
import { error } from "console";
import { ChangeEvent, FormEvent, useState } from "react";

export default function LoginForm() {
	const [formData, setFormData] = useState<LoginRequest>({});

	function handleChange(e: ChangeEvent<HTMLInputElement>) {}

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {}

	return (
		<section className="login-section bg-secondary">
			<h1 className="title">Ingresar a Uber</h1>
			<form onSubmit={}>
				<div>
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" value={} onChange={} />
				</div>
				<div>
					<label htmlFor="password">Contraseña</label>
					<input
						type="password"
						name="password"
						id="password"
						value={}
						onChange={}
					/>
				</div>
				<button id="loginSubmit" className="" type="submit">
					Iniciar Sesión
				</button>
			</form>
			{error && <div style={{ color: "red" }}>{error}</div>}
			{successMessage && <div style={{ color: "blue" }}>{successMessage}</div>}
		</section>
	);
}
