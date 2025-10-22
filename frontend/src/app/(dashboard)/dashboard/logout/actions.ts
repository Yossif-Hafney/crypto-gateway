export async function logout(): Promise<boolean> {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ||
      window.location.origin;

    const res = await fetch(`${baseUrl}/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
    return res.ok;
  } catch (err) {
    console.error("Logout error:", err);
    return false;
  }
}

export async function handleLogout(
  setIsLoading: (loading: boolean) => void,
  router: { push: (path: string) => void }
) {
  setIsLoading(true);
  try {
    const ok = await logout();
    if (ok) router.push("/signin");
    else console.error("Logout failed");
  } catch (err) {
    console.error("Logout error:", err);
  } finally {
    setIsLoading(false);
  }
}
