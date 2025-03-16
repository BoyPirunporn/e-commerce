import axios from "axios";
import { AuthOptions, getServerSession, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";
const authOptions: AuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        session: async ({ session, token }) => {
            const sanitizedToken = Object.keys(token).reduce((p, c) => {
                if (
                    c !== "lat" &&
                    c !== "exp" &&
                    c !== "jti" &&
                    c !== "accessToken" &&
                    c !== "refreshToken"
                ) {
                    return { ...p, [c]: token[c] };
                } else {
                    return p;
                }
            }, {});
            return { ...session, error: token.error, expires: new Date(parseJwt(token.accessToken!).exp * 1000).toISOString(), ...sanitizedToken, accessToken: token.accessToken, refreshToken: token.refreshToken };
        },
        jwt: async ({ token, user }: { token: JWT, user: User; }) => {
            if (typeof user !== "undefined") {
                const jwt = {
                    ...user,
                    accessToken: user.accessToken,
                    refreshToken: user.refreshToken,
                };
                return jwt;
            }
            if (Date.now() / 1000 < Number(parseJwt(token.accessToken!).exp)) {
                return token;
            }else if(Date.now() / 1000 < Number(parseJwt(token.refreshToken!).exp)){
                return await refreshToken(token);
            }
            // accesstoken expired
            return null;
        }
    },
    session: {
        strategy: "jwt",
        maxAge: Number(process.env.SESSION_TIMEOUT) ?? 900,
        updateAge: Number(process.env.SESSION_TIMEOUT) ?? 900
    },
    providers: [
        Credentials({
            id: "spring-credential",
            credentials: {
                email: {},
                password: {}
            },
            authorize: async (credentials) => {
                const { email, password } = credentials!;
                try {

                } catch (error) {

                }
                return null;
            }
        })
    ]
};

export const parseJwt = (token: string) => {
    try {
        // atob: decodes base64 strings
        return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
        return null;
    }
};
export const getIsTokenValid = (token: string) => {
    if (!token) return false;

    //In JavaScript, a time stamp is the number of milliseconds that have passed since January 1, 1970.

    const jwtExpireTimestamp = parseJwt(token).exp;
    //In this case, since the exp value is in seconds format, we need to convert it to milliseconds format in the next step. 

    const jwtExpireDateTime = new Date(jwtExpireTimestamp * 1000);
    //Now we have expiration date of the token 

    if (jwtExpireDateTime < new Date()) {
        console.log("API token expired");
        return false;
    }

    return true;
};

export const refreshToken = async (token: any) => {
    console.log("REFRESH TOKEN")
    try {
        const { data } = await axios.post<{
            payload: {
                token: string;
                refreshToken: string;
            }
        }>(process.env.API_URL + "/api/v1/auth/refresh-token", {
            refreshToken: token.refreshToken,
        });
        console.log(data)
        return {
            ...token,
            accessToken: data.payload.token,
            refreshToken: data.payload.refreshToken ?? token.refreshToken
        };
    } catch (error) {
        return {
            ...token,
            error: "RefreshAccessTokenError"
        };
    }
};

const getSession = () => getServerSession(authOptions);

export { authOptions, getSession }