import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Trevi-Brunnen_abends.jpg/2880px-Trevi-Brunnen_abends.jpg',
        address: 'Some address 5, 12345 City',
        description: 'This is a first meetup'
    },
    {
        id: 'm2',
        title: 'A Second meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Trevi-Brunnen_abends.jpg/2880px-Trevi-Brunnen_abends.jpg',
        address: 'Some address 53, 12345 City',
        description: 'This is a second meetup'
    },
]

export default function HomePage(props) {
    return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     };
// }

export async function getStaticProps(context) {
    const client = await MongoClient.connect(process.env.MONGO_URL);
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        },
        revalidate: 1
    };
}