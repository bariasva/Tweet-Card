import MyButton from '../MyButton/MyButton';
import TweetContent from '../TweetContent/TweetContent';
import UserInfo from '../TweetUsserInfo/TweetUserInfo';
import './Card.css'
import retweet from '../../img/loop.svg'
import comment from '../../img/speech-bubble.svg'
import heart from '../../img/heart.svg'
import stats from '../../img/statistics.svg'
import save from '../../img/save.svg'

export interface Props {
    name: string;
    username: string;
    content: string;
    profile: string;
    pic?: string;
    num?: string;
    children?: React.ReactNode;
}

export default function Card({name, username, content, profile, pic, num} : Props) {
    return (
        <>
            <div className="card">
                <UserInfo profile={profile} name={name} username={username}/>
                <TweetContent content={content}/>
                <div className='interactions'>
                    <div>
                        <MyButton pic={comment} number="53"/>
                    </div>
                    <div>
                        <MyButton pic={retweet} number="2k"/>
                    </div>
                    <div>
                        <MyButton pic={heart} number="25k"/>
                    </div>
                    <div>
                        <MyButton pic={stats} number="300k"/>
                    </div>
                    <div>
                        <MyButton pic={save}/>
                    </div>
                </div>
            </div>
        </>
    )
}