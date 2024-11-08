import TweetContent from '../TweetContent/TweetContent';
import UserInfo from '../TweetUsserInfo/TweetUserInfo';
import './Card.css'

export interface Props {
    name: string;
    username: string;
    content: string;
    profile: string;
    children?: React.ReactNode;
}

export default function Card({name, username, content, profile} : Props) {
    return (
        <>
            <div className="card">
                <UserInfo profile={profile} name={name} username={username}/>
                <TweetContent content={content}/>
            </div>
        </>
    )
}