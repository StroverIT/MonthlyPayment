export const getAll = async () => {
  try {
    const res = await fetch(`${process.env.HOST_URL}/api/user/getAll`, {
      next: { revalidate: 60 },
    });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    // Recommendation: handle errors

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (e) {
    console.log(e);
    return { error: "Something went wrong!" };
  }
};
