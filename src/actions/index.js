import * as api from "../api";

export const createUserAction = async (data, navi) => {
  try {
    const resp = await api.postUser(data);

    if (resp.status === 201) {
      const { profile } = resp.data;
      localStorage.setItem("subsProfile", JSON.stringify(profile));
      navi("../");
    }
  } catch (error) {
    console.log(error);
  }
};

export const loginUserAction = async (data, navi) => {
  try {
    const resp = await api.loginUser(data);
    if (resp.status === 201) {
      const { existedUser } = resp.data;
      localStorage.setItem("subsProfile", JSON.stringify(existedUser));
      navi("../");
    }
  } catch (error) {
    console.log(error);
  }
};

export const subsUser = async (data, navigate) => {
  try {
    const resp = await api.subsUser(data);
    if (resp.status === 200) {
      console.log(resp);
      window.location.replace(resp.data.url);
    }
  } catch (error) {
    console.log(error);
  }
};

export const premUserAction = async (navigate) => {
  try {
    const resp = await api.premUser();
    if (resp.status === 204) {
      //do data stuff
    }
  } catch (error) {
    if (error.response.status == 401) {
      navigate("../");
    }
  }
};
export const reguUserAction = async (navigate) => {
  try {
    const resp = await api.reguUser();
    if (resp.status === 204) {
      //do data
    }
  } catch (error) {
    if (error.response.status == 401) {
      navigate("../");
    }
  }
};
export const basicUserAction = async (navigate) => {
  try {
    const resp = await api.basicUser();
    if (resp.status === 204) {
      //do data
    }
  } catch (error) {
    if (error.response.status == 401) {
      navigate("../");
    }
  }
};
export const stanUserAction = async (navigate) => {
  try {
    const resp = await api.stanUser();
    if (resp.status === 204) {
      //do data
    }
  } catch (error) {
    if (error.response.status == 401) {
      navigate("../");
    }
  }
};
export const stanCancel = async (data, navigate) => {
  try {
    const resp = await api.stanCancel(data);
    if (resp.status === 204) {
      navigate("../");
    }
  } catch (error) {
    if (error.response.status == 401) {
      navigate("../");
    }
  }
};
