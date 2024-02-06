import React, { useState, useEffect } from "react";
import { get } from "./mockBackend/fetch"; // Importa la función 'get' del módulo 'fetch' en el directorio 'mockBackend'

export default function Forecast() {
	const [data, setData] = useState(); // Declara el estado para almacenar los datos del pronóstico del tiempo
	const [notes, setNotes] = useState({}); // Declara el estado para almacenar las notas ingresadas por el usuario
	const [forecastType, setForecastType] = useState("/daily"); // Declara el estado para almacenar el tipo de pronóstico seleccionado por el usuario

	useEffect(() => {
		alert("Requested data from server..."); // Muestra una alerta indicando que se ha solicitado datos al servidor

		// Realiza una solicitud al servidor utilizando la función 'get' del módulo 'fetch' con el tipo de pronóstico seleccionado
		get(forecastType).then((response) => {
			alert("Response: " + JSON.stringify(response, "", 2)); // Muestra una alerta con la respuesta del servidor
			setData(response.data); // Actualiza el estado 'data' con los datos del pronóstico del tiempo recibidos del servidor
		});
	}, [forecastType]); // Este efecto se ejecuta cada vez que cambia el tipo de pronóstico seleccionado por el usuario

	// Función para manejar el cambio en el input de notas para cada elemento del pronóstico
	const handleChange =
		(index) =>
		({ target }) =>
			setNotes((prev) => ({
				...prev,
				[index]: target.value,
			}));

	// Si los datos del pronóstico del tiempo no se han recibido del servidor, muestra un mensaje de "Cargando..."
	if (!data) {
		return <p>Loading... </p>;
	}

	// Retorna un elemento JSX que representa la interfaz de usuario del pronóstico del tiempo
	return (
		<div className="App">
			<h1>My Weather Planner</h1>
			<div>
				{/* Botones para seleccionar el tipo de pronóstico: diario (5-días) o por hora (hoy) */}
				<button onClick={() => setForecastType("/daily")}>5-day</button>
				<button onClick={() => setForecastType("/hourly")}>Today</button>
			</div>
			<table>
				<thead>
					<tr>
						{/* Encabezados de la tabla */}
						<th>Summary</th>
						<th>Avg Temp</th>
						<th>Precip</th>
						<th>Notes</th>
					</tr>
				</thead>
				<tbody>
					{/* Mapea cada elemento del pronóstico del tiempo y muestra los detalles en la tabla */}
					{data.map((item, i) => (
						<tr key={item.id}>
							<td>{item.summary}</td> {/* Resumen del pronóstico */}
							<td> {item.temp.avg}°F</td> {/* Temperatura promedio */}
							<td>{item.precip}%</td> {/* Probabilidad de precipitación */}
							<td>
								{/* Input para ingresar notas personalizadas para cada elemento del pronóstico */}
								<input
									value={notes[item.id] || ""}
									onChange={handleChange(item.id)}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
