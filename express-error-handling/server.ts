import express from 'express';
import { errorMiddleware, ClientError } from './lib/index.js';

type Note = {
  noteId: number;
  content: string;
};

const app = express();

app.use(express.json());

app.get('/api/notes', async (req, res, next) => {
  try {
    const notes = await readNotes();
    res.send(notes);
  } catch (err) {
    next(err);
  }
});

app.post('/api/notes', async (req, res, next) => {
  try {
    const { content } = req.query;
    if (content === undefined) {
      throw new ClientError(400, 'notes is required');
    }
    const note = {
      noteId: Math.floor(100 * Math.random()),
      content: String(content),
    };
    await writeNote(note);
    res.send(note);
  } catch (err) {
    next(err);
  }
});

app.put('/api/notes/:noteId', async (req, res, next) => {
  try {
    const { noteId } = req.params;
    const { content } = req.query;
    if (
      Number.isNaN(noteId) ||
      !Number.isInteger(noteId) ||
      Number(noteId) < 1
    ) {
      throw new ClientError(400, 'noteId is required');
    }
    if (content === undefined) {
      throw new ClientError(400, 'notes is required');
    }
    const note = {
      noteId: +noteId,
      content: String(content),
    };
    await writeNote(note);
    res.send(note);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/notes/:noteId', async (req, res, next) => {
  try {
    const { noteId } = req.params;
    if (noteId === undefined) {
      throw new ClientError(400, 'noteId is required');
    }
    await deleteNote(+noteId);
    res.send(`deleted ${noteId}`);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});

//* **** Mock data handling functions

async function readNotes(): Promise<Note[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() >= 0.5
        ? resolve([
            { noteId: 8, content: 'Error handling middleware is great' },
            { noteId: 12, content: 'Express is easy!' },
            { noteId: 3, content: 'Simplicity itself' },
          ])
        : reject(new Error('What bad luck! Read error.'));
    }, 10);
  });
}

async function writeNote(note: Note): Promise<Note> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() >= 0.5
        ? resolve(note)
        : reject(new Error('What bad luck! Write error.'));
    }, 10);
  });
}

async function deleteNote(id: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() >= 0.5
        ? resolve(id)
        : reject(new Error('What bad luck! Delete error.'));
    }, 10);
  });
}
