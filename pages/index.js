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

export default function HomePage() {
    return (
        <MeetupList meetups={DUMMY_MEETUPS} />
    );
}