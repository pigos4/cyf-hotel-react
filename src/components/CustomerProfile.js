import React, { useEffect, useState } from "react";

const CustomerProfile = prop => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    if (prop.id) {
      fetch(`https://cyf-react.glitch.me/customers/${prop.id}`)
        .then(data => data.json())
        .then(data => {
          setProfile(data);
        });
    }
  }, [prop.id]);

  if (!prop.id) return <></>;
  console.log(prop);

  return (
    <>
      <p>Customer {prop.id} Profile</p>;
      {profile ? (
        <ul>
          <li>Id:{profile.id}</li>
          <li>Email:{profile.email}</li>

          {profile.vip ? <li>VIP:{profile.vip.toString()}</li> : ""}
          {profile.vip ? <li>{profile.phoneNumber}</li> : ""}
        </ul>
      ) : (
        <></>
      )}
    </>
  );
};

export default CustomerProfile;
// email: "johndoe@doe.com";
// firstName: "John";
// id: 1;
// phoneNumber: "+44 1632 960185";
// surname: "Doe";
// title: "Mr";
// vip: true;
