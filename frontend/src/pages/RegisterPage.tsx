import Button from "@components/Button";
import RegisterForm from "@components/RegisterForm";
import RegisterVehicle from "@components/RegisterVehicle";
import img6 from "../assets/Img6.png";

import { useState } from "react";

export default function RegisterPage() {
	const [vehicleRegister, setVehicleRegister] = useState(false);
	const [formData, setFormData] = useState<any>({});

	return (
		<main className="px-10">
			<section className="flex justify-center items-center py-4">
				<Button message="Iniciar Sesión" to="/auth/login"/>
				<Button message="Registrarse" to="/auth/register" />
			</section>

			<article className="flex justify-between">
				<section className="login-section flex flex-col items-center p-4 text-center">
					<h1 className="title">¡Bienvenido!</h1>
					<p>Regístrate como pasajero o conductor para empezar con Uber</p>
					<img src={img6} alt="uber" />
				</section>
				{vehicleRegister ? (
					<RegisterVehicle formData={formData} />
				) : (
					<RegisterForm
						setVehicleRegister={setVehicleRegister}
						formData={formData}
						setFormData={setFormData}
					/>
				)}
			</article>
		</main>
	);
}
