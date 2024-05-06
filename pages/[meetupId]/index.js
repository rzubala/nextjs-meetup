import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetailsPage(props) {
    return <MeetupDetail {...props.meetupData} />;
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    console.log(meetupId);
    return {
        props: {
            meetupData: {
                id: meetupId,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Trevi-Brunnen_abends.jpg/2880px-Trevi-Brunnen_abends.jpg",
                title: "A First meetup",
                address: "some address 2, 12345 City",
                description: "The meetup description",
            },
        },
    };
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: "m1",
                },
            },
            {
                params: {
                    meetupId: "m2",
                },
            },
        ],
    };
}
