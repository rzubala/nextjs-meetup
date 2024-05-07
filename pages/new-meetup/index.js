import { useRouter } from "next/router";
import Head from "next/head";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
    const router = useRouter();

    async function addMeetupHandler(meetupData) {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);

        router.push('/')
    }

    return (
        <>
            <Head>
                <title>Add new Meetups</title>
                <meta name="description" content="New meetup" />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </>
    );
}