import mongoose from 'mongoose';
import app from './app';
const port = 3000

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(`${process.env.DB_URL}`);

    try {
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (err) {
        console.log(err)
    }
}