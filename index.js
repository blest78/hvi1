import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.json());

const finalServers = [
'https://arf-5qab.onrender.com/forward-requests',
'https://arf-0ub1.onrender.com/forward-requests',
'https://arf-3drz.onrender.com/forward-requests',
'https://arf-o17k.onrender.com/forward-requests',
'https://arf-ah7w.onrender.com/forward-requests',
'https://arf-iz5x.onrender.com/forward-requests',
'https://arf-db2z.onrender.com/forward-requests',
'https://arf-9x7v.onrender.com/forward-requests',
'https://arf-5rug.onrender.com/forward-requests',
'https://arf-4m40.onrender.com/forward-requests',
'https://arf-wnsa.onrender.com/forward-requests',
'https://arf-vlq5.onrender.com/forward-requests',
'https://arf-k2be.onrender.com/forward-requests',
'https://arf-cbyn.onrender.com/forward-requests',
'https://arf-roz5.onrender.com/forward-requests',
'https://arf-na0n.onrender.com/forward-requests',
'https://arf-2kbm.onrender.com/forward-requests',
'https://arf-dnq7.onrender.com/forward-requests',
'https://arf-mxfz.onrender.com/forward-requests',
'https://arf-eapw.onrender.com/forward-requests',
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
