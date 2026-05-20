export async function buscarUsuario(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const userData = await response.json();
    return userData;

    if(response.ok) {
        throw new Error(`Usuário: ${username} não encontrado`);
    }
}