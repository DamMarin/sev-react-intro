import {type ReactNode, useEffect, useState} from "react";
import {deleteCookie, getCookie, setCookie} from "@/utils/cookies.ts";
import {jwtDecode} from "jwt-decode";
import type {LoginFields} from "@/schemas/login.ts";
import {login} from "@/api/login.ts";
import { AuthContext } from "./AuthContext";

type JwtPayload = {
  email?: string;
  tenant_id?: string;
}

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [tenantId, setTenantId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = getCookie("access_token");
    if (token) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setAccessToken(token ?? null);
        const decoded = jwtDecode<JwtPayload>(token);
        setTenantId(decoded.tenant_id ?? null);
      } catch {
        setTenantId(null);
      }
    } else {
      setTenantId(null);
    }
      setLoading(false);
  }, [])

  const loginUser = async (fields: LoginFields) => {
    const res = await login(fields)
    setCookie("access_token", res.access_token, {
      expires: 1,
      sameSite: "Lax", // "Strict"
      secure: false, // true in Production
      path: "/",
    })
    setAccessToken(res.access_token);
    try {
      const decoded = jwtDecode<JwtPayload>(res.access_token);
      setTenantId(decoded.tenant_id ?? null);
    } catch {
      setTenantId(null);
    }
  }

  const logoutUser = () => {
    deleteCookie("access_token");
    setAccessToken(null);
    setTenantId(null);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!accessToken,
        accessToken,
        tenantId,
        loginUser,
        logoutUser,
        loading,
      }}
    >
      {loading ? null : children}
    </AuthContext.Provider>
  )
}