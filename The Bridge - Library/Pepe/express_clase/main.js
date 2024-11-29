import express from 'express';
import events from "./data.js";

const app = express();
const port = 3000;

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
});

app.put('/events/:id', (req, res) => {
  // Sacar el evento en base al ID que recibo
  const eventId = parseInt(req.params.id)
  console.log("events", events);
  console.log("event id", eventId);

  const eventToUpdate = events.findIndex((event) => event.id === eventId);

  // Comprobamos que el evento existe
  if (eventToUpdate < 0) {
    return res.json({ error: "Evento no encontrado" });
  }

  // Actualizamos con los datos que nos mandan
  events[eventToUpdate] = {
    id: events[eventToUpdate].id,
    name: req.body.name ?? events[eventToUpdate].name,
    description: req.body.description ?? events[eventToUpdate].description,
    start_at: req.body.start_at ?? events[eventToUpdate].start_at,
    ends_at: req.body.ends_at ?? events[eventToUpdate].ends_at,
    address: req.body.address ?? events[eventToUpdate].address,
    booking_open: req.body.booking_open ?? events[eventToUpdate].booking_open,
    image: req.body.image ?? events[eventToUpdate].image,
  }
  // Devolvemos el evento actualizado
  res.json(events[eventToUpdate]);
});

app.delete('/events/:id', (req, res) => {
  // Recogemos el ID del evento a borrar
  const eventId = parseInt(req.params.id)
  console.log("event id", eventId);
  const eventToDelete = events.findIndex((event) => event.id === eventId);
  // Comprobamos que existe el evento a borrar
  if (eventToDelete < 0) {
    return res.json({ error: "Evento no encontrado" });
  }
  // Los borramos
  events.splice(eventToDelete, 1);

  // Devolvemos OK
  res.json({ message: "Borrar un evento" });
})

app.listen(port, () => {
  console.log(`Servidor levantado en el puerto ${port}`);
})