import express from 'express';
import events from "./data.js";

const app = express();
const port = 3000;

// FUNCIONES
const createEvent = (request, response) => {
  // Recibir los campos
  console.log("body", request.body);
  // Crear un objeto evento
  const newEvent = {
    id: events.length + 1,
    name: request.body.name,
    description: request.body.description,
    start_at: request.body.start_at,
    ends_at: request.body.ends_at,
    address: request.body.address,
    booking_open: request.body.true,
    image: request.body.image,
    entradas: request.body.entradas,
  };
  // Añadirlo al array
  events.push(newEvent);
  // Devolver el evento creado
  response.json(newEvent);
}

app.use(express.json());

app.get('/', (req, res) => {
  console.log("Bienvenido a la API de eventos")
  res.json({ message: "Bienvenido a la API de eventos" })
});

app.get('/events', (req, res) => {
  console.log("Listado de todos los Eventos")
  res.json(events)
});

app.post('/events', async (request, response) => {
  createEvent(request, response);
});



app.put('/acción', (req, res) => {
  console.log('actualizar un evento');
  res.json({ message: 'actualizar un evento' });
});

app.delete('/events', () => {
  console.log("Borrar un evento")
  res.json({ message: "Borrar un evento" });
})

app.listen(port, () => {
  console.log(`Servidor levantado en el puerto ${port}`);
})