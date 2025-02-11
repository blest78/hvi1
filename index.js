import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.json());

const finalServers = [
'https://arf-5qab.onrender.com',
'https://arf-0ub1.onrender.com',
'https://arf-3drz.onrender.com',
'https://arf-o17k.onrender.com',
'https://arf-ah7w.onrender.com',
'https://arf-iz5x.onrender.com',
'https://arf-db2z.onrender.com',
'https://arf-9x7v.onrender.com',
'https://arf-5rug.onrender.com',
'https://arf-4m40.onrender.com',
'https://arf-wnsa.onrender.com',
'https://arf-vlq5.onrender.com',
'https://arf-k2be.onrender.com',
'https://arf-cbyn.onrender.com',
'https://arf-roz5.onrender.com',
'https://arf-na0n.onrender.com',
'https://arf-2kbm.onrender.com',
'https://arf-dnq7.onrender.com',
'https://arf-mxfz.onrender.com',
'https://arf-eapw.onrender.com',
];

app.post('/forward-requests', (req, res) => {
  const { accessToken } = req.body;

  if (!accessToken) {
    return res.status(400).send('Access token is required');
  }

  const requests = finalServers.flatMap(url =>
    Array.from({ length: 20 }).map(() =>
      axios.post(url, { accessToken })
        .catch(() => {}) 
    )
  );

  Promise.all(requests);

  res.status(200).send('Requests forwarded by sub distributor');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Sub distributor server listening on port ${port}`);
});
