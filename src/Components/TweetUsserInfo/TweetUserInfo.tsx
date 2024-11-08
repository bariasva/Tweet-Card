export interface Props {
    name: string;
    username: string;
    profile: string
    children?: React.ReactNode;
}

export default function UserInfo({name, username, profile, children}: Props) {

    return (
        <div className='userInfo'>
            <img className="pp" src={profile} alt="Profile" />
            <h2><a href='#'>{name}</a></h2>
            <p><a href="#">{username}</a></p>
        </div>
    );
}