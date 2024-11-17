import React from "react";

function Profile({ token }) {
  return (
    <div>
      <h1>Bem-vindo ao seu Perfil!</h1>
      <p>Token: {token}</p>
    </div>
  );
}

export default Profile;