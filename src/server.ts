import { app } from './infra/http/app';

app.on('error', (reason) => {
    console.log('Unhandled error!!!', reason);
    process.exit(0);
});

app.listen(3000, () => console.log('Api running on port 3000'));
