import Image from 'next/image'

const UserInfo = ({ firstName, bio, photo, id }) => {
  return (
    <>
      <div className="user-info" style={{display: "flex", gap: "20px", justifyContent: "center", backgroundColor: "#add1f0", padding: "25px", borderRadius: "20px"}}>
        <div className="profile-photo" style={{width: "150px", height: "150px", position: "relative", overflow: "hidden"}}>
          <Image style={{borderRadius: "50%"}} src={photo} alt="User profile photo" fill objectFit="cover"></Image>
        </div>
        <div className="name-and-bio" style={{width: "50%"}}>
          <h2>{firstName}</h2>
          <p>{bio}</p>
        </div>
      </div>
    </>
  )
}

export default UserInfo;
