export const login = async (params) => {
  try {
    const response = await fetch("http://localhost:3000/api/user/login", {
      method: "POST",
      body: JSON.stringify(params),
    });

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const regist = async (params) => {
  try {
    const response = await fetch("http://localhost:3000/api/user/register", {
      method: "POST",
      body: JSON.stringify(params),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
