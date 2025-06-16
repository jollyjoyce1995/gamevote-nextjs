import { cookies } from 'next/headers'

export async function getUsername() {
    const cookieStore = await cookies();
    const usertoken = cookieStore.get(`usertoken_${partyCode}`);
    if (usertoken) {
        return usertoken.value;
    }
    return null;
}

export async function setUsername() {
    const cookieStore = await cookies();
    cookieStore.set('token', '123456', {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24 * 7 // 7 days
    })
}
