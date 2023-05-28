

export const create = async (obj) => {
  const res = await fetch(`/api/offer/admin/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  const data = await res.json();
  return data;
};
