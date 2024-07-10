import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const navigate = useNavigate();

    const [authData, setAuthData] = useState(null);

    const logout = () => {
        localStorage.removeItem("jwtToken");
        setAuthData(null);
        toast.success("Logged out!")
    };

    const login = async (loginData) => {
        console.log(loginData)
        try {
            const response = await fetch("http://localhost:8080/auth/authenticate",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginData)
            })

            if(!response.ok){
                console.log("Network response was not ok");
                toast.error("Incorrect Fields");
                return;
            }

            const token = await response.json();
            console.log(token)
            toast.success("Successfully Logged in!")

            localStorage.setItem("jwtToken", token);
            // localStorage.setItem('JwtToken', JSON.stringify({ token, username }));

            setAuthData({
                token: token,
            });

            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }

    const register = async (signupData) => {
        try {
            const response = await fetch("http://localhost:8080/auth/register",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(signupData)
            })

            if(!response.ok){
                console.log("Network response was not ok");
            }

            const data = await response.text();
            console.log(data);
            toast.success(data);

            navigate("/login")

        } catch (error) {
            console.log(error);
        }
    }

    return(
        <AuthContext.Provider value={{ authData, setAuthData, logout, login, register }}>
            {children}
        </AuthContext.Provider>
    )
}