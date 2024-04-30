import axiosInstance from "../Utils/axiosClient";

const contactPost = async (data) => {
    const result = await axiosInstance.post(`contact`, data);
    return result.data;
};

const exportFunction = {
    contactPost,
};

export default exportFunction;
