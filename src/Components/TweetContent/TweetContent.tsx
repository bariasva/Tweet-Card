import './TweetContent.css'

export interface Props {
    content: string;
}

export default function TweetContent({content}: Props) {
    return (
        <>
            <div className="tweetContent">
                <p>{content}</p>
            </div>
        </>
    )
}