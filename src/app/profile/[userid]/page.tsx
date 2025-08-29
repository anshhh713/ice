export default function UserProfilePage({params}: any){
    return (
        <div className="profile-page">
            <h1>User Profile</h1>
            <p>Welcome to your profile page! {params.userid}</p>
        </div>
    )
}