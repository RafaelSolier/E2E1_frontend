import { ChangeEvent, FormEvent } from "react";

interface RegisterFormProps {}

export default function RegisterForm(props: RegisterFormProps) {
	function handleChange(e: ChangeEvent<HTMLInputElement>) {}

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (props.formData.isDriver) {
		} else {
		}
	}

	return (
		<section className="login-section bg-secondary p-4 rounded-2xl">
			<h1 className="text-2xl font-bold">Registrarse a Uber</h1>
			<form onSubmit={}>
				<div>
					<label htmlFor="firstName">Nombres</label>
					<input
						type="text"
						name="firstName"
						id="firstName"
						value={}
						onChange={}
						required
					/>
				</div>
				<div>
					<label htmlFor="lastName">Apellidos</label>
					<input
						type="text"
						name="lastName"
						id="lastName"
						value={}
						onChange={}
					/>
				</div>
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
				<div>
					<label htmlFor="phone">Celular</label>
					<input type="text" name="phone" id="phone" value={} onChange={} />
				</div>
				<div>
					<label htmlFor="isDriver">¿Eres Conductor?</label>
					<input
						type="radio"
						name="isDriver"
						id="driver"
						value="true"
						checked={}
						onChange={}
					/>{" "}
					Sí
					<input
						type="radio"
						name="isDriver"
						id="passenger"
						value="false"
						checked={}
						onChange={}
					/>{" "}
					No
				</div>
				<button
					id="registerSubmit"
					className="bg-primary text-white font-bold mx-6 py-2 px-4 rounded-full cursor-pointer"
					type="submit"
				>
					Registrarse
				</button>
			</form>
		</section>
	);
}
